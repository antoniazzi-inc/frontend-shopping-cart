import { IBaseEntity } from '@/shared/models/baseEntity.model'
import { UserAddress } from '@/shared/models/userAddress.model'

export interface User extends IBaseEntity{
  firstName?: string;
  lastName?: string;
  middleName?: string;
  address?: UserAddress;
  email?: string;
}

export class UserModel implements User {
  constructor (
    public id?: number,
    public administrationId?: number,
    public firstName?: string,
    public lastName?: string,
    public middleName?: string,
    public address?: UserAddress,
    public email?: string
  ) {
    this.id = id ? this.id : undefined
  }
}
