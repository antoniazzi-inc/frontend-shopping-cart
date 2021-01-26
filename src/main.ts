import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/styles.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import VueI18n from 'vue-i18n'
import * as enTranslations from '@/i18n/en'
import * as nlTranslations from '@/i18n/nl'
Vue.config.productionTip = false
Vue.use(VueI18n)
const messages = {
  en: enTranslations,
  nl: nlTranslations
}
const i18n: object = new VueI18n({
  locale: 'en',
  messages
})
new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#arcomplete')
