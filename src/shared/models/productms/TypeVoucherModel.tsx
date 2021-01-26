import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
import { IDiscount } from './DiscountModel'
import { IProduct } from '@/shared/models/productms/ProductModel'

export interface ITypeVoucher extends IBaseEntity {
    daysValid?: number;
    value?: any;
    product?: IProduct;
}

export class TypeVoucherBased implements ITypeVoucher {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public daysValid?: number,
    public value?: any,
    public product?: IProduct
  ) {
  }
};
