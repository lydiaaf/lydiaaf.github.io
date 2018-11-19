
import App from './App.vue'
import Vue from 'vue'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'

import VueTable from '@lossendae/vue-table'
import '../src/bootstrap.min.css'
//import MButton from 'vue-m-button'
//import 'vue-m-button/dist/css/default.css'
import { Button } from 'bootstrap-vue/es/components';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(Button);
Vue.component("vue-table", VueTable);
//Vue.use(MButton)

//Vue.use('vue-table', VueTable)
import Vuex from 'vuex' 
import page1 from './components/page1.vue'
import page2 from './components/page2.vue'
import page3 from './components/page3.vue'

Vue.use(Vuex)
Vue.use(VueTabs)

Vue.config.productionTip = false

const routes = [
  { path: '/page1', component: page1 },
  { path: '/page2', component: page2 },
  { path: '/page3', component: page3 }
];
  const router = new VueRouter({
    routes 
  })
  const app = new Vue({
    render: h => h(App),
    router
  }).$mount('#app')

/*new Vue({
  render: h => h(App),
}).$mount('#app')
*/

