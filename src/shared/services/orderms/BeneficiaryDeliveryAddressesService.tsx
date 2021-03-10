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

import BaseEntityService from '../baseEntityService'
import { IBeneficiaryDeliveryAddress } from '@/shared/models/orderms/BeneficiaryDeliveryAddressModel'
export default class BeneficiaryDeliveryAddressesService extends BaseEntityService<IBeneficiaryDeliveryAddress> {
    private static instance: BeneficiaryDeliveryAddressesService;

    private constructor () {
      super('api/orderms/api/beneficiary-delivery-addresses')
    }

    public static getInstance (): BeneficiaryDeliveryAddressesService {
      if (!BeneficiaryDeliveryAddressesService.instance) {
        return new BeneficiaryDeliveryAddressesService()
      }
      return BeneficiaryDeliveryAddressesService.instance
    }
}
