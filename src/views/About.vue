<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import http from '../services/http'
export default {
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
