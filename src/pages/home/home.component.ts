import { Component, Vue, Watch } from 'vue-property-decorator'
import Multiselect from 'vue-multiselect'
import ProductService from '@/shared/services/productService'
import { AxiosResponse } from 'axios'
import { IProduct, Product } from '@/shared/models/productms/ProductModel'
import RelationService from '@/shared/services/relationService'
import CountryService from '@/shared/services/CountryService'
import PaymentMethodService from '@/shared/services/paymentMethodService'
import DeliveryMethodService from '@/shared/services/deliveryMethodService'
import CartOrder from '@/shared/models/orderms/CartOrderModel'
import OrderCustomer from '@/shared/models/orderms/OrderCustomerModel'
import OrderLine from '@/shared/models/orderms/OrderLineModel'
import OrderProduct from '@/shared/models/orderms/OrderProductModel'
import { IPromotion } from '@/shared/models/productms/PromotionModel'
import OrderDiscountLine, { IOrderDiscountLine } from '@/shared/models/orderms/OrderDiscountLineModel'
import OrderPromotion from '@/shared/models/orderms/OrderPromotionModel'
import CartOrdersService from '@/shared/services/orderms/CartOrdersService'
import OrderLineDeliveryMethod from '@/shared/models/orderms/OrderLineDeliveryMethodModel'
import { EventBus } from '@/shared/eventBus'
import { IRelationEntity, RelationEntity } from '@/shared/models/relationms/relationModel'
import { RelationProfile } from '@/shared/models/relationms/relation-profile.model'
import { IRelationAddress, RelationAddress } from '@/shared/models/relationms/relation-address.model'
import { Role } from '@/shared/models/role.model'

@Component({
  components: {
    Multiselect
  }
})
export default class HomeComponent extends Vue {
  $refs!: {
    errorModal: HTMLElement;
  }

  public productId: any
  public productPrice: number | null
  public product: IProduct
  public user: IRelationEntity
  public selectedCountry: any
  public selectedPayment: any
  public totalTax: number
  public productService: any
  public productAttributes: any[]
  public allPaymentMethods: any[]
  public selectedProductAttributes: any[]
  public relationService: any
  public countryService: any
  public cartOrderService: any
  public shippingService: any
  public selectedShippingMethod: any
  public paymentService: any
  public credentials: any
  public order: any
  public userPassword: any
  public cartError: any
  public createNewUser: boolean
  public submited: boolean
  public login: boolean
  public divEl: HTMLElement | null

  constructor () {
    super()
    this.productId = null
    this.selectedCountry = null
    this.divEl = null
    this.order = new CartOrder()
    this.selectedShippingMethod = null
    this.cartError = ''
    this.productAttributes = []
    this.selectedProductAttributes = []
    this.allPaymentMethods = []
    this.product = new Product()
    this.productService = ProductService.getInstance()
    this.relationService = RelationService.getInstance()
    this.countryService = CountryService.getInstance()
    this.paymentService = PaymentMethodService.getInstance()
    this.shippingService = DeliveryMethodService.getInstance()
    this.cartOrderService = CartOrdersService.getInstance()
    this.productPrice = null
    this.userPassword = ''
    this.credentials = {
      username: '',
      password: '',
      rememberMe: true,
      administrationId: null
    }
    this.createNewUser = false
    this.submited = false
    this.login = false
    this.totalTax = 8.19
    this.selectedPayment = 1
    this.user = new RelationEntity(undefined, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined, new RelationProfile(), undefined, undefined, undefined,
      [new RelationAddress()], undefined, undefined, undefined, undefined, undefined, undefined, [{ id: 2, version: 0 }], undefined, undefined)
  }

  public created () {
    const pagination: any = {
      page: 0,
      size: 100000,
      sort: 'id,asc'
    }
    this.countryService.getAll(pagination).then((resp: any) => {
      if (resp && resp.data && resp.data.content) {
        this.$store.commit('countries', resp.data.content)
      }
    })
    this.paymentService.getAll(pagination, undefined).then((resp: any) => {
      const methods: any = []
      resp.data.content.forEach((payment: any) => {
        methods.push({
          label: `${this.$helpers.getMultiLangName(payment.paymentMethodLanguages)} (+${payment.administrativeCostsFixed ? payment.administrativeCostsFixed + this.$store.state.currency : payment.administrativeCostsPercentage + '%'})`,
          value: payment
        })
      })
      this.$store.commit('paymentMethods', methods)
    })
    this.shippingService.getAll(pagination, undefined).then((resp: any) => {
      const methods: any = []
      resp.data.content.forEach((shipping: any) => {
        methods.push({
          label: `${this.$helpers.getMultiLangName(shipping.deliveryMethodLanguages)}`,
          value: shipping
        })
      })
      this.$store.commit('shippingMethods', methods)
    })
  }

  public mounted () {
    EventBus.$on('showServerError', (content: any) => {
      if (content.response.data) {
        const message = {
          title: content.response.data.title,
          content: content.response.data.detail
        }
        this.cartError = message.content
        // @ts-ignore
        $('#errorModal').modal('show')
      }
    })
    let productsList: any = localStorage.getItem('products')
    if (productsList) {
      productsList = productsList.split(',')
      this.productId = productsList[0]
    } else {
      this.divEl = document.getElementById('arcomplete')
      this.productId = this.divEl?.dataset.productid
    }
    let lang = 'en'
    if (this.divEl && this.divEl.dataset && this.divEl.dataset.locale) {
      lang = this.divEl.dataset.locale
    }
    this.$i18n.locale = lang
    this.$store.commit('changeLang', lang)
    if (this.productId !== null) {
      this.getProduct()
    }
  }

  public getProduct () {
    this.productService.get(this.productId).then((resp: AxiosResponse) => {
      if (resp && resp.data) {
        this.product = resp.data
        const attrs: any[] = resp.data.attributes.map((attribute: any) => {
          const options: any = attribute.attributeValues.map((option: any) => {
            return {
              label: `${this.$helpers.getMultiLangName(attribute.attributeLanguages)} - ${this.$helpers.getMultiLangName(option.attributeValueLanguages)}`,
              category: 'Front-end'
            }
          })
          return {
            label: this.$helpers.getMultiLangName(attribute.attributeLanguages),
            libs: options
          }
        })
        this.productAttributes = attrs
        this.callPricingEngine()
      }
    })
  }

  public getProductTotalPrice () {
    if (this.product && this.product.price && this.product.tax) {
      return (this.product.price + ((this.product.price / 100) * this.product.tax)).toFixed(3)
    } else {
      return 0
    }
  }

  public getTotalTax () {
    if (this.product && this.product.price && this.product.tax) {
      return ((this.product.price / 100) * this.product.tax).toFixed(3)
    } else {
      return 0
    }
  }

  public checkEmailAddress () {
    const pagination = {
      page: 0,
      size: 20,
      sort: 'id,asc'
    }
    const query = 'email=in=(' + this.user.email + ')'
    RelationService.getInstance().getAll(pagination, query).then((resp: any) => {
      if (resp.data.content.length > 0) {
        this.createNewUser = true
      } else {
        this.createNewUser = false
      }
    })
  }

  public loginUser () {
    this.login = true
  }

  public loginExistingUser (e: any) {
    e.preventDefault()
    this.credentials.rememberMe = true
    this.credentials.administrationId = this.product.administrationId
    this.relationService.login(this.credentials).then((resp: any) => {
      if (resp && resp.data) {
        this.user = resp.data
        this.login = false
      }
    })
  }

  public registerNewUser () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this
    this.user.administrationId = this.product.administrationId
    this.user.tfaEnabled = false
    this.user.username = this.user.email
    this.user.password = this.$helpers.generatePassword()
    this.userPassword = this.user.password
    if (this.user.relationAddresses) this.user.relationAddresses[0].countryId = this.selectedCountry.id
    return new Promise(resolve => {
      self.relationService.post(this.user).then((resp: any) => {
        if (resp && resp.data) {
          this.user = resp.data
          resolve(true)
        } else {
          resolve(false)
        }
      })
    })
  }

  public getPaymentMethodName (methodId: any) {
    const method = this.$store.state.paymentMethods.find((m: any) => {
      return m.value.id === methodId
    })
    let methodName = ''
    if (method) {
      methodName = this.$helpers.getMultiLangName(method.value.paymentMethodLanguages)
    }
    return methodName.toLowerCase()
  }

  public getImgUrl (imgName: string) {
    const images = require.context('@/assets/images', false, /\.png$/)
    return images('./' + imgName + '.png')
  }

  public callPricingEngine (clickedPay?: boolean) {
    const relAddr: any = this.user.relationAddresses ? this.user.relationAddresses[0] : undefined
    this.order = new CartOrder(undefined, undefined, undefined, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined, undefined, this.$store.state.currencyVal, undefined, undefined, this.$store.state.currentLanguage,
      undefined, undefined, relAddr, relAddr, this.selectedPayment.value, new OrderCustomer(undefined, undefined, undefined,
        undefined, undefined, this.user.id, this.user.email, this.getUserFullName(), undefined, undefined, undefined, undefined, undefined))

    this.order.orderLines = [new OrderLine(undefined, undefined, undefined, undefined, undefined, this.user.id, undefined, 1, undefined,
      undefined, undefined, undefined, undefined, new OrderProduct(undefined, undefined, undefined, undefined, undefined, this.user.id, this.product.id, this.product.sku,
        this.$helpers.getMultiLangName(this.product.productLanguages), this.$helpers.getMultiLangDesc(this.product.productLanguages),
        this.product.price, this.product.tax, undefined, JSON.stringify(this.product.termsAndConditionsJson), this.product.price, undefined, this.product.productType,
        undefined, this.selectedProductAttributes.map((attr: any) => attr.value), undefined, undefined, undefined), undefined, undefined,
      undefined, undefined, undefined, undefined, undefined)]
    let discounts: any = []
    if (this.product.promotions?.length) {
      discounts = this.product.promotions.map((promo: IPromotion) => new OrderDiscountLine(undefined, undefined, undefined, undefined,
        undefined, this.user.id, promo.id, this.getDiscount(promo, 'percentage'), this.getDiscount(promo, 'fixed'),
        this.getDiscount(promo, 'noShipping'), this.getDiscount(promo, 'freeItemsJson'), this.getDiscount(promo, 'entireOrder'),
        new OrderPromotion(undefined, undefined, undefined, undefined, undefined, this.user.id,
          promo.id, promo.promotionType, this.$helpers.getMultiLangName(promo.promotionLanguages), this.$helpers.getMultiLangDesc(promo.promotionLanguages),
          promo.availableFrom, promo.availableTo, promo.recurrent, undefined, promo.products, promo.attributeValues), undefined)
      )
    }
    this.order.orderDiscountLines = discounts
    if (this.product.productType === 'PHYSICAL') {
      if (this.selectedShippingMethod === null) {
        if (clickedPay) {
          this.cartError = this.$t('labels.selectShippingMethod')
          // @ts-ignore
          $('#errorModal').modal('show')
        }
        return false
      } else {
        this.order.orderLineDeliveryMethod = new OrderLineDeliveryMethod(undefined, undefined, undefined, undefined,
          undefined, this.user.id, this.selectedShippingMethod.value.id, this.selectedShippingMethod.label, undefined)
      }
      this.order.orderLines[0].orderLineDeliveryMethod = this.order.orderLineDeliveryMethod
    }
    this.cartOrderService.updateCart(this.order).then((resp: any) => {
      this.order = resp.data
      if (clickedPay) {
        this.createOrder()
      }
    })
  }

  public getUserFullName () {
    const firstName = this.user.relationProfile?.firstName ? this.user.relationProfile.firstName : ''
    const middleName = this.user.relationProfile?.firstName ? this.user.relationProfile.middleName : ''
    const lastName = this.user.relationProfile?.firstName ? this.user.relationProfile.lastName : ''
    return `${firstName} ${middleName} ${lastName}`
  }

  public getDiscount (discount: any, type: string) {
    switch (discount.promotionType) {
      case 'AFFILIATE':
        if (type === 'entireOrder') {
          return discount.typeAffiliateBased.discount.entireOrder
        }
        return discount.typeAffiliateBased.discount[type]
      case 'BUNDLE':
        if (type === 'entireOrder') {
          return discount.typeBundleBaseds[0].discount.entireOrder
        }
        return discount.typeBundleBaseds[0].discount[type]
      case 'COUPON':
        if (type === 'entireOrder') {
          return discount.typeCouponBased.discount.entireOrder
        }
        return discount.typeCouponBased.discount[type]
      case 'LOYALTY':
        if (type === 'entireOrder') {
          return discount.typeLoyaltyBased.discount.entireOrder
        }
        return discount.typeLoyaltyBased.discount[type]
      case 'PERSONAL_COUPON':
        if (type === 'entireOrder') {
          return discount.typePersonalCouponBased.discount.entireOrder
        }
        return discount.typePersonalCouponBased.discount[type]
      case 'QUANTITY':
        if (type === 'entireOrder') {
          return discount.typeCouponBased.discount.entireOrder
        }
        return discount.typeCouponBased.discount[type]
      case 'TEMPORARY_COUPON':
        if (type === 'entireOrder') {
          return discount.typePersonalCouponBased.discount.entireOrder
        }
        return discount.typePersonalCouponBased.discount[type]
      case 'TIME':
        if (type === 'entireOrder') {
          return discount.typeTimeBased.discount.entireOrder
        }
        return discount.typeTimeBased.discount[type]
      case 'PRICE':
        if (type === 'entireOrder') {
          return discount.typePriceBaseds[0].discount.entireOrder
        }
        return discount.typePriceBaseds[0].discount[type]
    }
  }

  public proceedCheckout () {
    this.submited = true
    this.$validator.validateAll().then((resp: boolean) => {
      if (resp) {
        let toContinue = true
        if (this.product.productType === 'PHYSICAL' && !this.selectedShippingMethod) {
          toContinue = false
        } else if (!this.selectedCountry) {
          toContinue = false
        } else {
          toContinue = true
        }
        if (toContinue) {
          this.submited = false
          if (this.login && this.user.id) {
            this.callPricingEngine(true)
          } else {
            this.registerNewUser().then((resp: any) => {
              this.relationService.login({
                rememberMe: false,
                administrationKey: 'KAJSU34',
                username: this.user.email,
                password: this.userPassword
              }).then((resp: any) => {
                if (resp && resp.data) this.callPricingEngine(true)
              })
            })
          }
        }
      }
    })
  }

  public createOrder () {
    this.cartOrderService.post(this.order).then((resp: any) => {
      // navigate to payment
    })
  }
}
