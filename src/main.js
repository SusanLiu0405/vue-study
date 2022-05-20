import Vue from 'vue'
import { Button, Radio, Container, Main, Header, Aside } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import router from '../router'

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Radio);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
