import { BaseEntity } from '@/shared/models/baseEntity.model'
import { Country } from '@/shared/models/country.model'

export interface UserAddress extends BaseEntity {
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
