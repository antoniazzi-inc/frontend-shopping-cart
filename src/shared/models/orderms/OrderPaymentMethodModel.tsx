import { Moment } from 'moment'
import { BaseEntityModel } from '../baseEntity.model'

export interface IOrderPaymentMethod extends BaseEntityModel {
    version?: number;
    administrationId?: number;
    relationId?: number;
    paymentMethodId?: number;
    administrativeCostsPercentage?: number;
    administrativeCostsFixed?: number;
    name?: string;
    detailsJson?: string;
}

export default class OrderPaymentMethod implements IOrderPaymentMethod {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public relationId?: number,
    public paymentMethodId?: number,
    public administrativeCostsPercentage?: number,
    public administrativeCostsFixed?: number,
    public name?: string,
    public detailsJson?: string
  ) {
  }
};
