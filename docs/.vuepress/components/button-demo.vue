<!--
 * Create by Yee on 2020/8/19 10:51
 -->
<template>
  <div>
    <vw-button>默认按钮</vw-button>
    <vw-button icon="shezhi">默认按钮</vw-button>
    <vw-button :loading="true">默认按钮</vw-button>
    <vw-button disabled>默认按钮</vw-button>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>

<script>
  import VwButton from '../../../src/button'
  export default {
    components: {
      VwButton
    },
    data () {
      return {
        content: `
        <vw-button>默认按钮</vw-button>
        <vw-button icon="shezhi">默认按钮</vw-button>
        <vw-button :loading="true">默认按钮</vw-button>
        <vw-button disabled>默认按钮</vw-button>
      `
      }
    },
    mounted () {
      // import('../../../src/button').then(module => {
      //   this.dynamicComponent = module.default
      // })
    }
  }
</script>

<style scoped>

</style>
