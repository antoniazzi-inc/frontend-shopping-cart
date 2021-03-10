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
import { IPaymentMethodLanguage } from './payment-method-language.model'
import { IBaseEntity } from '@/shared/models/baseEntity.model'

export const enum PaymentMethodType {
    CREDIT_CARD = 'CREDIT_CARD',
    IDEAL = 'IDEAL',
    BANK_TRANSFER = 'BANK_TRANSFER',
    PAYPAL = 'PAYPAL',
    PAYPAL_NATIVE = 'PAYPAL_NATIVE',
    RECURRENT_INCASSO = 'RECURRENT_INCASSO',
    SOFORT = 'SOFORT',
    IDEAL_SISOW = 'IDEAL_SISOW',
    BANCONTACT_SISOW = 'BANCONTACT_SISOW',
    BANCONTACT = 'BANCONTACT',
    BELFIUS = 'BELFIUS',
    KBC = 'KBC',
    APPLE_PAY = 'APPLE_PAY',
    ONETIME_INCASSO = 'ONETIME_INCASSO'
}

export const enum PaymentMethodAvailability {
    DISABLED = 'DISABLED',
    PRODUCTION_MODE = 'PRODUCTION_MODE',
    TEST_MODE = 'TEST_MODE'
}

export interface IPaymentMethod extends IBaseEntity{
    paymentMethodType?: PaymentMethodType;
    configJson?: string;
    internalName?: string;
    accessCode?: string;
    administrativeCostsFixed?: number;
    administrativeCostsPercentage?: number;
    wpsoftFee?: number;
    selectable?: boolean;
    availability?: PaymentMethodAvailability;
    paymentMethodLanguages?: IPaymentMethodLanguage[];
}

export class PaymentMethod implements IPaymentMethod {
  constructor (
        public id?: number,
        public administrationId?: number,
        public paymentMethodType?: PaymentMethodType,
        public configJson?: string,
        public internalName?: string,
        public accessCode?: string,
        public administrativeCosts?: number,
        public wpsoftFee?: number,
        public selectable?: boolean,
        public availability?: PaymentMethodAvailability,
        public createdOn?: Moment,
        public updatedOn?: Moment,
        public administrativeCostsFixed?: number,
        public administrativeCostsPercentage?: number,
        public version?: number,
        public paymentMethodLanguages?: IPaymentMethodLanguage[]
  ) {
    this.selectable = this.selectable || false
    this.wpsoftFee = this.wpsoftFee || 0.24
  }
}
