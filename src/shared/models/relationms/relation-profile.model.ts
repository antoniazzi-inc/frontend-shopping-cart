import { IRelationEntity } from './relationModel'
import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
export interface IRelationProfile extends IBaseEntity{
    firstName?: string;
    lastName?: string;
    middleName?: string;
    initials?: string;
    description?: string;
    title?: string;
    website?: string;
    companyName?: string;
    points?: number;
    birthDate?: Moment|Date|string;
    gender?: string;
    blackListed?: boolean;
    categoryId?: number;
    timeZoneId?: number;
    relation?: IRelationEntity;
}

export class RelationProfile implements IRelationProfile {
  constructor (
      public id?: number,
      public administrationId?: number,
        public firstName?: string,
        public lastName?: string,
        public middleName?: string,
        public initials?: string,
        public description?: string,
        public title?: string,
        public website?: string,
        public companyName?: string,
        public points?: number,
        public birthDate?: Moment|Date|string,
        public gender?: string,
        public blackListed?: boolean,
        public categoryId?: number,
        public timeZoneId?: number,
        public relation?: IRelationEntity,
        public version?: number,
        public createdOn?: Moment,
        public updatedOn?: Moment
  ) {
    this.blackListed = this.blackListed || false
  }
}
