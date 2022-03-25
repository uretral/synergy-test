<template>
  <div>

    <portal to="header-right">
      <button @click="addUser()">Добавить сотрудника</button>
    </portal>

    <section>
      <div>
        <div class="filter">
          <div class="filter-item">
            <input type="text" placeholder="Поиск по ФИО" class="no-border" v-model="fio" @keypress="removeSorting()"/>
            <a class="filter-item_clear" :class="{active : fio !== ''}" href="javascript:" @click="removeSorting(fio = '')"/>
          </div>
          <div class="spacer"></div>
          <div class="filter-item">
            <input type="text" placeholder="Поиск по дате рождения" class="no-border" v-model="birthday" @keypress="removeSorting()"/>
            <a class="filter-item_clear" :class="{active : birthday !== ''}" href="javascript:" @click="removeSorting(birthday = '')"/>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="list">
        <div class="list-thead">
          <template v-for="(userProp,key) in $store.state.user.userProps">
            <div v-if="userProp.show" class="list-thead-cell"
                 :class="[{sort : userProp.hasOwnProperty('sort') && userProp.sort},sortClass(userProp.key)]"
                 :key="`thead-${key}`" v-text="userProp.title" @click="sortIt(userProp)"/>
          </template>
          <div class="list-thead-cell link"> > </div>
        </div>
      </div>
    </section>
    <section  :key="CKey">
      <div class="list" v-if="userList.length">

        <template v-for="(user,key) in userList" >

          <div class="list-tbody" :key="`tbody-${key}`">

            <template v-for="(userProp,entKey) in $store.state.user.userProps">
              <div v-if="userProp.show" class="list-tbody-cell" :key="`cell-${entKey}`" v-text="user[userProp.key]"/>
            </template>

            <div class="list-tbody-cell">
              <nuxt-link :to="{name:'id', params: {id:user.login.uuid}}"> ></nuxt-link>
            </div>

          </div>

        </template>

      </div>

      <div class="list" v-else>
        <div class="list-tbody">
          <div class="list-tbody-cell empty">
            список пуст, добавьте сотрудников...
          </div>
        </div>
      </div>


    </section>
  </div>
</template>

<script>
import Modal from "~/components/staff/Modal";

export default {
  name: 'IndexPage',
  components: {Modal},
  data() {
    return {
      CKey: 0,
      fio: '',
      birthday: '',
      sorting: {
        sortBy: '',
        sortDir: true,
      },
    }
  },

  computed: {
    userList: {
      get() {
        return this.$store.state.user.users.filter((i) =>
          (
            i.name.toLowerCase().includes(this.fio.toLowerCase()) ||
            i.surname.toLowerCase().includes(this.fio.toLowerCase())
          )
          && i.birthday.includes(this.birthday))
      },
      set(sortedList) {
        return sortedList
      }

    },
  },

  methods: {

    addUser() {
      this.$store.dispatch('user/addUser')
      this.removeSorting()
    },

    sortIt(userProp) {
      if (!userProp || userProp.hasOwnProperty('sort') === false || !this.userList.length) {
        return false
      }

      this.sortDirection(userProp)

      this.userList = this.userList.sort(
        this.sorting.sortDir
          ? (a, b) => a[userProp.key].localeCompare(b[userProp.key])
          : (a, b) => b[userProp.key].localeCompare(a[userProp.key])
      )
      this.CKey++
    },

    sortDirection(userProp) {
      if (this.sorting.sortBy === userProp.key) {
        this.sorting.sortDir = !this.sorting.sortDir
      } else {
        this.sorting.sortBy = userProp.key
        this.sorting.sortDir = true
      }
    },

    sortClass(key) {
      return key === this.sorting.sortBy
        ? this.sorting.sortDir ? 'asc' : 'desc'
        : ''
    },

    removeSorting() {
      this.sorting.sortBy = ''
      this.sorting.sortDir = true
    }

  },
  mounted(){
    this.$store.commit('auth/authorize', false)
  }
}
</script>
