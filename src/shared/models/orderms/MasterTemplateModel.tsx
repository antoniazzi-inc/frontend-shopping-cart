/*
 *
 *  *
 *  *  * Copyright 2018-2021 Antoniazzi Holding BV
 *  *  *
 *  *  * This program is free software: you can redistribute it and/or modify it
 *  *  * under the terms of the GNU General Public License as published by
 *  *  * the Free Software Foundation, either version 3 of the License,
 *  *  * or (at your option) any later version.
 *  *  *
 *  *  * This program is distributed in the hope that it will be useful,
 *  *  * but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  *  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  *  * GNU General Public License for more details.
 *  *  *
 *  *  * You should have received a copy of the GNU General Public License
 *  *  * along with this program. If not, see <https://www.gnu.org/licenses/>.
 *  *
 *
 */

import { Moment } from 'moment'
import { BaseEntityModel } from '../baseEntity.model'
import { IInvoiceTemplate } from './InvoiceTemplateModel'

export interface IMasterTemplate extends BaseEntityModel {
    version?: number;
    name?: string;
    html?: string;
    isDefault?: boolean;
    isPremium?: boolean;
    invoiceTemplates?: IInvoiceTemplate[];
}

export default class MasterTemplate implements IMasterTemplate {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public name?: string,
    public html?: string,
    public isDefault?: boolean,
    public isPremium?: boolean,
    public invoiceTemplates?: IInvoiceTemplate[]
  ) {
  }
};
