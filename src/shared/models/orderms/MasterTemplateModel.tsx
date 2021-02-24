import { Moment } from 'moment'
import { BaseEntityModel } from '../baseEntity.model'
import { IInvoiceTemplate } from './InvoiceTemplateModel'

export interface IMasterTemplate extends BaseEntityModel {
    version?: number;
    name?: string;
    html?: string;
    isDefault?: boolean;
    isPremium?: boolean;
    invoiceTemplates?: IInvoiceTemplate[];
}

export default class MasterTemplate implements IMasterTemplate {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public name?: string,
    public html?: string,
    public isDefault?: boolean,
    public isPremium?: boolean,
    public invoiceTemplates?: IInvoiceTemplate[]
  ) {
  }
};
