import { IRole } from './role.model'
import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
export interface IPermission extends IBaseEntity{
    code?: string;
    roles?: IRole[];
}

export class Permission implements IPermission {
  constructor (
      public id?: number,
      public administrationId?: number,
        public code?: string,
        public roles?: IRole[],
        public version?: number,
        public createdOn?: Moment,
        public updatedOn?: Moment
  ) {}
}
