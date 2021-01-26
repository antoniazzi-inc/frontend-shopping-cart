import { Component, Vue } from 'vue-property-decorator'
import { UserModel } from '@/shared/models/user.model'
import { UserAddressModel } from '@/shared/models/userAddress.model'
import Multiselect from 'vue-multiselect'
import ProductService from '@/shared/services/productService'
import { AxiosResponse } from 'axios'

@Component({
  components: {
    Multiselect
  }
})
export default class HomeComponent extends Vue {
  public productId: any
  public productPrice: number | null
  public user: UserModel
  public selectedPayment: string
  public totalPrice: number
  public totalExclPrice: number
  public totalTax: number
  public productService: any
  public divEl: HTMLElement | null

  constructor () {
    super()
    this.productId = null
    this.divEl = null
    this.productService = ProductService.getInstance()
    this.productPrice = null
    this.totalPrice = 39.00
    this.totalExclPrice = 47.19
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
      if (resp) {}
    })
  }
}
