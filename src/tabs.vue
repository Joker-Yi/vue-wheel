<!--
 * Create by Yee on 2020/8/5 22:29
 -->
<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

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
    data () {
      return {
        eventBus: new Vue()
      }
    },
    provide () {
      return {
        eventBus: this.eventBus
      }
    },
    mounted () {
      // this.$emit('update:selected', '这是 this $emit 出来的数据')
      this.eventBus.$emit('update:selected', this.selected)
    }
  }
</script>

<style scoped>

</style>
