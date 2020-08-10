<!--
 * Create by Yee on 2020/8/5 22:29
 -->
<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "vw-tabs-pane",
    inject: ['eventBus'],
    data () {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: String | Number,
        required: true
      }
    },
    computed: {
      classes () {
        return {
          active: this.active
        }
      }
    },
    created () {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    }
  }
</script>

<style scoped lang="scss">
  .tabs-pane {
    &.active {
    }
  }
</style>
