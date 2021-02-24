import { Moment } from 'moment'
import { BaseEntityModel } from '../baseEntity.model'

export interface IOrderLineDeliveryMethod extends BaseEntityModel {
    version?: number;
    administrationId?: number;
    relationId?: number;
    deliveryMethodId?: number;
    name?: string;
    detailsJson?: string;
}

export default class OrderLineDeliveryMethod implements IOrderLineDeliveryMethod {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public relationId?: number,
    public deliveryMethodId?: number,
    public name?: string,
    public detailsJson?: string
  ) {
  }
};
