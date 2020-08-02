<!--
 * Create by Yee on 2020/8/2 10:44
 -->
<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vw-col',
    props: {
      span: {
        type: [Number, String]
      }
    }
  }
</script>

<style scoped lang="scss">
  .col {
    height: 100px;
    background: #139fe0;
    width: 50%;
    border: 1px solid red;
    $class-prefix: col-;
    /*for循环 */
    @for $n from 1 through 24 {
      /*插值语法*/
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
</style>
