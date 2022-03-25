export const state = () => ({
  user: null,
  pass: null,
  isAuthorized: false,
  uuid: false
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setPass(state, pass) {
    state.pass = pass
  },
  setUuid(state, uuid) {
    state.uuid = uuid
  },

  authorize(state, authData) {
    state.isAuthorized = authData.username === state.user && authData.password === state.pass
  },

}

export const actions = {
  setUserData(context, uuid) {
    const users = context.rootState.user.users
    if (users) {
      let user = users.find(i => i.login.uuid === uuid)
      if (user) {
        context.commit('setUser', user.login.username)
        context.commit('setPass', user.login.password)
        context.commit('setUuid', uuid)
      }
    }
  },
}
