import { Moment } from 'moment'
import { BaseEntityModel } from '../baseEntity.model'
import { IOrderProduct } from './OrderProductModel'

export interface IOrderProductAttributeValue extends BaseEntityModel {
    version?: number;
    administrationId?: number;
    relationId?: number;
    attributeId?: number;
    attributeValueId?: number;
    attributeName?: string;
    attributeDescription?: string;
    attributeValueName?: string;
    attributeValueDescription?: string;
    attributeValuePrice?: number;
    orderProduct?: IOrderProduct;
}

export default class OrderProductAttributeValue implements IOrderProductAttributeValue {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public relationId?: number,
    public attributeId?: number,
    public attributeValueId?: number,
    public attributeName?: string,
    public attributeDescription?: string,
    public attributeValueName?: string,
    public attributeValueDescription?: string,
    public attributeValuePrice?: number,
    public orderProduct?: IOrderProduct
  ) {
  }
};
