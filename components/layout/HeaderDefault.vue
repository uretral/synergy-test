<template>
  <header>
    <div class="header">
      <div class="header-row">
        <div class="header-logo">
          <nuxt-link to="/">
            <img src="@/assets/img/logo.svg" alt="logo"/>
          </nuxt-link>
        </div>
        <div class="header-buttons">
          <portal-target name="header-right"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderDefault"
}
</script>
