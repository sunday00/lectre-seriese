<template>
  <div class="login">
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

export default {
  mounted() {
    axios.post('/logout').then(() => {
      this.$emit('isLogged', false);
      this.$router.push('login');
    });
  },
};
</script>

<style>

</style>
