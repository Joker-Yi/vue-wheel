---
title: Tabs 标签页
sidebarDepth: 2
---
# Tabs 标签页
分隔内容上有关联但属于不同类别的数据集合。

## 基础用法
基础的、简洁的标签页。
::: demo 
```vue
<template>
  <div>
      <vw-tabs :selected.sync="selectedTab">
    <!--    完全等价上面写法-->
    <!--  <vw-tabs :selected="selectedTab" @update:selected="selectedTab = $event">-->
        <vw-tabs-head>
          <vw-tabs-item name="woman">
            美女
          </vw-tabs-item>
          <vw-tabs-item name="finance">
            财经
          </vw-tabs-item>
          <vw-tabs-item name="sports">
            体育
          </vw-tabs-item>
        </vw-tabs-head>
        <vw-tabs-body>
          <vw-tabs-pane name="woman">
            美女相关资讯
          </vw-tabs-pane>
          <vw-tabs-pane name="finance">
            财经相关资讯
          </vw-tabs-pane>
          <vw-tabs-pane name="sports">
            体育相关资讯
          </vw-tabs-pane>
        </vw-tabs-body>
      </vw-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedTab: 'woman'
    }
  }
}
</script>
<style>

</style>
```
:::

## 自定义标签页

::: demo 
```vue
<template>
  <div>
      <vw-tabs :selected.sync="selectedTab">
        <vw-tabs-head>
          <vw-tabs-item name="woman">
             <vw-icon name="shezhi"></vw-icon>美女
          </vw-tabs-item>
          <vw-tabs-item name="finance">
            <vw-icon name="good"></vw-icon>财经
          </vw-tabs-item>
          <vw-tabs-item name="sports">
            <vw-icon name="xaizai"></vw-icon>体育
          </vw-tabs-item>
        </vw-tabs-head>
        <vw-tabs-body>
          <vw-tabs-pane name="woman">
            美女相关资讯
          </vw-tabs-pane>
          <vw-tabs-pane name="finance">
            财经相关资讯
          </vw-tabs-pane>
          <vw-tabs-pane name="sports">
            体育相关资讯
          </vw-tabs-pane>
        </vw-tabs-body>
      </vw-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedTab: 'woman'
    }
  }
}
</script>
<style>

</style>
```
:::

## 禁用标签页

::: demo 
```vue
<template>
  <div>
  <vw-tabs :selected.sync="selectedTab">
    <vw-tabs-head>
      <vw-tabs-item name="woman" disabled>
        美女
      </vw-tabs-item>
      <vw-tabs-item name="finance">
        财经
      </vw-tabs-item>
      <vw-tabs-item name="sports">
        体育
      </vw-tabs-item>
    </vw-tabs-head>
    <vw-tabs-body>
      <vw-tabs-pane name="woman">
        美女相关资讯
      </vw-tabs-pane>
      <vw-tabs-pane name="finance">
        财经相关资讯
      </vw-tabs-pane>
      <vw-tabs-pane name="sports">
        体育相关资讯
      </vw-tabs-pane>
    </vw-tabs-body>
  </vw-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedTab: 'woman'
    }
  }
}
</script>
<style>

</style>
```
:::

## 标签页头部自定义插槽

::: demo 
```vue
<template>
  <div>
  <vw-tabs :selected.sync="selectedTab">
    <vw-tabs-head>
      <template slot="actions">
        <button>设置</button>
      </template>
      <vw-tabs-item name="woman">
        美女
      </vw-tabs-item>
      <vw-tabs-item name="finance">
        财经
      </vw-tabs-item>
      <vw-tabs-item name="sports">
        体育
      </vw-tabs-item>
    </vw-tabs-head>
    <vw-tabs-body>
      <vw-tabs-pane name="woman">
        美女相关资讯
      </vw-tabs-pane>
      <vw-tabs-pane name="finance">
        财经相关资讯
      </vw-tabs-pane>
      <vw-tabs-pane name="sports">
        体育相关资讯
      </vw-tabs-pane>
    </vw-tabs-body>
  </vw-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedTab: 'woman'
    }
  }
}
</script>
<style>

</style>
```
:::
