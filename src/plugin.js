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
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => { // 关闭置为null（解决手动关闭或者自动关闭，currentToast依然有值的bug）
          currentToast = null
        }
      })
    }
  }
}


/* helpers  创建toast组件 */
function createToast ({Vue, message, propsData, onClose}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}









