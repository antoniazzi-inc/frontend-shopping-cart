import { Moment } from 'moment'
import { BaseEntityModel } from '../baseEntity.model'
import { IOrderPromotion } from './OrderPromotionModel'
import { ICartOrder } from './CartOrderModel'

export interface IOrderDiscountLine extends BaseEntityModel {
    version?: number;
    administrationId?: number;
    relationId?: number;
    discountId?: number;
    percentage?: number;
    fixed?: number;
    noShipping?: boolean;
    freeItemsJson?: string;
    entireOrder?: boolean;
    orderPromotion?: IOrderPromotion;
    cartOrder?: ICartOrder;
}

export default class OrderDiscountLine implements IOrderDiscountLine {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public relationId?: number,
    public discountId?: number,
    public percentage?: number,
    public fixed?: number,
    public noShipping?: boolean,
    public freeItemsJson?: string,
    public entireOrder?: boolean,
    public orderPromotion?: IOrderPromotion,
    public cartOrder?: ICartOrder
  ) {
  }
};
