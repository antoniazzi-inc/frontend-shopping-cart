import { Component, Vue } from 'vue-property-decorator'
import { UserModel } from '@/shared/models/user.model'
import { UserAddressModel } from '@/shared/models/userAddress.model'
import Multiselect from 'vue-multiselect'
import ProductService from '@/shared/services/productService'
import { AxiosResponse } from 'axios'
import { IProduct, Product } from '@/shared/models/productms/ProductModel'

@Component({
  components: {
    Multiselect
  }
})
export default class HomeComponent extends Vue {
  public productId: any
  public productPrice: number | null
  public product: IProduct
  public user: UserModel
  public selectedPayment: string
  public totalTax: number
  public productService: any
  public divEl: HTMLElement | null

  constructor () {
    super()
    this.productId = null
    this.divEl = null
    this.product = new Product()
    this.productService = ProductService.getInstance()
    this.productPrice = null
    this.totalTax = 8.19
    this.selectedPayment = 'iDeal'
    this.user = new UserModel(undefined, undefined, undefined, undefined, undefined,
      new UserAddressModel())
  }

  public mounted () {
    this.divEl = document.getElementById('arcomplete')
    this.productId = this.divEl?.dataset.productid
    let lang = 'en'
    if (this.divEl && this.divEl.dataset && this.divEl.dataset.locale) {
      lang = this.divEl.dataset.locale
    }
    this.$i18n.locale = lang
    if (this.productId !== null) {
      this.getProduct()
    }
  }

  public getProduct () {
    // @ts-ignore
    this.productService.get(this.productId).then((resp: AxiosResponse) => {
      if (resp && resp.data) {
        this.product = resp.data
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
}
