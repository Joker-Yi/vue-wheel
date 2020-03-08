/**
 * Created by Yee .
 */
import Vue from 'vue'
import Button from './button'
import Icon from './icon'

// 注册一个全局的组件Button
Vue.component('vw-button',Button)
Vue.component('vw-icon',Icon)

new Vue({
  el: '#app'
})











