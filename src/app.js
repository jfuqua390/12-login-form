/**
 * This app should do all the stuff needed to start the application
 * That includes finding particular elements and calling/loading other modules
 */
import LoginForm from 'login-form';

function startApp() {

}

export default startApp;

function createFormElement() {
  const formEl = document.createElement(`form`);
  formEl.innerHTML = `
    <input class="login-form__email">
    <input class="login-form__password">
    <div class="login-form__validation-message"></div>
    <button>Save</button>
  `;
  return formEl;
}
