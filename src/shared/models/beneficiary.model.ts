import { IRelationEntity } from './relationms/relationModel'
import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
export interface IBeneficiary extends IBaseEntity{
    relation?: IRelationEntity;
}

export class Beneficiary implements IBeneficiary {
  constructor (
      public id?: number,
      public administrationId?: number,
        public relation?: IRelationEntity,
        public version?: number,
        public createdOn?: Moment,
        public updatedOn?: Moment
  ) {}
}
