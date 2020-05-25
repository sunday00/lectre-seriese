/* eslint-disable */

import axios from 'axios';
import {showNotification} from './notification.js';

export const updateProfile = (option) => {
  var url;
  var data = {};
  if( option.target === 'base' ) {
    url = '/api/v1/user/update';
    data = new FormData();
    data.set('email', option.email);
    data.append('name', option.name);
    data.append('photo', option.photo);
  } else if ( option.target === 'password' ) {
    url = '/api/v1/auth/reset-password';
    data.password = option.password;
    data.newPassword = option.newPassword;
    data.newPasswordConfirm = option.newPasswordConfirm;
  }
  axios.patch(url, data).then(function(result){
    showNotification('success', 'Your info changed successfully');
    // location.href = '/me';
    if ( option.target === 'base' ) {
      document.querySelector('#email').value = option.email;
      document.querySelector('#name').value = option.name;
      setTimeout(()=>{
        document.querySelector('img.form__user-photo').src = `/img/users/${result.data.user.photo}`;
      }, 1500);
    } else if (option.target === 'password'){
      document.querySelector('#password').value = '';
      document.querySelector('#new-password').value = '';
      document.querySelector('#new-password-confirm').value = '';
    }
  }).catch(function (err) {
    showNotification('error', err.response.data.message);
    console.log(err.response.data.message);
  });
}