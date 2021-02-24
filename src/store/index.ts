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
