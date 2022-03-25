<template>

  <div class="modal" v-if="open">

    <div class="modal-frame" >
      <button class="modal-close" @click="open = !open"/>

      <div class="modal-body">

        <div class="modal-header" v-if="header">
          <h2 v-if="heading" v-html="heading"></h2>
          <slot name="modal-header"></slot>
        </div>

        <div class="modal-content" v-html="content">
          <slot name="modal-content"></slot>
        </div>

        <div class="modal-footer" v-if="footer">
          <slot name="modal-footer"></slot>
        </div>

      </div>

    </div>

  </div>

</template>
<script>
export default {
  name: "Modal",
  props: {
    outside: {
      default: true,
      type: Boolean
    },
    footer: {
      default: false,
      type: Boolean
    },
    header: {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {
      open: false,
      position: 'top',
      heading: '',
      content: '',
      isNotice: false
    }
  },
  mounted() {
    this.$nuxt.$on('modal', (payload) => {
      this.open = payload
    })
    this.$nuxt.$on('notice', (payload) => {
      this.isNotice = true
      this.open = payload.open
      this.heading = `<h2>${payload.heading}</h2>`
      this.content = payload.content
    })
  }
}
</script>

