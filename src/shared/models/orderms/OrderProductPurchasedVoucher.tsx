import { Moment } from 'moment'
import { BaseEntityModel } from '../baseEntity.model'
import { IOrderProduct } from '@/shared/models/orderms/OrderProductModel'
export enum VoucherType {
  MINUTES = 'MINUTES',
  POINTS = 'POINTS',
  MONEY = 'MONEY'
}
export enum VoucherSupport {
  NONE='NONE', TIME='TIME', POINTS='POINTS', MONEY='MONEY'
}
export interface IOrderProductPurchasedVoucher extends BaseEntityModel {
  relationId?: number;
  typeVoucherId?: number;
  beneficiaryRelationId?: number;
  value?: number;
  voucherType?: VoucherType;
  availableFrom?: Moment;
  availableTo?: Moment;
  OrderProduct?: IOrderProduct;
  daysValid?: number;
}

export default class OrderProductPurchasedVoucher implements IOrderProductPurchasedVoucher {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public relationId?: number,
    public typeVoucherId?: number,
    public beneficiaryRelationId?: number,
    public value?: number,
    public voucherType?: VoucherType,
    public availableFrom?: Moment,
    public availableTo?: Moment,
    public OrderProduct?: IOrderProduct,
    public daysValid?: number
  ) {
  }
};
