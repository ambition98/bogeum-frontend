<template>
  <div>
    <v-col justify="center" align="center" class="logo-container">
      <v-img
        src="@/assets/logo_main_green.png"
        max-width="400"
      ></v-img>
    </v-col>
    <LoginForm />
    <BogeumSearch />
  </div>
</template>

<script>
  import BogeumSearch from '@/components/BogeumSearch.vue'
  import LoginForm from '@/components/LoginForm.vue'
  export default {
    name: 'Home',
    components: {
      BogeumSearch,
      LoginForm
    }
  }
</script>
<style scoped>
.logo-container {
  margin-top: 50px;
}
</style>
