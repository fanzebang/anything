// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

import axios from 'axios';
Vue.prototype.$axios = axios

import jsonBig from 'json-bigint'
Vue.prototype.$jsonBig = jsonBig

import BigNumber from "bignumber.js";
Vue.prototype.$BigNumber = BigNumber

import { VueJsonp } from 'vue-jsonp'
Vue.use(VueJsonp)

import getData from '../static/js/getData'
Vue.prototype.$getData = getData

Vue.use(ElementUI);




Vue.prototype.$EventBus = new Vue()
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

