import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/styles.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import VueI18n from 'vue-i18n'
import * as enTranslations from '@/i18n/en'
import * as nlTranslations from '@/i18n/nl'
import CommonHelpers from '@/shared/commonHelpers'
import ServerErrorsHandler from '@/shared/serverErrorsHandler.ts'
import setupAxiosInterceptors from '@/shared/axios-interceptors.ts'
import VeeValidate from 'vee-validate'
Vue.config.productionTip = false
Vue.use(VueI18n)

const config = {
  aria: true,
  classNames: {},
  classes: false,
  delay: 0,
  dictionary: null,
  errorBagName: 'errors', // change if property conflicts
  events: 'blur',
  fieldsBagName: 'fields',
  i18n: null, // the vue-i18n plugin instance
  i18nRootKey: 'validations', // the nested key under which the validation messages will be located
  inject: true,
  locale: 'en',
  validity: false,
  useConstraintAttrs: true
}
// @ts-ignore
window.$ = require('jquery')
const plugin = {
  install () {
    // @ts-ignore
    Vue.helpers = CommonHelpers
    Vue.prototype.$helpers = CommonHelpers
  }
}
Vue.use(VeeValidate, config)

Vue.use(plugin)
const messages = {
  en: enTranslations,
  nl: nlTranslations
}
const i18n: object = new VueI18n({
  locale: 'en',
  messages
})
const errorHandler = new ServerErrorsHandler()
setupAxiosInterceptors((err: object) => {
  errorHandler.handleError(err)
})
new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#arcomplete')
