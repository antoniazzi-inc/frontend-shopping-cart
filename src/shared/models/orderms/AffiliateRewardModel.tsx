import { Moment } from 'moment'
import { BaseEntityModel } from '../baseEntity.model'
import { ICreditInvoice } from './CreditInvoiceModel'
import { IAffiliateCommision } from './AffiliateCommisionModel'

export interface IAffiliateReward extends BaseEntityModel {
    version?: number;
    administrationId?: number;
    affiliateRelationId?: number;
    paymentDate?: Moment;
    nettoAmount?: number;
    taxAmount?: number;
    totalAmount?: number;
    creditInvoice?: ICreditInvoice;
    affiliateCommisions?: IAffiliateCommision[];
}

export default class AffiliateReward implements IAffiliateReward {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public affiliateRelationId?: number,
    public paymentDate?: Moment,
    public nettoAmount?: number,
    public taxAmount?: number,
    public totalAmount?: number,
    public creditInvoice?: ICreditInvoice,
    public affiliateCommisions?: IAffiliateCommision[]
  ) {
  }
};
