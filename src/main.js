import Vue from 'vue'
import App from './App.vue'
import {Vuelidate} from "vuelidate";
import './registerServiceWorker'
import router from './router'
import store from './store'
import Loader from "@/components/app/Loader";
import Overlay from "@/components/app/Overlay";

Vue.config.productionTip = false

Vue.use(Vuelidate)

Vue.component('Loader', Loader)
Vue.component('Overlay', Overlay)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
