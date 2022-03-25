<template>
  <label for="photo" class="form-file">

    <span :class="{fullscreen:fullscreen}" @click="doFullscreen()">
      <i :class="{upload: disabled === false}" :style="showPic()"></i>
    </span>

    <input type="file" id="photo" :disabled="disabled"/>

  </label>
</template>

<script>
export default {
  name: "InputFile",
  props: ['picture','disabled'],
  data() {
    return {
      pic: 'https://randomuser.me/api/portraits/women/72.jpg',
      fullscreen: false,
      showGif: false
    }
  },

  methods: {
    showPic(){
      return this.picture ? `background-image: url('${this.picture}');` : ''
    },
    doFullscreen(){
      if(this.disabled) {
        this.fullscreen = !this.fullscreen
      }
    }
  }
}
</script>
