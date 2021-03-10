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
import { ICountry } from './country.model'
import { IBaseEntity } from '@/shared/models/baseEntity.model'

export interface ITimeZone extends IBaseEntity{
    code?: string;
    country?: ICountry;
}

export class TimeZone implements ITimeZone {
  constructor (
      public id?: number,
      public administrationId?: number,
        public code?: string,
        public country?: ICountry,
        public version?: number,
        public createdOn?: Moment,
        public updatedOn?: Moment
  ) {}
}
