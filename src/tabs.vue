<!--
 * Create by Yee on 2020/8/5 22:29
 -->
<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "vw-tabs",
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
  }
</script>

<style scoped>

</style>
