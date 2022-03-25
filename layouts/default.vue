<template>
  <div class="top">

    <HeaderDefault/>

    <main>
      <Nuxt/>
    </main>

    <FooterDefault/>
    <Modal/>
  </div>

</template>

<script>
import HeaderDefault from "~/components/layout/HeaderDefault";
import FooterDefault from "~/components/layout/FooterDefault";
import Modal from "@/components/staff/Modal";
export default {
  name: "default",
  components: {FooterDefault, HeaderDefault, Modal}
}
</script>
