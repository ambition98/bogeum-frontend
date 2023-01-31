<template>
  <div>
    <v-btn @click="test">User</v-btn>
    <v-btn @click="test2">Anonymous</v-btn>
    <v-btn @click="postTest">Post Test</v-btn>
    <v-btn @click="logout">logout</v-btn>
    <MainLogo />
    <BogeumSearch />
    <div v-if="$store.getters.getUser">
      로그인됨
      {{ $store.getters.getUser }}
    </div>
    <LoginForm v-else />
  </div>
</template>

<script>
  import BogeumSearch from '@/components/BogeumSearch.vue'
  import LoginForm from '@/components/LoginForm.vue'
  import MainLogo from '@/components/MainLogo.vue'

  export default {
    components: {
      MainLogo,
      BogeumSearch,
      LoginForm
    },
    created() {
      if (this.$store.getters.getUser) {
        // this.$callUserApi(function() {})
        this.$axios.get('/user/verify')
        .then(res => {
          console.log(res)
        })
        .catch(res => {
          console.log(res)
        })
      }
    },
    methods: {
      test() {
        this.$axios.get('/user/test')
      },
      test2() {
        this.$axios.get('/test')
      },
      postTest() {
        this.$axios.post('/test')
      },
      logout() {
        this.$logout(this)
      }
    }
  }
</script>
