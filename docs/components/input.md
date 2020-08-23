---
title: Input 输入框
sidebarDepth: 2
---
# Input 输入框

通过鼠标或键盘输入字符。

## 基础用法

::: demo 
```vue
<template>
  <div>
    <vw-input></vw-input>
    <vw-input value="Yee"></vw-input>
  </div>
</template>
<script>
export default {
}
</script>
```
:::

## 禁用状态

::: demo 
```vue
<template>
  <div>
    <vw-input value="Yee" disabled></vw-input>
  </div>
</template>
<script>
export default {
}
</script>
```
:::

## 只读状态

::: demo 
```vue
<template>
  <div>
    <vw-input value="Yee" readonly></vw-input>
  </div>
</template>
<script>
export default {
}
</script>
```
:::

## 输入错误状态及提示文字

::: demo 
```vue
<template>
  <div>
    <vw-input value="" error="用户名不能少于2个字符"></vw-input>
  </div>
</template>
<script>
export default {
}
</script>
```
:::

## 双向绑定

::: demo 
```vue
<template>
  <div>
        <vw-input v-model="message"></vw-input>
        <span>{{message}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello'    
    }     
  } 
}
</script>
```
:::
