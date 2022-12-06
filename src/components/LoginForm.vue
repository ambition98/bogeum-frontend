<template>
  <v-container style="max-width: 450px" fill-height justify-center>
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
          label="email"
          class="input"
          required
        ></v-text-field>

        <v-text-field
          prepend-inner-icon="mdi-lock"
          v-model="password"
          :rules="passwordRules"
          type="password"
          label="password"
          class="input"
          required
        ></v-text-field>

        <v-btn
          color="success"
          @click="login"
          block
        >
          로그인
        </v-btn>
      </v-form>
    </v-flex>
  </v-container>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      valid: true,
      email: '',
      password: '',
      emailRules: [
        v => !!v || '필수항목입니다',
        v => /.+@.+\..+/.test(v) || '이메일 형식이 잘못되었습니다'
      ],
      passwordRules: [
        v => !!v || '필수항목입니다.'
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    login () {
      const valid = this.$refs.form.validate()
      if (valid) {
        // 로그인 시도
      }
    }
  }
}
</script>
<style scoped>
</style>
