import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'

export interface ITypeDigital extends IBaseEntity {
    createdOn?: Moment;
    updatedOn?: Moment;
    id?: number;
    version?: number;
    administrationId?: number;
    url?: string;
    notPaidDownload?: boolean;
    bodyName?: string;
    bodyContentType?: string;
    body?: any;
}

export class TypeDigital implements ITypeDigital {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public url?: string,
    public notPaidDownload?: boolean,
    public bodyName?: string,
    public bodyContentType?: string,
    public body?: any
  ) {
  }
};
