<!--
 * Create by Yee on 2020/8/21 10:45
 -->
<template>
  <div class="popover" @click="handleClick">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "vw-popover",
    data () {
      return {visible: false}
    },
    methods: {
      handleClick () {
        this.visible = !this.visible
      }
    }
  }
</script>

<style scoped lang="scss">
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper {
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
  }
</style>
