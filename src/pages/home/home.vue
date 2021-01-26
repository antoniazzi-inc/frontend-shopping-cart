<template>
  <div class="wrapper">
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
            <h1 class="title">{{$t('labels.selfCheckout')}}</h1>
          </div>
        </div>
        <form onsubmit="">
          <div class="row">
            <div class="col-md-12 text-left">
              <h2 class="title mt-4">{{$t('labels.myDetails')}}</h2>
            </div>
          </div>
          <div class="row  mt-4">
            <div class="form-group">
              <div class="col-md-4 text-left pt-2">
                <input type="text" class="form-control mx-auto" :placeholder="$t('labels.firstName')" v-model="user.firstName">
              </div>
              <div class="col-md-4 text-left pt-2">
                <input type="text" class="form-control mx-auto" :placeholder="$t('labels.middleName')" v-model="user.middleName">
              </div>
              <div class="col-md-4 text-left pt-2">
                <input type="text" class="form-control mx-auto" :placeholder="$t('labels.lastName')" v-model="user.lastName">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-group">
              <div class="col-md-12 text-left pt-2">
                <input type="email" class="form-control m-t-20" :placeholder="$t('labels.email')" v-model="user.email">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-group">
              <div class="col-md-9 text-left pt-2">
                <input type="email" class="form-control m-t-20" :placeholder="$t('labels.street')" v-model="user.address.street">
              </div>
              <div class="col-md-3 text-left pt-2">
                <input type="email" class="form-control m-t-20" :placeholder="$t('labels.number')"
                       v-model="user.address.number">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-group">
              <div class="col-md-4 text-left pt-2">
                <input type="email" class="form-control m-t-20" :placeholder="$t('labels.postCode')"
                       v-model="user.address.postcode">
              </div>
              <div class="col-md-8 text-left pt-2">
                <input type="email" class="form-control m-t-20" :placeholder="$t('labels.city')" v-model="user.address.city">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-group">
              <div class="col-md-12 text-left pt-2">
                <multiselect v-model="user.address.country"
                             :options="$store.state.countries"
                             :searchable="true"
                             :close-on-select="true"
                             :show-labels="true" placeholder="Choose country"/>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-left">
              <span class="small">all fields with * are required</span>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-12 text-left">
              <h1 class="pay_h1">{{ $t('labels.paymentMethod') }}</h1>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-12 text-left">
              <p>{{ $t('labels.howToPay') }} <b>{{ selectedPayment }}</b></p>
            </div>
          </div>
          <div class="row mt-4">
            <div :class="{'text-left hoverImage_payment': true, 'active_payment': selectedPayment === 'iDeal' }"
                 @click="selectedPayment='iDeal'">
              <img src="../../assets/images/iDeal.jpeg" class="pi"/>
            </div>
            <div :class="{'text-left hoverImage_payment': true, 'active_payment': selectedPayment === 'BanContact' }"
                 @click="selectedPayment='BanContact'">
              <img src="../../assets/images/BanContact.png" class="pi"/>
            </div>
            <div :class="{'text-left hoverImage_payment': true, 'active_payment': selectedPayment === 'Overmaking' }"
                 @click="selectedPayment='Overmaking'">
              <img src="../../assets/images/overmaking.png" class="pi"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-12 text-left">
              <h1>{{ $t('labels.shoppingCart') }}</h1>
            </div>
          </div>
          <div class="paymentBox">
            <div class="row mt-4">
              <div class="col-md-7 text-left itemCol">
                <span>Shopping cart</span>
              </div>
              <div class="col-md-5 text-left">
                <span>{{ $store.state.currency }}{{ totalExclPrice }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 itemCol">
                <hr class="mt-2"/>
              </div>
            </div>
            <div class="row itemCol">
              <div class="col-md-7 text-left">
                <h3>Total</h3>
                <h4>totaal excl {{ $store.state.currency }}{{ totalTax }} btw</h4>
              </div>
              <div class="col-md-5 text-left">
                <h3>{{ $store.state.currency }}{{ totalPrice }}</h3>
                <h4>{{ $store.state.currency }}{{ totalExclPrice }}</h4>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <button data-v-5041d56c="" class="btn btn-primary btn-pay">Pay</button>
              </div>
              <div class="col-md-12 text-left">
                <span class="secure_payment">Payments always go through a secure connection</span>
              </div>
            </div>
          </div>
        </form>
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
