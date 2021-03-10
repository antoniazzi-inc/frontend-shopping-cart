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

import BaseEntityService from '@/shared/services/baseEntityService'
import { User } from '@/shared/models/user.model'

export default class RelationService extends BaseEntityService<User> {
  private static instance: RelationService;

  private constructor () {
    super('/api/relationms/api/relations')
  }

  public static getInstance (): RelationService {
    if (!RelationService.instance) {
      return new RelationService()
    }
    return RelationService.instance
  }

  public async login (entity: any): Promise<any> {
    debugger
    return new Promise<any>(resolve => {
      this.postRequest('/api/auth/login', entity).then((resp: any) => {
        resolve(resp)
      })
    })
  }
}
