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
import { IDeliveryMethod } from '@/shared/models/delivery-method.model'

export default class DeliveryMethodService extends BaseEntityService<IDeliveryMethod> {
  private static instance: DeliveryMethodService;

  private constructor () {
    super('api/administrationms/api/delivery-methods')
  }

  public static getInstance (): DeliveryMethodService {
    if (!DeliveryMethodService.instance) {
      return new DeliveryMethodService()
    }
    return DeliveryMethodService.instance
  }
}
