/**
 * Created by Yee .
 */
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

// 注册一个全局的组件Button
Vue.component('vw-button',Button)
Vue.component('vw-icon',Icon)
Vue.component('vw-button-group',ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
})











