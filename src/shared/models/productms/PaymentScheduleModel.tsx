import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
import { IAnnouncement } from './AnnouncementModel'
import { IProduct } from './ProductModel'
import { IPaymentScheduleOption } from './PaymentScheduleOptionModel'
export enum PaymentSchedulePeriod {
  DAY='DAY',
  WEEK='WEEK',
  BI_WEEK='BI_WEEK',
  MONTH='MONTH',
  QUARTER='QUARTER',
  HALF_YEAR='HALF_YEAR',
  YEAR='YEAR'
}
export interface IPaymentSchedule extends IBaseEntity {
    createdOn?: Moment;
    updatedOn?: Moment;
    id?: number;
    version?: number;
    administrationId?: number;
    name?: string;
    period?: PaymentSchedulePeriod;
    announcementJson?: IAnnouncement;
    availableForCustomers?: boolean;
    product?: IProduct;
    paymentScheduleOptions?: IPaymentScheduleOption[];
}

export class PaymentSchedule implements IPaymentSchedule {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public name?: string,
    public period?: PaymentSchedulePeriod,
    public announcementJson?: IAnnouncement,
    public availableForCustomers?: boolean,
    public product?: IProduct,
    public paymentScheduleOptions?: IPaymentScheduleOption[]
  ) {
  }
};
