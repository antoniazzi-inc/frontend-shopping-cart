import { IRelationEntity } from '@/shared/models/relationms/relationModel'
import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
export interface IRelationPaymentMethod extends IBaseEntity{
    paymentMethodId?: number;
    relation?: IRelationEntity;
}

export class RelationPaymentMethod implements IRelationPaymentMethod {
  constructor (
      public id?: number,
      public administrationId?: number,
      public paymentMethodId?: number,
      public relation?: IRelationEntity,
      public version?: number,
      public createdOn?: Moment,
      public updatedOn?: Moment) {}
}
