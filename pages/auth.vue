<template>

  <section class="login">

    <portal to="header-right">
      <h1>Залогиниться</h1>
    </portal>

    <div>

      <form @submit.prevent class="login-form">

        <InputText :label="`Логин ${userLogin}`" :placeholder="`введите логин`" v-model="user.username"/>
        <InputText :label="`Пароль ${userPass}`" :placeholder="`введите пароль`" v-model="user.password"/>

        <div class="login-form_btn">
          <button class="warn" @click="insertData()">Заполнить</button>
          <button @click="login" :disabled="!user.username || !user.password">Войти</button>
        </div>

      </form>

    </div>

  </section>

</template>

<script>
import InputText from "@/components/form/InputText";

export default {
  name: "auth",
  components: {InputText},
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    userLogin: {
      get() {
        return this.$store.state.auth.user
      }
    },
    userPass: {
      get() {
        return this.$store.state.auth.pass
      }
    },
    uuid: {
      get() {
        return this.$store.state.auth.uuid
      }
    },
    isAuthorized: {
      get() {
        return this.$store.state.auth.isAuthorized
      },
      set(value) {
        this.$store.commit('auth/authorize', value)
      }
    }
  },
  watch: {
    isAuthorized: function (n) {
      if (n)
        this.$router.push({name: 'id', params: {id: this.uuid}})
    }
  },
  methods: {
    login() {
      this.$store.commit('auth/authorize', {
        username: this.user.username,
        password: this.user.password
      })
    },
    insertData() {
      this.$set(this.user, 'username', this.userLogin)
      this.$set(this.user, 'password', this.userPass)
    },
  },
}
</script>
