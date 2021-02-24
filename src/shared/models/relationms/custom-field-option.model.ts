import { ICustomField } from './custom-field.model'
import { ILanguage } from '@/shared/models/language.model'
import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
export interface ICustomFieldOption extends IBaseEntity{
    customFieldIndex?: number;
    value?: string;
    code?: string;
    maxOccurrences?: number;
    customFieldOptionLanguages?: ILanguage[];
    customField?: ICustomField;
}

export class CustomFieldOption implements ICustomFieldOption {
  constructor (
      public id?: number,
      public administrationId?: number,
        public customFieldIndex?: number,
        public value?: string,
        public code?: string,
        public maxOccurrences?: number,
        public customFieldOptionLanguages?: ILanguage[],
        public customField?: ICustomField,
        public version?: number,
        public createdOn?: Moment,
        public updatedOn?: Moment
  ) {}
}
