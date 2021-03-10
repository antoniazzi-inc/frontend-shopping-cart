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
import { IRelationProfile } from './relation-profile.model'
import { IContactHistory } from './contact-history.model'
import { IRelationAddress } from './relation-address.model'
import { IRelationPhone } from './relation-phone.model'
import { IRelationDeliveryMethod } from './relation-delivery-method.model'
import { IRelationPaymentMethod } from './relation-payment-method.model'
import { IRelationCustomField } from './relation-custom-field.model'
import { IRelationGroup } from './relation-group.model'
import { IGrantedAuthority } from './GrantedAuthorityModel'
import { ICompany } from '@/shared/models/relationms/company.model'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
import { ICustomer } from '../customer.model'
import { IAffiliate } from '@/shared/models/AffiliateModel'
import { IBeneficiary } from '@/shared/models/beneficiary.model'
import { IBankDetails } from '@/shared/models/BankDetailsModel'
import { IRole } from '@/shared/models/role.model'
import { ITagEntity } from '@/shared/models/tagModel'

export interface IRelationEntity extends IBaseEntity {
  version?: number;
  administrationId?: number;
  uid?: string;
  username?: string;
  password?: string;
  email?: string;
  enabled?: boolean;
  languageKey?: string;
  tfaEnabled?: boolean;
  tfaId?: string;
  customer?: ICustomer;
  affiliate?: IAffiliate;
  beneficiary?: IBeneficiary;
  relationProfile?: IRelationProfile;
  bankDetails?: IBankDetails[];
  contactHistories?: IContactHistory[];
  contactHistoryRecords?: IContactHistory[];
  relationAddresses?: IRelationAddress[];
  relationPhones?: IRelationPhone[];
  relationTags?: ITagEntity[];
  companies?: ICompany[];
  relationDeliveryMethods?: IRelationDeliveryMethod[];
  relationPaymentMethods?: IRelationPaymentMethod[];
  relationCustomFields?: IRelationCustomField[];
  roles?: IRole[];
  relationGroups?: IRelationGroup[];
  authorities?: IGrantedAuthority[];
}

export class RelationEntity implements IRelationEntity {
  constructor (
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public id?: number,
    public version?: number,
    public administrationId?: number,
    public uid?: string,
    public username?: string,
    public password?: string,
    public email?: string,
    public enabled?: boolean,
    public languageKey?: string,
    public tfaEnabled?: boolean,
    public tfaId?: string,
    public customer?: ICustomer,
    public affiliate?: IAffiliate,
    public beneficiary?: IBeneficiary,
    public relationProfile?: IRelationProfile,
    public bankDetails?: IBankDetails[],
    public contactHistories?: IContactHistory[],
    public contactHistoryRecords?: IContactHistory[],
    public relationAddresses?: IRelationAddress[],
    public relationPhones?: IRelationPhone[],
    public relationTags?: ITagEntity[],
    public companies?: ICompany[],
    public relationDeliveryMethods?: IRelationDeliveryMethod[],
    public relationPaymentMethods?: IRelationPaymentMethod[],
    public relationCustomFields?: IRelationCustomField[],
    public roles?: IRole[],
    public relationGroups?: IRelationGroup[],
    public authorities?: IGrantedAuthority[]
  ) {
    this.enabled = this.enabled ? this.enabled : true
  }
}
