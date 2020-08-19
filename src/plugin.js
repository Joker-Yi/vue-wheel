/**
 * Created by Yee on 2020/8/19 15:23.
 */
import Toast from './toast'

let currentToast
export default {
  install (Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({Vue, message, propsData: toastOptions})
    }
  }
}


/* helpers  创建toast组件 */
function createToast ({Vue, message, propsData}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}









