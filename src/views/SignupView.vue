<template>
  <div>
    <MainLogo />
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
          <div v-if="emailDuplicate">이미 사용중인 이메일입니다</div>

          <v-text-field
            prepend-inner-icon="mdi-lock"
            v-model="password"
            :rules="passwordRules"
            type="password"
            label="비밀번호"
            class="input"
            required
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-lock"
            v-model="repeatPw"
            :rules="repeatPwRules"
            type="password"
            label="비밀번호 재입력"
            class="input"
            required
          ></v-text-field>

          <v-btn
            color="primary"
            @click="signup"
            block
            class="btn"
          >
            회원가입
          </v-btn>
        </v-form>
      </v-flex>
    </v-container>
  </div>
</template>
<script>
import MainLogo from '@/components/MainLogo.vue'

export default {
  components: {
    MainLogo
  },
  data() {
    return {
      valid: true,
      email: '',
      password: '',
      repeatPw: '',
      emailDuplicate: false,
      emailRules: [
        v => !!v || '필수항목입니다',
        v => /.+@.+\..+/.test(v) || '이메일 형식이 잘못되었습니다'
      ],
      passwordRules: [
        v => !!v || '필수항목입니다',
        v => !/^(?=.*[^a-zA-Z\d@$!%*#?&]j).{1,}$/.test(v) || '특수문자는 @ $ ! % * # ? & 만 가능합니다',
        v => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(v) || '비밀번호는 최소 8자, 최소 하나의 문자, 숫자, 특수문자가 포함되어야 합니다'
      ],
      repeatPwRules: [
        v => !!v || '필수항목입니다',
        v => v === this.password || '비밀번호가 일치하지 않습니다'
      ]
    }
  },
  methods: {
    async signup() {
      if (!this.$refs.form.validate()) {
        console.log('invalid')
        return
      }
      await this.checkDuplicate()
      if (this.emailDuplicate) {
        console.log('duplicated')
        return
      }
      try {
        const resp = await this.$axios.post('/auth/signup', {
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setUser', resp.data.dto)
        this.$router.replace('/')
      } catch (err) {
        alert('잘못된 접근입니다.')
        this.$router.replace('/')
      }
    },
    async checkDuplicate() {
      try {
        const res = await this.$axios(`/auth/exists?email=${this.email}`)
        console.log(res)
        this.emailDuplicate = false
      } catch (err) {
        this.emailDuplicate = true
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
