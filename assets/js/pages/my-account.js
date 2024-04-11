window.addEventListener('DOMContentLoaded', function () {
  // toggles
  const toggleLogin = document.querySelector('.changer--login');
  const toggleRegister = document.querySelector('.changer--register');

  // forms
  const login = document.querySelector('.wrapper__login');
  const register = document.querySelector('.wrapper__register');

  // callbacks
  function accountCB() {
    login.classList.toggle('is-active');
    register.classList.toggle('is-active');
  }

  toggleLogin.addEventListener('click', accountCB);
  toggleRegister.addEventListener('click', accountCB);
});
