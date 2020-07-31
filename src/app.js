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

import chai from 'chai'
const expect = chai.expect

import spies from 'chai-spies'
chai.use(spies)
//单元测试
{
  // 测试是否传入 icon
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'shezhi'
    }
  })
  button.$mount('#test')
  console.log(button.$el);
  let href = button.$el.querySelector('use')
  // 测试 引入图标
  expect(href.getAttribute('xlink:href')).to.eq('#i-shezhi') // 单元测试没在控制台报错代表测试用例通过   判断 主观输入  是否 = 实际输出
}
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'shezhi',
      loading: true
    }
  })
  button.$mount() // 挂载到内存中也是一样可以看控制台信息
  let href = button.$el.querySelector('use')
  // 测试为加载中状态 图标是否为loading
  expect(href.getAttribute('xlink:href')).to.eq('#i-loading')
}
{
  const div = document.createElement('div')
  document.body.append(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'shezhi',
      iconPosition: 'right'
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg) // 注意该组件应该渲染到页面上,才会有style样式
  // 测试图标位置是否为 right
  expect(order).to.eq('2')
}
{
  //函数mock
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'shezhi',
      iconPosition: 'right'
    }
  })
  vm.$mount()
  let spy = chai.spy(function () {
  })
  vm.$on('click', spy)
  // 希望这个函数被执行
  let button = vm.$el  // 获取该元素对象
  button.click()
  expect(spy).to.have.been.called() // 希望 spy 间谍函数 已经被调用了
}






