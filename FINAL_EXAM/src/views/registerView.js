import { html } from '../../node_modules/lit-html/lit-html.js';

import * as authService from '../services/authService.js';

const registerTemplate = (submitHandler) => html`
        <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${submitHandler} class="login-form">
              <input type="text" name="email" id="register-email" placeholder="email" />
              <input type="password" name="password" id="register-password" placeholder="password" />
              <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>
`;

export const registerView = (ctx) => {
  const submitHandler = (e) => {
    e.preventDefault();

    let form = new FormData(e.currentTarget);

    let email = form.get('email');
    let password = form.get('password');
    let rePassword = form.get('re-password');


    if (email != '' && password != '' && password == rePassword) {
      authService.register(email, password)
        .then(() => {
          ctx.page.redirect('/')
        })
    }
  }

  ctx.render(registerTemplate(submitHandler))
}