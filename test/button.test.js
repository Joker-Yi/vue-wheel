/**
 * Created by Yee .
 */
const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

// 测试用例 每个it就是一个测试用例
// BDD 行为测试驱动 Mocha
//eg： describe '人类'
//  it has head
//  it has hand
// 万能语句: expect(xxx).to.eq(yyy)
describe('Button', () => {

  it('存在.', () => {
    expect(Button).to.exist
  })

  it('可以设置icon.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'shezhi'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-shezhi')
    vm.$destroy()
  })

  it('可以设置loading.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'you',
        loading: true
      }
    }).$mount()
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    vm.$destroy()
  })

  it('icon 默认的 order 是 1', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'shezhi',
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')  // 希望 获取计算后的属性order = '1'
    vm.$el.remove()
    vm.$destroy()
  })

  it('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'shezhi',
        iconPosition: 'right'
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  })
  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'shezhi',
      }
    }).$mount()

    const callback = sinon.fake(); //sinon.fake() 用来 标记该方法（函数）被调用，它知道自己是否被调用了
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called

  })
})












