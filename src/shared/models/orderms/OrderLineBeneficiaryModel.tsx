import { Moment } from 'moment'
import { BaseEntityModel } from '../baseEntity.model'

export interface IOrderLineBeneficiary extends BaseEntityModel {
    version?: number;
    administrationId?: number;
    relationId?: number;
    beneficiaryRelationId?: number;
    email?: string;
    fullName?: string;
    title?: string;
}

export default class OrderLineBeneficiary implements IOrderLineBeneficiary {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public relationId?: number,
    public beneficiaryRelationId?: number,
    public email?: string,
    public fullName?: string,
    public title?: string
  ) {
  }
};
