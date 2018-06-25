export default {
  setLocalStorage (data) {
    window.localStorage.setItem('currentUser', JSON.stringify(data))
  },
  destroyLocalStorage () {
    window.localStorage.removeItem('currentUser')
  },
  getLocalStorage () {
    let data = JSON.parse(window.localStorage.getItem('currentUser'))
    return data ? true : null
  },
  getUser () {
    let data = JSON.parse(window.localStorage.getItem('currentUser'))
    return data.data
  },
  isAuth () {
    return !!this.getLocalStorage()
  }
}
