import { IRelationEntity } from './relationModel'
import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
export const enum AddressType {
    WORK = 'WORK',
    HOME = 'HOME',
    POSTAL = 'POSTAL',
    OTHER = 'OTHER'
}

export interface IRelationAddress extends IBaseEntity{
    relationAddressId?: number;
    street?: string;
    houseNumber?: string;
    city?: string;
    countryId?: number;
    entranceNumber?: string;
    appartmentNumber?: string;
    postalCode?: string;
    description?: string;
    addressType?: AddressType;
    usedForBilling?: boolean;
    usedForDelivery?: boolean;
    primary?: boolean;
    relation?: IRelationEntity;
}

export class RelationAddress implements IRelationAddress {
  constructor (
      public id?: number,
      public administrationId?: number,
        public relationAddressId?: number,
        public street?: string,
        public houseNumber?: string,
        public city?: string,
        public countryId?: number,
        public entranceNumber?: string,
        public appartmentNumber?: string,
        public postalCode?: string,
        public description?: string,
        public addressType?: AddressType,
        public usedForBilling?: boolean,
        public usedForDelivery?: boolean,
        public primary?: boolean,
        public relation?: IRelationEntity,
        public version?: number,
        public createdOn?: Moment,
        public updatedOn?: Moment
  ) {
    this.usedForBilling = this.usedForBilling || false
    this.usedForDelivery = this.usedForDelivery || false
    this.primary = this.primary || false
  }
}
