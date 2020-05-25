<template>
  <div class="login">
    <h1>This is a login page</h1>
    <form method="POST" @submit.prevent="login">
      <div>
        <input type="email" name="email" placeholder="email" />
      </div>
      <div>
        <input type="password" name="password" placeholder="password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

export default {
  name: 'login',
  methods: {
    login() {
      axios.get('/sanctum/csrf-cookie').then(() => {
        axios.post('/login', {
          email: 'kind65505256@gmail.com',
          password: 'p88nGT5aq7AwZKV',
        }).then((response) => {
          this.$router.push('dashboard');
        });
      });
    },
  },
};
</script>

<style>

</style>
