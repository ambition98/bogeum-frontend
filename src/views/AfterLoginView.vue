<template>
  <div>
    after login
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: ''
    }
  },
  created() {
    const q = this.$route.query

    if (q.scope.includes('www.googleapis.com')) {
      this.googleLogin(q.code)
    }
  },
  methods: {
    googleLogin(code) {
      const vue = this
      this.$axios.get('/oauth/google?code=' + code)
      .then(function(resp) {
        console.log('ok: ', resp)
        vue.$store.dispatch('setUser', resp.data.dto)
        vue.$router.replace('/')
      })
      .catch(function(resp) {
        alert('잘못된 접근입니다.')
        console.log('err: ', resp)
        vue.$router.replace('/')
      })
    }
  }
}
</script>
