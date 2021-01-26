import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
import { IDiscount } from './DiscountModel'
import { ICoupon } from './CouponModel'

export interface ITypeCouponBased extends IBaseEntity {
    createdOn?: Moment;
    updatedOn?: Moment;
    id?: number;
    version?: number;
    administrationId?: number;
    discount?: IDiscount;
    coupon?: ICoupon;
}

export class TypeCouponBased implements ITypeCouponBased {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public discount?: IDiscount,
    public coupon?: ICoupon
  ) {
  }
};
