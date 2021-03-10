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

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    paymentMethods: [],
    shippingMethods: [],
    currency: '€',
    currencyVal: 'EUR',
    currentLanguage: 'nl'
  },
  mutations: {
    changeLang (state: any, lang: string) {
      state.currentLanguage = lang
    },
    countries (state: any, countries: any[]) {
      state.countries = countries
    },
    paymentMethods (state: any, paymentMethods: any[]) {
      state.paymentMethods = paymentMethods
    },
    shippingMethods (state: any, shipping: any[]) {
      state.shippingMethods = shipping
    }
  },
  actions: {
  },
  modules: {
  }
})
