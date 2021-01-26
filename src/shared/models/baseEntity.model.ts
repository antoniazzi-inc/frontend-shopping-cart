import { User } from '@/shared/models/user.model'

export interface IBaseEntity {
  id?: number|undefined;
  administrationId?: number|undefined;
}

export class BaseEntityModel implements IBaseEntity {
  constructor (
    public id?: number|undefined,
    public administrationId?: number|undefined
  ) {
    this.id = id ? this.id : undefined
    this.administrationId = this.administrationId ? this.administrationId : undefined
  }
}
