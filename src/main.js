import Vue from 'vue'
import { Button, Radio, Container, Main, Header, Aside, Menu, Submenu,
        MenuItem, MenuItemGroup, Dropdown, DropdownMenu, DropdownItem, Row,
        Col, Card, Table, TableColumn, Form, FormItem, Input, Select,
        Option, Switch, DatePicker, Dialog,
       } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'

import App from './App.vue'

import router from '../router'
import http from 'axios'
import '../api/mock'

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Radio);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Switch);
Vue.use(DatePicker);
Vue.use(Dialog);

Vue.prototype.$http = http
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
