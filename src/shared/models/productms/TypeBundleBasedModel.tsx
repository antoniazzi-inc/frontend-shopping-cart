import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
import { IDiscount } from './DiscountModel'
import { IPromotion } from './PromotionModel'

export interface ITypeBundleBased extends IBaseEntity {
    createdOn?: Moment;
    updatedOn?: Moment;
    id?: number;
    version?: number;
    administrationId?: number;
    discount?: IDiscount;
    promotion?: IPromotion;
}

export class TypeBundleBased implements ITypeBundleBased {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public discount?: IDiscount,
    public promotion?: IPromotion
  ) {
  }
};