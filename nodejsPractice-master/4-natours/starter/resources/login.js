/* eslint-disable */

import axios from 'axios';
import {showNotification} from './notification.js';

export const login = (email, pw) => {
  axios.post('/api/v1/auth/sign-in', {
      email: email,
      password: pw
  }).then(function(result){
    console.log(result.data);
    location.href = '/';
  }).catch(function (err) {
    showNotification('error', err.response.data.message);
    console.log(err.response.data.message);
  });
};
