import { Moment } from 'moment'
import { BaseEntityModel } from '../baseEntity.model'
import { IOrderSubscription } from './OrderSubscriptionModel'
import { IOrderProduct } from './OrderProductModel'
import { IBeneficiaryDeliveryAddress } from './BeneficiaryDeliveryAddressModel'
import { IOrderLineBeneficiary } from './OrderLineBeneficiaryModel'
import { IOrderLineDeliveryMethod } from './OrderLineDeliveryMethodModel'
import { IOrderLinePaymentSchedule } from './OrderLinePaymentScheduleModel'
import { IAffiliateCommision } from './AffiliateCommisionModel'
import { ICartOrder } from './CartOrderModel'
export const enum orderDeliveryStatus {
    PENDING = 'PENDING',
    READY_TO_SHIP = 'READY_TO_SHIP',
    SENT = 'SENT',
    DELIVERED = 'DELIVERED',
    LOST = 'LOST',
}

export interface IOrderLine extends BaseEntityModel {
    version?: number;
    administrationId?: number;
    relationId?: number;
    quantity?: number;
    nettoAmount?: number;
    discountAmount?: number;
    shippingCostAmount?: number;
    additionalInfo?: string;
    orderSubscription?: IOrderSubscription;
    orderProduct?: IOrderProduct;
    beneficiaryDeliveryAddress?: IBeneficiaryDeliveryAddress;
    orderLineBeneficiary?: IOrderLineBeneficiary;
    orderLineDeliveryMethod?: IOrderLineDeliveryMethod;
    orderLinePaymentSchedules?: IOrderLinePaymentSchedule[];
    affiliateCommisions?: IAffiliateCommision[];
    cartOrder?: ICartOrder;
    payWithVoucher?: boolean;
}

export default class OrderLine implements IOrderLine {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public relationId?: number,
    public orderDeliveryStatus?: orderDeliveryStatus,
    public quantity?: number,
    public nettoAmount?: number,
    public discountAmount?: number,
    public shippingCostAmount?: number,
    public additionalInfo?: string,
    public orderSubscription?: IOrderSubscription,
    public orderProduct?: IOrderProduct,
    public beneficiaryDeliveryAddress?: IBeneficiaryDeliveryAddress,
    public orderLineBeneficiary?: IOrderLineBeneficiary,
    public orderLineDeliveryMethod?: IOrderLineDeliveryMethod,
    public orderLinePaymentSchedules?: IOrderLinePaymentSchedule[],
    public affiliateCommisions?: IAffiliateCommision[],
    public cartOrder?: ICartOrder,
    public payWithVoucher?: boolean
  ) {
    this.quantity = this.quantity ? this.quantity : 1
    this.payWithVoucher = !!this.payWithVoucher
  }
};
