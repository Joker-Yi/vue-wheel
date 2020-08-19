/**
 * Created by Yee on 2020/8/19 15:23.
 */
import Toast from './toast'

export default {
  install (Vue, options) {
    Vue.prototype.$toast = function (message) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor()
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}












