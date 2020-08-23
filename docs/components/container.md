---
title: Container 布局容器
sidebarDepth: 2
---
# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<vw-layout>`：外层容器。当子元素中包含 `<el-header>` 或 `<el-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<vw-header>`：顶栏容器。

`<vw-sider>`：侧边栏容器。

`<vw-content>`：主要区域容器。

`<vw-footer>`：底栏容器。

## 常见页面布局

::: demo 
```vue
<template>
  <div>
      <vw-layout>
        <vw-sider class="sider">sider</vw-sider>
        <vw-layout>
          <vw-header class="header">header</vw-header>
          <vw-content class="content">content</vw-content>
          <vw-footer class="footers">footer</vw-footer>
        </vw-layout>
      </vw-layout>

      <vw-layout>
        <vw-sider class="sider">sider</vw-sider>
        <vw-layout>
          <vw-header class="header">header</vw-header>
          <vw-content class="content">content</vw-content>
        </vw-layout>
      </vw-layout>

      <vw-layout>
        <vw-header class="header">header</vw-header>  
        <vw-layout>
          <vw-sider class="sider">sider</vw-sider>
          <vw-content class="content">content</vw-content>
        </vw-layout>
        <vw-footer class="footers">footer</vw-footer>
      </vw-layout>

      <vw-layout>
        <vw-header class="header">header</vw-header>  
        <vw-layout>
          <vw-sider class="sider">sider</vw-sider>
          <vw-content class="content">content</vw-content>
        </vw-layout>
      </vw-layout>

      <vw-layout>
        <vw-header class="header">header</vw-header>  
        <vw-layout>
          <vw-content class="content">content</vw-content>
        </vw-layout>
        <vw-footer class="footers">footer</vw-footer>
      </vw-layout>

      <vw-layout>
        <vw-header class="header">header</vw-header>  
        <vw-layout>
          <vw-content class="content">content</vw-content>
        </vw-layout>
      </vw-layout>
  </div>
</template>
<script>
export default {
}
</script>
<style>
  .header,.footers {
    height: 50px;
    background:#555;
  }
  .content {
    height: 200px;
    background:#ccc;
  }
  .sider {
    background: #888;
    width: 50px;
  } 
</style>
```
:::
