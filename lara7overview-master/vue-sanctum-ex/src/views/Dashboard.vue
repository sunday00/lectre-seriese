<template>
  <div class="dashboard">
    <h1>This is a Dashboard page</h1>
    <p>logged : {{email}}</p>
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

export default {
  name: 'dashboard',
  data() {
    return {
      email: '',
    };
  },
  mounted() {
    axios.get('/api/user-info').then((response) => {
      this.email = response.data.email.address;
      this.$emit('isLogged', true);
    }).catch(() => {
      this.$router.push('login');
    });
  },
};
</script>
