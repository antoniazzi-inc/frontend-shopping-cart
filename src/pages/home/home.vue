<!--
  - /*
  -  *
  -  *  * Copyright 2018-2021 Antoniazzi Holding BV
  -  *  *
  -  *  * This program is free software: you can redistribute it and/or modify it
  -  *  * under the terms of the GNU General Public License as published by
  -  *  * the Free Software Foundation, either version 3 of the License,
  -  *  * or (at your option) any later version.
  -  *  *
  -  *  * This program is distributed in the hope that it will be useful,
  -  *  * but WITHOUT ANY WARRANTY; without even the implied warranty of
  -  *  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  -  *  * GNU General Public License for more details.
  -  *  *
  -  *  * You should have received a copy of the GNU General Public License
  -  *  * along with this program. If not, see <https://www.gnu.org/licenses/>.
  -  *
  -  */
  -->

<template>
  <div class="wrapper">
    <div class="modal" data-backdrop="static" data-keyboard="false" id="errorModal" tabindex="-1" role="dialog" ref="errorModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5>{{$t('labels.error')}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="mt-4">
              <h5>{{$t('labels.error')}}</h5>
              <p>{{cartError}}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              {{$t('labels.confirm')}}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <img class="hoverImage" src="../../assets/images/prod33745_thumb.jpeg"/>
        <div class="row mt-4">
          <div class="col-md-12 text-left ml-2">
            <ul class="checkmark">
              <li style="--checkColor:#011993;">
                <span style="color: rgb(0, 145, 147);">Direct laten betalen met iDeal en BanContact</span>
              </li>
              <li style="--checkColor:#011993;">
                <span style="color: rgb(0, 145, 147);">We plaatsten nog dezelfde dag de betaalmethodes voor je</span>
              </li>
              <li style="--checkColor:#011993;">
                <span style="color: rgb(0, 145, 147);">Verkoop vandaag nog je producten en diensten via je site!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-12 text-left">
            <h1 class="title">{{$t('labels.shoppingCart')}}</h1>
          </div>
        </div>
        <div>
          <div class="row">
            <div class="col-md-3 text-left">
              <h2 class="title mt-4">{{$t('labels.myDetails')}}</h2>
              <a class="cursor_pointer" @click="login = true" v-if="!login">{{$t('labels.login')}}</a>
              <a class="cursor_pointer" @click="login = false" v-if="login">{{$t('labels.register')}}</a>
            </div>
          </div>
          <div v-if="!login">
          <div class="row  mt-4">
            <div class="form-group col-md-12">
              <div class="col-md-4 text-left pt-2">
                <input type="text" class="form-control mx-auto" v-validate="'required'" name="First Name" :placeholder="$t('labels.firstName')" v-model="user.relationProfile.firstName">
                <span class="small text-danger">{{errors.first('First Name')}}</span>
              </div>
              <div class="col-md-4 text-left pt-2">
                <input type="text" class="form-control mx-auto" :placeholder="$t('labels.middleName')" v-model="user.relationProfile.middleName">
              </div>
              <div class="col-md-4 text-left pt-2">
                <input type="text" class="form-control mx-auto" v-validate="'required'" name="Last Name" :placeholder="$t('labels.lastName')" v-model="user.relationProfile.lastName">
                <span class="small text-danger">{{errors.first('Last Name')}}</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <div class="col-md-12 text-left pt-2">
                <input type="email" @blur="checkEmailAddress" class="form-control m-t-20" v-validate="'required|email'" name="Email" :placeholder="$t('labels.email')" v-model="user.email">
                <span class="small text-danger">{{errors.first('Email')}}</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <div class="col-md-9 text-left pt-2">
                <input type="text" class="form-control m-t-20" v-validate="'required'" name="Street"  :placeholder="$t('labels.street')" v-model="user.relationAddresses[0].street">
                <span class="small text-danger">{{errors.first('Street')}}</span>
              </div>
              <div class="col-md-3 text-left pt-2">
                <input type="text" class="form-control m-t-20" v-validate="'required'" name="House Number" :placeholder="$t('labels.number')"
                       v-model="user.relationAddresses[0].houseNumber">
                <span class="small text-danger">{{errors.first('House Number')}}</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <div class="col-md-4 text-left pt-2">
                <input type="text" class="form-control m-t-20" :placeholder="$t('labels.postCode')"
                       v-model="user.relationAddresses[0].postalCode"  v-validate="'required'" name="Postal Code">
                <span class="small text-danger">{{errors.first('Postal Code')}}</span>
              </div>
              <div class="col-md-8 text-left pt-2">
                <input type="text" class="form-control m-t-20" :placeholder="$t('labels.city')"
                       v-validate="'required'" name="City" v-model="user.relationAddresses[0].city">
                <span class="small text-danger">{{errors.first('City')}}</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <div class="col-md-12 text-left pt-2">
                <multiselect v-model="selectedCountry"
                             :options="$store.state.countries"
                             :searchable="true"
                             :close-on-select="true"
                             :label="$store.state.currentLanguage === 'nl' ? 'nlName' : 'enName'"
                             :track-by="$store.state.currentLanguage === 'nl' ? 'nlName' : 'enName'"
                             :show-labels="true" placeholder="Choose country"/>
                <span class="small text-danger" v-if="selectedCountry === null && submited">{{$t('labels.countryRequired')}}</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-left">
              <span class="small">{{$t('labels.requiredFields')}}</span>
            </div>
          </div>
          </div>
          <div v-else>
            <div class="row">
              <div class="col-md-offset-3 col-md-6 text-center">
                <form @submit="loginExistingUser">
                  <div class="form-group">
                    <label class="control-label">{{$t('labels.email')}}</label>
                    <input type="email" class="form-control" v-model="credentials.username">
                  </div>
                  <div class="form-group">
                    <label class="control-label">{{$t('labels.password')}}</label>
                    <input type="password" class="form-control" v-model="credentials.password">
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-default">{{$t('labels.login')}}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-12 text-left">
              <h1 class="pay_h1">{{ $t('labels.paymentMethod') }}</h1>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-12 text-left">
              <p>{{ $t('labels.howToPay') }} <b>{{ getPaymentMethodName(selectedPayment) }}</b></p>
            </div>
          </div>
          <div class="row mt-4" v-if="allPaymentMethods">
            <template v-for="(item, ind) in product.productPaymentMethods">
            <div :class="{'text-left hoverImage_payment': true, 'active_payment': selectedPayment === item.paymentMethodId }"
                 @click="selectedPayment = item.paymentMethodId" :key="ind">
              <img :src="getImgUrl(getPaymentMethodName(item.paymentMethodId))" class="pi"/>
            </div>
            </template>
          </div>
          <div class="row mt-4">
            <div class="col-md-12 text-left">
              <h1>{{ $t('labels.shoppingCart') }}</h1>
            </div>
          </div>
          <div class="paymentBox">
            <div class="row mt-4">
              <div class="col-md-3 text-left itemCol">
                <span>{{$helpers.getMultiLangName(product.productLanguages)}}</span>
              </div>
              <div class="col-md-5 text-left" v-if="productAttributes.length">
                <multiselect v-model="selectedProductAttributes"
                             :options="productAttributes"
                             :searchable="true"
                             :close-on-select="true"
                             label="label"
                             track-by="label"
                             group-values="libs"
                             group-label="label"
                             :multiple="true"
                             :group-select="true"
                             :show-labels="true" :placeholder="$t('labels.chooseAttribute')"/>
              </div>
              <div class="col-md-4 text-center">
                <span>{{ $store.state.currency }}{{ product.price }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 itemCol">
                <hr class="mt-2"/>
              </div>
            </div>
            <div class="row itemCol" v-if="product.productType === 'PHYSICAL'">
              <div class="col-md-7 text-left">
                <h5>{{$t('labels.shippingMethod')}}</h5>
                <multiselect v-model="selectedShippingMethod"
                             :options="$store.state.shippingMethods"
                             :searchable="true"
                             :close-on-select="true"
                             label="label"
                             track-by="label"
                             :show-labels="true" :placeholder="$t('labels.chooseShippingMethod')"/>
                <span class="small text-danger" v-if="selectedShippingMethod === null && submited">{{$t('labels.ShippingRequired')}}</span>
              </div>
              <div class="col-md-5 text-left mt-4">
                <h4>{{ $store.state.currency }}</h4>
              </div>
            </div>
            <div class="row itemCol">
              <div class="col-md-7 col-sm-6  text-left">
                <h3>{{$t('labels.total')}}</h3>
                <h4>{{$t('labels.totalExcl')}} {{ $store.state.currency }}{{ getTotalTax() }} btw</h4>
                <h4>{{$t('labels.discount')}}</h4>
              </div>
              <div class="col-md-5 col-sm-6  text-left">
                <h3>{{ $store.state.currency }}{{ getProductTotalPrice() }}</h3>
                <h4>{{ $store.state.currency }}{{ product.price }}</h4>
                <h4>{{ $store.state.currency }}{{ order.totalDiscounts }}</h4>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <button data-v-5041d56c="" @click="proceedCheckout" class="btn btn-primary btn-pay">{{$t('labels.pay')}}</button>
              </div>
              <div class="col-md-12 text-left m-2">
                <span class="secure_payment">{{$t('labels.securePayment')}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./home.component.ts"/>
<style scoped>
.hoverImage {
  transition: transform .2s;
  padding-top: 3em;
}

.hoverImage:hover {
  transform: scale(1.2);
}

.hoverImage_payment {
  transition: transform .2s;
  border: 1px solid #b0b0b0;
  float: left;
  margin-left: 1em;
}

.secure_payment {
  margin-bottom: .4em;
}

.hoverImage_payment:hover {
  -webkit-box-shadow: 0 0 24px 0 pxn k, nm, nm, nm, rgba(0, 0, 0, .4);
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, .4);
  cursor: pointer;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.active_payment {
  -webkit-box-shadow: 0 0 24px 0 pxn k, nm, nm, nm, rgba(0, 0, 0, .4);
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, .4);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.title {
  font-weight: bold !important;
}
ul {
  list-style: none;
  text-align: left;
}
 ul.checkmark li:before {
   font-size: 2rem;
   vertical-align: middle;
   color: var(--checkColor);
   content: "\2714\0020";
   display: inline-block;
   margin-left: -30px;
   width: 32px;
 }
.wrapper {
  border: 1px solid #ddd;
  margin: 1em;
  border-radius: 8px;
  -webkit-box-shadow: 0 0 0.95em rgba(0, 0, 0, .2);
  box-shadow: 0 0 0.95em rgba(0, 0, 0, .2);
  padding-left: 1em;
  padding-right: 1em;
  display: block !important;
}
.paymentBox {
  border: 1px solid #ddd;
  margin: .8em;
  border-radius: 8px;
  -webkit-box-shadow: 0 0 0.95em rgba(0, 0, 0, .2);
  box-shadow: 0 0 0.95em rgba(0, 0, 0, .2);
  padding-left: 1em;
  padding-right: 1em;
  display: block !important;
}

.itemCol {
  padding-top: .4em;
  padding-bottom: .4em;
}

.btn-pay {
  border-radius: 3px;
  -webkit-filter: brightness(1);
  filter: brightness(1);
  display: block;
  width: 100%;
  font-size: 22px;
  border: none;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  padding: 16px;
  -webkit-transition: all .2s;
  transition: all .2s;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 20px;
}

.btn-pay:hover {
  -webkit-filter: brightness(.9);
  filter: brightness(.9);
}

.itemCol span {
  font-family: ShopLite, sans-serif !important;
  font-weight: 400 !important;
  text-transform: none !important;
}
</style>
