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
import { IBaseEntity } from '@/shared/models/baseEntity.model'
import { IAnnouncement } from '@/shared/models/productms/AnnouncementModel'
import { IProduct } from '@/shared/models/productms/ProductModel'

export interface IProductSubscription extends IBaseEntity {
    createdOn?: Moment;
    updatedOn?: Moment;
    id?: number;
    version?: number;
    administrationId?: number;
    period?: string;
    maxTimes?: number;
    announcementJson?: IAnnouncement;
    startDate?: string;
  product?: IProduct;
}

export class ProductSubscription implements IProductSubscription {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public period?: string,
    public maxTimes?: number,
    public announcementJson?: IAnnouncement,
    public startDate?: string,
    public product?: IProduct
  ) {
  }
};
