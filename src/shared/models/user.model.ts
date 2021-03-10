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
