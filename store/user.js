
const userConverter = (state, user) => {
  return state.userProps.reduce((obj, i) => {
    obj[i.key] = i.getValue(user)
    return obj
  }, {})
}

export const state = () => ({
  users: [],
  user: {},
  userProps: [
    {
      title: 'Имя',
      key: 'name',
      show: true,
      sort: true,
      getValue: (data) => data.hasOwnProperty('name') && data.name.hasOwnProperty('first') ? data.name.first : ''
    },
    {
      title: 'Фамилия',
      key: 'surname',
      show: true,
      sort: true,
      getValue: (data) => data.hasOwnProperty('name') && data.name.hasOwnProperty('last') ? data.name.last : ''
    },
    {
      title: 'Страна',
      key: 'country',
      show: true,
      getValue: (data) => data.hasOwnProperty('location') && data.location.hasOwnProperty('country') ? data.location.country : ''
    },
    {
      title: 'Телефон',
      key: 'phone',
      show: true,
      getValue: (data) => data.hasOwnProperty('phone') ? data.phone : ''
    },
    {
      title: 'Email',
      key: 'email',
      show: true,
      getValue: (data) => data.hasOwnProperty('email') ? data.email : ''
    }, {
      title: 'День рождения',
      key: 'birthday',
      show: true,
      sort: true,
      getValue: (data) => data.hasOwnProperty('dob') && data.dob.hasOwnProperty('date') ? data.dob.date.substring(0, 10) : ''
    },
    {
      title: 'Login data',
      key: 'login',
      show: false,
      getValue: (data) => data.hasOwnProperty('login') ? data.login : ''
    },
    {
      title: 'Изображения',
      key: 'picture',
      show: false,
      getValue: (data) => data.hasOwnProperty('picture') && data.picture.hasOwnProperty('large') ? data.picture.large : ''
    }
  ]
})

export const mutations = {

  addUser(state, users) {
    users.results.forEach(item => state.users.push(userConverter(state, item)))
  },

  setUser(state, user) {
    state.user = userConverter(state, user.results[0])
  },

  updateUser(state, user) {
    state.user = user
  },

  updateUserProperty(state, payload) {
    if(state.user.hasOwnProperty(payload.prop)) {
      state.user[payload.prop] = payload.val
    }
  }
}

export const actions = {

  async addUser(context) {
    context.commit("addUser", await this.$axios.get('/?results=2'))
  },

  async getUser(context, uuid) {
    context.commit("setUser", await this.$axios.get('/?login.uuidw=' + uuid))
  },

}



