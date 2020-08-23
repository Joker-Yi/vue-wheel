---
title: Toast 消息通知弹窗
sidebarDepth: 2
---
# Toast 消息通知弹窗
悬浮在页面的消息通知弹窗。可在全局中直接调用`this.$toast('content', {postion,autoClose})`

## 基础用法
::: demo 
```vue
<template>
  <div>
  <button @click="showToast1">click</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    showToast1(){
      this.$toast('我是 message')
    },
  }
}
</script>
<style>

</style>
```
:::
## 显示位置

支持三种位置显示。`top，middle，bottom`

::: demo 
```vue
<template>
  <div>
  <button @click="showToast1">top</button>
  <button @click="showToast2">middle</button>
  <button @click="showToast3">bottom</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast(position){
      this.$toast('我是 message',{position,autoClose: 3})
    }
  }
}
</script>
<style>

</style>
```
:::

## 延时自动关闭&手动关闭

`autoClose`设置为`false`则为手动关闭，为`true`或者数字则为自动关闭，数字为延时关闭的时间（单位s）。

::: demo 
```vue
<template>
  <div>
  <button @click="showToast1">点我自动关闭</button>
  <button @click="showToast2">点我手动关闭</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    showToast1(){
      this.$toast('我是 message1',{autoClose: 8})
    },
    showToast2(){
      this.$toast('我是 message2',{autoClose: false})
    },
  }
}
</script>
<style>

</style>
```
:::

## 内容支持HTML
默认`enableHtml: false`，`true`为支持

::: demo 
```vue
<template>
  <div>
  <button @click="showToast1">点我</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    showToast1(){
      this.$toast('<p>我是p标签</p>',{autoClose: 8, enableHtml: true})
    },
  }
}
</script>
<style>

</style>
```
:::
