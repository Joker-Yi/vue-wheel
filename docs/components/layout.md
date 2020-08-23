---
title: Layout 布局
sidebarDepth: 2
---
# Layout 布局
通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局
使用单一分栏创建基础的栅格布局。

::: demo 
```vue
<template>
  <div>
    <vw-row>
      <vw-col span="2"><div class="temp">content</div></vw-col>
      <vw-col span="2"><div class="temp">content</div></vw-col>
      <vw-col span="2"><div class="temp">content</div></vw-col>
      <vw-col span="18"><div class="temp">content</div></vw-col>
    </vw-row>
    <vw-row>
      <vw-col span="6"><div class="temp">content</div></vw-col>
      <vw-col span="6"><div class="temp">content</div></vw-col>
      <vw-col span="6"><div class="temp">content</div></vw-col>
      <vw-col span="6"><div class="temp">content</div></vw-col>
    </vw-row>
  </div>
</template>
<script>
export default {
}
</script>
<style>
    .temp {
      height: 50px;
      background-color: #666666;
      border: 1px saddlebrown solid;
    }
</style>
```
:::

## 分栏间隔

分栏之间存在间隔。

::: demo 
```vue
<template>
  <div>
    <vw-row gutter="10">
      <vw-col span="2"><div class="temp">content</div></vw-col>
      <vw-col span="2"><div class="temp">content</div></vw-col>
      <vw-col span="2"><div class="temp">content</div></vw-col>
      <vw-col span="16"><div class="temp">content</div></vw-col>
    </vw-row>
  </div>
</template>
<script>
export default {
}
</script>
<style>
    .temp {
      height: 50px;
      background-color: #666666;
      border: 1px saddlebrown solid;
    }
</style>
```
:::

## 分栏偏移
支持偏移指定的栏数。

::: demo 
```vue
<template>
  <div>
    <vw-row>
      <vw-col span="6"><div class="temp">content</div></vw-col>
      <vw-col span="6"><div class="temp">content</div></vw-col>
      <vw-col span="4" offset="2"><div class="temp">content</div></vw-col>
      <vw-col span="6"><div class="temp">content</div></vw-col>
    </vw-row>
  </div>
</template>
<script>
export default {
}
</script>
<style>
    .temp {
      height: 50px;
      background-color: #666666;
      border: 1px saddlebrown solid;
    }
</style>
```
:::

## 对齐方式
通过 flex 布局来对分栏进行灵活的对齐。`left right center`

::: demo 
```vue
<template>
  <div>
      <vw-row gutter="20" align="right">
        <vw-col span="4"><div class="temp">content</div></vw-col>
        <vw-col span="18" offset="2"><div class="temp">content</div></vw-col>
      </vw-row>
  </div>
</template>
<script>
export default {
}
</script>
<style>
    .temp {
      height: 50px;
      background-color: #666666;
      border: 1px saddlebrown solid;
    }
</style>
```
:::

## 混合布局
   通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

::: demo 
```vue
<template>
  <div>
    <vw-row>
      <vw-col><div class="temp">content</div></vw-col>
      <vw-col><div class="temp">content</div></vw-col>
      <vw-col><div class="temp">content</div></vw-col>
      <vw-col><div class="temp">content</div></vw-col>
    </vw-row>
    <vw-row>
      <vw-col span="2"><div class="temp">content</div></vw-col>
      <vw-col span="21" offset="1"><div class="temp">content</div></vw-col>
    </vw-row>
    <vw-row gutter="20" align="right">
      <vw-col span="4">
        <div class="temp">4</div>
      </vw-col>
      <vw-col span="18" offset="2">
        <div class="temp">18</div>
      </vw-col>
    </vw-row>
  </div>
</template>
<script>
export default {
}
</script>
<style>
    .temp {
      height: 50px;
      background-color: #666666;
      border: 1px saddlebrown solid;
    }
</style>
```
:::

## 响应式布局
   参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：`phone（默认）,ipad,narrowPc,pc和widePc`。
::: demo 
```vue
<template>
  <div>
    <vw-row>
        <vw-col span="24"
                :ipad="{span:6}"
                :pc="{span:8}"
        >
          <div class="temp"></div>
        </vw-col>
        <vw-col span="24"
                :ipad="{span:6}"
                :pc="{span:8}"
        >
          <div class="temp"></div>
        </vw-col>
        <vw-col span="24"
                :ipad="{span:6}"
                :pc="{span:8}"
        >
          <div class="temp"></div>
        </vw-col>
        <vw-col span="24"
                :ipad="{span:6}"
                :pc="{span:8}"
        >
          <div class="temp"></div>
        </vw-col>
        <vw-col span="24"
                :ipad="{span:6}"
                :pc="{span:8}"
        >
          <div class="temp"></div>
        </vw-col>
        <vw-col span="24"
                :ipad="{span:6}"
                :pc="{span:8}"
        >
          <div class="temp"></div>
        </vw-col>
      </vw-row>
  </div>
</template>
<script>
export default {
}
</script>
<style>
    .temp {
      height: 50px;
      background-color: #666666;
      border: 1px saddlebrown solid;
    }
</style>
```
:::
