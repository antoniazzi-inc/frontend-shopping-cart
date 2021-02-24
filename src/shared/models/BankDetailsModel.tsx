import { Moment } from 'moment'
import { IRelationEntity } from './relationms/relationModel'
import { IBaseEntity } from '@/shared/models/baseEntity.model'

export interface IBankDetails extends IBaseEntity {
    version?: number;
    administrationId?: number;
    primaryCustomer?: boolean;
    primaryAffiliate?: boolean;
    bankAccountName?: string;
    bankAccountIbannumber?: string;
    bankAccountBicnumber?: string;
    bankAccountAdditionalDetails?: string;
    additionalPaymentDetailsJson?: string;
    withdrawAllowedDate?: Moment;
    withdrawAllowedDateIp?: string;
    relation?: IRelationEntity;
}

export default class BankDetails implements IBankDetails {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public primaryCustomer?: boolean,
    public primaryAffiliate?: boolean,
    public bankAccountName?: string,
    public bankAccountIbannumber?: string,
    public bankAccountBicnumber?: string,
    public bankAccountAdditionalDetails?: string,
    public additionalPaymentDetailsJson?: string,
    public withdrawAllowedDate?: Moment,
    public withdrawAllowedDateIp?: string,
    public relation?: IRelationEntity
  ) {
  }
};
