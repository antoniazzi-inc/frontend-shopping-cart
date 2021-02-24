import { IRelationEntity } from './relationModel'
import { ICustomField } from './custom-field.model'
import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
export interface IRelationCustomField extends IBaseEntity{
    value?: string;
    relation?: IRelationEntity;
    customField?: ICustomField;
}

export class RelationCustomField implements IRelationCustomField {
  constructor (
      public id?: number,
      public administrationId?: number,
        public value?: string,
        public relation?: IRelationEntity,
        public customField?: ICustomField,
        public version?: number,
        public createdOn?: Moment,
        public updatedOn?: Moment
  ) {}
}
