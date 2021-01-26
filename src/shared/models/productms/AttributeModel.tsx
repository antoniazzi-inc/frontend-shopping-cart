import { Moment } from 'moment'
import { IProduct } from './ProductModel'
import { IAttributeLanguage } from './AttributeLanguageModel'
import { IAttributeValue } from './AttributeValueModel'
import { IBaseEntity } from '@/shared/models/baseEntity.model'

export interface IAttribute extends IBaseEntity {
    createdOn?: Moment;
    updatedOn?: Moment;
    id?: number;
    version?: number;
    administrationId?: number;
    multipleValues?: boolean;
    visible?: boolean;
    visibleInFrontEnd?: boolean;
    tax?: number;
    product?: IProduct;
    attributeLanguages?: IAttributeLanguage[];
    attributeValues?: IAttributeValue[];
}

export class Attribute implements IAttribute {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public multipleValues?: boolean,
    public visible?: boolean,
    public visibleInFrontEnd?: boolean,
    public tax?: number,
    public product?: IProduct,
    public attributeLanguages?: IAttributeLanguage[],
    public attributeValues?: IAttributeValue[]
  ) {
    this.multipleValues = this.multipleValues ? this.multipleValues : false
    this.visible = this.visible ? this.visible : true
    this.visibleInFrontEnd = this.visibleInFrontEnd ? this.visibleInFrontEnd : false
  }
};
