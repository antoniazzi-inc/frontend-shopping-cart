
import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'

export interface ILanguage extends IBaseEntity{
  langKey?: string;
  title?: string;
  name?: string;
  description?: string;
}

export class Language implements ILanguage {
  constructor (
      public id?: number,
      public administrationId?: number,
      public langKey?: string,
      public title?: string,
      public name?: string,
      public description?: string,
      public version?: number,
      public createdOn?: Moment,
      public updatedOn?: Moment
  ) {}
}
