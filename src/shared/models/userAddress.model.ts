import { IBaseEntity } from '@/shared/models/baseEntity.model'
import { Country } from '@/shared/models/country.model'
export enum AddressType {
  OTHER= 'OTHER'
}
export interface UserAddress extends IBaseEntity {
  street?: string;
  number?: number;
  postcode?: string;
  city?: string;
  country?: Country;
  company?: string;
}

export class UserAddressModel implements UserAddress {
  constructor (
    public street?: string,
    public number?: number,
    public postcode?: string,
    public city?: string,
    public country?: Country,
    public company?: string
  ) {
    this.street = this.street ? this.street : undefined
  }
}
