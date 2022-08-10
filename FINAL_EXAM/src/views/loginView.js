import { html } from '../../node_modules/lit-html/lit-html.js';

import * as authService from '../services/authService.js';

const loginTemplate = (submitHandler) => html`
        <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${submitHandler} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let email = form.get('email');
        let password = form.get('password');

        if (email != '' && password != '') {
            authService.login(email, password)
                .then(() => {
                    ctx.page.redirect('/')
                })
        }
    }

    ctx.render(loginTemplate(submitHandler))
}