<!--
 * Create by Yee on 2020/8/2 10:43
 -->
<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vw-row'
  }
</script>

<style scoped lang="scss">
  .row{
    display: flex;
  }
</style>
