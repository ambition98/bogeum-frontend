<template>
  <v-container class="login-form-container" fill-height justify-center>
    <v-flex xs8>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          prepend-inner-icon="mdi-email"
          v-model="email"
          :rules="emailRules"
          label="이메일"
          class="input"
          required
        ></v-text-field>

        <v-text-field
          prepend-inner-icon="mdi-lock"
          v-model="password"
          :rules="passwordRules"
          type="password"
          label="비밀번호"
          class="input"
          required
        ></v-text-field>

        <v-btn
          color="success"
          @click="login"
          block
          class="btn"
        >
          로그인
        </v-btn>
      </v-form>
      <router-link to="/signup">
        <v-btn
          color="primary"
          block
          class="btn"
        >
          회원가입
        </v-btn>
      </router-link>
      <a :href="googleRedirectUri">
        <v-btn
          color="primary"
          block
          class="btn"
        >
          구글
        </v-btn>
      </a>
    </v-flex>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      googleRedirectUri: 'https://accounts.google.com/o/oauth2/v2/auth?client_id=257046050302-hhhha682d954b6a52v8ltmf6c3je4vv9.apps.googleusercontent.com&redirect_uri=' + window.location.protocol + '//' + window.location.host + '/afterlogin' + '&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email',
      valid: true,
      email: '',
      password: '',
      emailRules: [
        v => !!v || '필수항목입니다',
        v => /.+@.+\..+/.test(v) || '이메일 형식이 잘못되었습니다'
      ],
      passwordRules: [
        v => !!v || '필수항목입니다'
      ],
      googleCliendId: '257046050302-hhhha682d954b6a52v8ltmf6c3je4vv9.apps.googleusercontent.com'
    }
  },
  methods: {
    async login() {
      const valid = this.$refs.form.validate()
      if (valid) {
        console.log(`email: ${this.email}`)
        console.log(`password: ${this.password}`)
        const resp = await this.$axios.post('/auth/login', {
          email: this.email,
          password: this.password
        })
        console.log(resp)
        this.$store.dispatch('setUser', resp.data.dto)
        // this.$router.go('/')
      }
    }
  }
}
</script>
<style scoped>
.login-form-container {
  max-width: 450px
}
.btn {
  margin-bottom: 5px;
}
</style>
