import { IBaseEntity } from '@/shared/models/baseEntity.model'

export interface IGrantedAuthority extends IBaseEntity {
    authority?: string;
}

export default class GrantedAuthority implements IGrantedAuthority {
  constructor (
    public authority?: string
  ) {
  }
};
