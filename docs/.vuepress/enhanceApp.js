
// import Vue from 'vue'
// import Button from '../../src/button'
// import Icon from '../../src/icon'
// import ButtonGroup from '../../src/button-group'
// import Input from '../../src/input'
// import Row from '../../src/row'
// import Col from '../../src/col'
// import Layout from '../../src/layout'
// import Footer from '../../src/footer'
// import Content from '../../src/content'
// import Header from '../../src/header'
// import Sider from '../../src/sider'
// import Tabs from '../../src/tabs'
// import TabsHead from '../../src/tabs-head'
// import TabsBody from '../../src/tabs-body'
// import TabsItem from '../../src/tabs-item'
// import TabsPane from '../../src/tabs-pane'
// import Toast from '../../src/toast'
// import plugin from "../../src/plugin";
// import Popover from '../../src/popover'



export default ({
                  Vue, // VuePress 正在使用的 Vue 构造函数
                  options, // 附加到根实例的一些选项
                  router, // 当前应用的路由实例
                  siteData // 站点元数据
                }) => {
  // ...做一些其他的应用级别的优化
  Vue.mixin({
    mounted() {
      import('../../src/button').then(module => {
        Vue.component('vw-button',module.default)
      })
      import('../../src/icon').then(module => {
        Vue.component('vw-icon',module.default)
      })
      import('../../src/button-group').then(module => {
        Vue.component('vw-button-group',module.default)
      })
      import('../../src/input').then(module => {
        Vue.component('vw-input',module.default)
      })
      import('../../src/row').then(module => {
        Vue.component('vw-row',module.default)
      })
      import('../../src/col').then(module => {
        Vue.component('vw-col',module.default)
      })
      import('../../src/layout').then(module => {
        Vue.component('vw-layout',module.default)
      })
      import('../../src/footer').then(module => {
        Vue.component('vw-footer',module.default)
      })
      import('../../src/content').then(module => {
        Vue.component('vw-content',module.default)
      })
      import('../../src/header').then(module => {
        Vue.component('vw-header',module.default)
      })
      import('../../src/sider').then(module => {
        Vue.component('vw-sider',module.default)
      })
      import('../../src/tabs').then(module => {
        Vue.component('vw-tabs',module.default)
      })
      import('../../src/tabs-head').then(module => {
        Vue.component('vw-tabs-head',module.default)
      })
      import('../../src/tabs-body').then(module => {
        Vue.component('vw-tabs-body',module.default)
      })
      import('../../src/tabs-item').then(module => {
        Vue.component('vw-tabs-item',module.default)
      })
      import('../../src/tabs-pane').then(module => {
        Vue.component('vw-tabs-pane',module.default)
      })
      import('../../src/toast').then(module => {
        Vue.component('vw-toast',module.default)
      })
      import('../../src/popover').then(module => {
        Vue.component('vw-popover',module.default)
      })
      import('../../src/plugin').then(module => {
        Vue.use(module.default)
      })


      // Vue.use(plugin)


      // Vue.component('vw-button',Button)
      // Vue.component('vw-icon',Icon)
      // Vue.component('vw-button-group',ButtonGroup)
      // Vue.component('vw-input',Input)
      // Vue.component('vw-row',Row)
      // Vue.component('vw-col',Col)
      // Vue.component('vw-layout',Layout)
      // Vue.component('vw-footer',Footer)
      // Vue.component('vw-content',Content)
      // Vue.component('vw-header',Header)
      // Vue.component('vw-sider',Sider)
      // Vue.component('vw-tabs',Tabs)
      // Vue.component('vw-tabs-head',TabsHead)
      // Vue.component('vw-tabs-body',TabsBody)
      // Vue.component('vw-tabs-item',TabsItem)
      // Vue.component('vw-tabs-pane',TabsPane)
      // Vue.component('vw-toast',Toast)
      // Vue.component('vw-popover', Popover)
    }
  })


}
