import CommonHelpers from '@/shared/commonHelpers'
import VueRouter, { Route } from 'vue-router'
import { Store } from 'vuex'
import VueI18n from 'vue-i18n'
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module 'axios'
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $store: Store;
    $helpers: CommonHelpers;
    $i18n: VueI18n;
  }
}
declare module 'vee-validate'
