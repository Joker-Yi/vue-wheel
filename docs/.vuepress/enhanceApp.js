
import Vue from 'vue'
import Button from '../../src/button'
import Icon from '../../src/icon'
import ButtonGroup from '../../src/button-group'
import Input from '../../src/input'
import Row from '../../src/row'
import Col from '../../src/col'
import Layout from '../../src/layout'
import Footer from '../../src/footer'
import Content from '../../src/content'
import Header from '../../src/header'
import Sider from '../../src/sider'
import Tabs from '../../src/tabs'
import TabsHead from '../../src/tabs-head'
import TabsBody from '../../src/tabs-body'
import TabsItem from '../../src/tabs-item'
import TabsPane from '../../src/tabs-pane'
import Toast from '../../src/toast'
import plugin from "../../src/plugin";
import Popover from '../../src/popover'



export default ({
                  Vue, // VuePress 正在使用的 Vue 构造函数
                  options, // 附加到根实例的一些选项
                  router, // 当前应用的路由实例
                  siteData // 站点元数据
                }) => {
  // ...做一些其他的应用级别的优化
  Vue.use(plugin)


  Vue.component('vw-button',Button)
  Vue.component('vw-icon',Icon)
  Vue.component('vw-button-group',ButtonGroup)
  Vue.component('vw-input',Input)
  Vue.component('vw-row',Row)
  Vue.component('vw-col',Col)
  Vue.component('vw-layout',Layout)
  Vue.component('vw-footer',Footer)
  Vue.component('vw-content',Content)
  Vue.component('vw-header',Header)
  Vue.component('vw-sider',Sider)
  Vue.component('vw-tabs',Tabs)
  Vue.component('vw-tabs-head',TabsHead)
  Vue.component('vw-tabs-body',TabsBody)
  Vue.component('vw-tabs-item',TabsItem)
  Vue.component('vw-tabs-pane',TabsPane)
  Vue.component('vw-toast',Toast)
  Vue.component('vw-popover', Popover)

}
