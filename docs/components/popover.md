---
title: Popover 气泡弹出层
sidebarDepth: 2
---
# Popover 气泡弹出层
点击元素，弹出气泡层。再次点击非内容区域可隐藏。

## 基本使用
::: demo 
```vue
<template>
  <div>
    <vw-popover position="top">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <button>点我</button>
    </vw-popover>
  </div>
</template>
<script>
export default {

}
</script>
```
:::
## 显示位置
`position`支持 `left` `right` `top` `bottom` 默认 `top`
::: demo 
```vue
<template>
  <div>
    <vw-popover position="top">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <button>点我</button>
    </vw-popover>
    <vw-popover position="right">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <button>点我</button>
    </vw-popover>
    <vw-popover position="bottom">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <button>点我</button>
    </vw-popover>
    <vw-popover position="left">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <button>点我</button>
    </vw-popover>
  </div>
</template>
<script>
export default {

}
</script>
```
:::
## 触发方式
`trigger`支持 `hover` `click` 默认 `click`

::: demo 
```vue
<template>
  <div>
    <vw-popover position="top">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <button>点我</button>
    </vw-popover>
    <vw-popover position="left" trigger="hover">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <button>点我</button>
    </vw-popover>
  </div>
</template>
<script>
export default {

}
</script>
```
:::

## 支持content中关闭
::: demo 
```vue
<template>
  <div>
    <vw-popover position="bottom">
      <template slot="content" slot-scope="{close}">
        <div>popover内容</div>
        <div @click="close">关闭</div>
      </template>
      <button>点我</button>
    </vw-popover>
  </div>
</template>
<script>
export default {

}
</script>
```
:::
