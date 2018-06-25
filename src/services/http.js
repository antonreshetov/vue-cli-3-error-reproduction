import axios from 'axios'
import router from '../router'
import Auth from './Auth'

const http = axios.create({
  baseURL: process.env.SERVER_API,
  withCredentials: true,
  headers: {
    Accept: 'application/json'
  }
})

http.interceptors.request.use(
  request => {
    const user = JSON.parse(window.localStorage.getItem('currentUser'))

    if (user !== null) {
      request.headers.Authorization = user.token
    }

    return request
  },
  error => {
    console.error(error.response)
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => {
    if (process.env.NODE_ENV === 'development') {
      if (!response.data.success) {
        console.error('[DEV Response]', response.data)
      } else {
        console.log('[DEV Response]', response.data)
      }
    }
    if (response.data.status === 404) {
      router.push('/404')
    }
    if (response.data.status === 401) {
      router.push('/login')
      Auth.destroyLocalStorage()
    }
    return response
  },
  error => {
    console.error(error.response)
    return Promise.reject(error)
  }
)

export default http
