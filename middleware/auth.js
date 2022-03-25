
export default function({ redirect, store, route }) {
  store.dispatch('auth/setUserData', route.params.id)
  const isAuthorized = store.state.auth.isAuthorized ? true : false
  if (!isAuthorized) {
    redirect({ name: 'auth' })
  }
}
