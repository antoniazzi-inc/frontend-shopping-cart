import { Moment } from 'moment'
import { BaseEntityModel } from '../baseEntity.model'

export enum InvoiceStrategyMechanism {
  TEXT='TEXT',
  TEXT_YEAR = 'TEXT_YEAR',
  TEXT_YEAR_MONTH = 'TEXT_YEAR_MONTH'
}

export interface IInvoiceStrategy extends BaseEntityModel {
  mechanism?: InvoiceStrategyMechanism;
  text?: string;
  offset?: number;
}

export default class InvoiceStrategy implements IInvoiceStrategy {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public mechanism?: InvoiceStrategyMechanism,
    public text?: string,
    public offset?: number
  ) {
  }
};
