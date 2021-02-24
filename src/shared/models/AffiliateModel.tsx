import { Moment } from 'moment'
import { IRelationEntity } from './relationms/relationModel'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
export const enum affiliateStatus {
    ACTIVE = 'ACTIVE',
    PENDING = 'PENDING',
    FINISHED = 'FINISHED',
    NOT_ACTIVE = 'NOT_ACTIVE',
}

export interface IAffiliate extends IBaseEntity {
    version?: number;
    administrationId?: number;
    affiliateCode?: string;
    vatnumber?: string;
    kvknumber?: string;
    notifyPurchase?: boolean;
    generalFlatCommission?: number;
    generalPercentageCommission?: number;
    relation?: IRelationEntity;
}

export default class Affiliate implements IAffiliate {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public affiliateCode?: string,
    public vatnumber?: string,
    public kvknumber?: string,
    public affiliateStatus?: affiliateStatus,
    public notifyPurchase?: boolean,
    public generalFlatCommission?: number,
    public generalPercentageCommission?: number,
    public relation?: IRelationEntity
  ) {
  }
};
