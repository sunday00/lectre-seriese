/* eslint-disable */
import axios from 'axios';
import {showNotification} from "./notification";

let stripe;
if (typeof Stripe == 'function'){
  stripe = Stripe(`pk_test_WhsIgMfhu0XSfmTkVgGEHTPt009i90K0An`);
}

export const bookTour = (tourId) => {
  axios.get(`/api/v1/bookings/check-session/${tourId}`)
    .then((result) => {
    const session = result.data.session;
    stripe.redirectToCheckout({
      sessionId: session.id
    });
  }).catch(function (err) {
    showNotification('error', err.response.data.message);
    console.log(err.response.data.message);
  });
}
