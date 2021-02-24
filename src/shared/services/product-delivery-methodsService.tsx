import BaseEntityService from './baseEntityService'
import { IProductDeliveryMethod } from '@/shared/models/productms/ProductDeliveryMethodModel'

export default class ProductDeliveryMethodsService extends BaseEntityService<IProductDeliveryMethod> {
  private static instance: ProductDeliveryMethodsService

  private constructor () {
    super('api/productms/api/product-delivery-methods')
  }

  public static getInstance (): ProductDeliveryMethodsService {
    if (!ProductDeliveryMethodsService.instance) {
      return new ProductDeliveryMethodsService()
    }
    return ProductDeliveryMethodsService.instance
  }
}
