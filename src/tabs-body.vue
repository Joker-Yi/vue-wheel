<!--
 * Create by Yee on 2020/8/5 22:29
 -->
<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "vw-tabs-body",
    inject: ['eventBus'],
  }
</script>

<style scoped>

</style>
