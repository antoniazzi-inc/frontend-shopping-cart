import { IRelationEntity } from '@/shared/models/relationms/relationModel'
import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
export const enum PhoneType {
    WORK = 'WORK',
    HOME = 'HOME',
    MOBILE = 'MOBILE'
}

export interface IRelationPhone extends IBaseEntity{
    number?: string;
    description?: string;
    phoneType?: PhoneType;
    relation?: IRelationEntity;
}

export class RelationPhone implements IRelationPhone {
  constructor (
      public id?: number,
      public administrationId?: number,
        public number?: string,
        public description?: string,
        public phoneType?: PhoneType,
        public relation?: IRelationEntity,
        public version?: number,
        public createdOn?: Moment,
        public updatedOn?: Moment
  ) {}
}
