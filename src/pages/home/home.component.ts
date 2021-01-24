import { Component, Vue } from 'vue-property-decorator'
import { UserModel } from '@/shared/models/user.model'
import { UserAddressModel } from '@/shared/models/userAddress.model'
import Multiselect from 'vue-multiselect'

@Component({
  components: {
    Multiselect
  }
})
export default class HomeComponent extends Vue {
  public productId: number | null
  public productPrice: number | null
  public user: UserModel
  public selectedPayment: string
  public totalPrice: number
  public totalExclPrice: number
  public totalTax: number

  constructor () {
    super()
    this.productId = null
    this.productPrice = null
    this.totalPrice = 39.00
    this.totalExclPrice = 47.19
    this.totalTax = 8.19
    this.selectedPayment = 'iDeal'
    this.user = new UserModel(undefined, undefined, undefined, undefined, undefined,
      new UserAddressModel())
  }
}
