<template>
  <div>
    <v-col justify="center" align="center" class="logo-container">
      <v-img
        @click="goToMain"
        style="cursor: pointer"
        src="@/assets/logo_main_green.png"
        max-width="400"
      ></v-img>
    </v-col>
  </div>
</template>
<script>
export default {
  methods: {
    goToMain() {
      if (window.location.pathname === '/') {
        this.$router.go('/')
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
<style scoped>
.logo-container {
  margin-top: 50px;
}
</style>
