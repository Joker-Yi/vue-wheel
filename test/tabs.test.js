/**
 * Created by Yee on 2020/8/14 0:02.
 */
const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('vw-tabs', Tabs)
Vue.component('vw-tabs-head', TabsHead)
Vue.component('vw-tabs-body', TabsBody)
Vue.component('vw-tabs-item', TabsItem)
Vue.component('vw-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected 属性', (done) => {

    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <vw-tabs selected="finance">
        <vw-tabs-head>
          <vw-tabs-item name="woman"> 美女 </vw-tabs-item>
          <vw-tabs-item name="finance"> 财经 </vw-tabs-item>
          <vw-tabs-item name="sports"> 体育 </vw-tabs-item>
        </vw-tabs-head>
        <vw-tabs-body>
          <vw-tabs-pane name="woman"> 美女相关资讯 </vw-tabs-pane>
          <vw-tabs-pane name="finance"> 财经相关资讯 </vw-tabs-pane>
          <vw-tabs-pane name="sports"> 体育相关资讯 </vw-tabs-pane>
        </vw-tabs-body>
      </vw-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })

  it('可以接受 direction prop', () => {

  })

})











