---
title: Button 按钮
sidebarDepth: 2
---
# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

::: demo 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**
```html
<template>
  <div>
    <vw-button>默认按钮</vw-button>
    <vw-button icon="shezhi">默认按钮</vw-button>
    <vw-button :loading="true">默认按钮</vw-button>
    <vw-button disabled>默认按钮</vw-button>
  </div>
</template>
<script>
export default {
}
</script>
```
:::

## 禁用状态

禁用状态的按钮。

::: demo 
```html
<template>
  <div>
    <vw-button disabled>默认按钮</vw-button>
  </div>
</template>
<script>
export default {
}
</script>
```
:::

## 带图标的按钮

可以给按钮添加上图标，且图标位置left，right可供选择，默认left。

::: demo 
```vue
<template>
  <div>
    <vw-button icon="shezhi">默认按钮</vw-button>
    <vw-button icon="good">默认按钮</vw-button>
    <vw-button icon="error">默认按钮</vw-button>
    <vw-button icon="xia" icon-position="right">默认按钮</vw-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}
</script>
<style>

</style>
```
:::

## 加载状态按钮

可以给按钮添加上图标，且图标位置left，right可供选择，默认left。

::: demo 
```vue
<template>
  <div>
    <vw-button :loading="loading" @click="onclick">默认按钮</vw-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    onclick() {
      this.loading = !this.loading
    }
  }
}
</script>
<style>

</style>
```
:::
