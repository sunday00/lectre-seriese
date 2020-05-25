/* eslint-disable */
import '@babel/polyfill';
import {login} from "./login";
import {updateProfile} from "./profile";
import {displayMap} from "./mapbox";
import {bookTour} from "./book";

if ( document.querySelector('.form') ){

  document.querySelectorAll('.form').forEach(function(el){
    el.addEventListener('submit', function (e) {

      e.preventDefault();

      if ( document.querySelector('.login-form .form') ){

        var email = document.querySelector('#email').value;
        var pw = document.querySelector('#password').value;
        login(email, pw);

      } else if( document.querySelector('form.form.form-user-data') ){
        if( e.target.className.indexOf('form-user-data') > 0){
          updateProfile({
            target: 'base',
            email: document.querySelector('#email').value,
            name: document.querySelector('#name').value,
            photo: document.querySelector('#photo').files[0]
          });
        } else if ( e.target.className.indexOf('form-user-settings') > 0){
          updateProfile({
            target: 'password',
            password: document.querySelector('#password').value,
            newPassword: document.querySelector('#new-password').value,
            newPasswordConfirm: document.querySelector('#new-password-confirm').value
          });
          document.querySelector('form.form.form-user-settings button').focus();
        }

      }

    });
  });

}

if( document.getElementById('map') ) {

  var locations = JSON.parse(document.getElementById('map').dataset.locations);
  displayMap(locations);

}

if( document.getElementById('book-tour') ){
  document.getElementById('book-tour').addEventListener('click', (e) => {
    e.preventDefault();
    e.target.textContent = 'Processing...';
    bookTour(e.target.dataset.tourId);
  })
}