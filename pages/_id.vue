<template>
  <section class="user">

    <portal to="header-right">
      <button :class="{warn : disabled }" @click="notice()"
              v-text="disabled ? 'Редактировать карточку': 'Сохранить карточку'"
      ></button>
    </portal>

    <div v-if="user">
      <div class="user-form">
        <div class="user-form_left">

          <template v-for="userProp in $store.state.user.userProps">

            <InputText v-if="userProp.show"
                       :label="userProp.title"
                       :placeholder="`введите ${userProp.title}`"
                       :disabled="disabled"
                       :value="user[userProp.key]"
                       @focusout="updateUserProp($event,userProp.key)"
            />

          </template>

        </div>

        <div class="user-form_right">
          <InputFile label="Фото" name="name" placeholder="введите имя" :picture="user.picture" :disabled="disabled"/>
        </div>


      </div>

    </div>

  </section>
</template>

<script>
import InputText from "~/components/form/InputText";
import InputFile from "~/components/form/InputFile";

export default {
  middleware: 'auth',
  name: "user_id",
  components: {InputText, InputFile},
  data() {
    return {
      disabled: true,
    }
  },
  computed: {
    user: {
      get() {
        return this.$store.state.user.user
      },
      async set(uuid){
        await this.$store.dispatch("user/getUser", uuid)
      }
    },
  },
  methods: {
    updateUserProp(val, prop) {
      this.$store.commit('user/updateUserProperty', {val, prop})
    },

    notice() {
      this.disabled = !this.disabled

      if (!this.disabled){ return false}

        this.$nuxt.$emit('notice', {
          open: true,
          heading: 'Фейковое сохранение',
          content: '<p>Эмуляция сохранения, на этом этапе нет задачи сохранять, изменённые данные уже в store, вместо модалки мог бы быть плагин уведомления</p>',
        })
    },
  },


  async mounted() {
    this.user = this.$route.params['id']
    // await this.$store.dispatch("user/getUser", this.$route.params['id'])
  }
}
</script>
