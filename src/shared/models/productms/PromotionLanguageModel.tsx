import { Moment } from 'moment'
import { IPromotion } from './PromotionModel'
import { IBaseEntity } from '@/shared/models/baseEntity.model'

export interface IPromotionLanguage extends IBaseEntity {
    createdOn?: Moment;
    updatedOn?: Moment;
    id?: number;
    version?: number;
    langKey?: string;
    name?: string;
    notAvailableMessage?: string;
    maxExceededMessage?: string;
    description?: string;
    administrationId?: number;
    promotion?: IPromotion;
}

export class PromotionLanguage implements IPromotionLanguage {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public langKey?: string,
    public notAvailableMessage?: string,
    public maxExceededMessage?: string,
    public name?: string,
    public description?: string,
    public administrationId?: number,
    public promotion?: IPromotion
  ) {
  }
};
