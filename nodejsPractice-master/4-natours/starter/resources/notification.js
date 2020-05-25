/* eslint-disable */
export const hideNotification = () => {
  let el = document.querySelector('.alert');
  if ( el ) el.parentElement.removeChild(el);
};

export const showNotification = (type, msg) => {
  hideNotification();
  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  setTimeout(hideNotification, 5000);
};

