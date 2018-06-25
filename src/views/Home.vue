<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import http from '../services/http'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const { data } = await http.get('https://jsonplaceholder.typicode.com/users')
      this.users = data
    }
  }
}
</script>
