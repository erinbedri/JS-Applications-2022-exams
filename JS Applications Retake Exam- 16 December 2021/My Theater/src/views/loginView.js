import { html } from '../../node_modules/lit-html/lit-html.js';

import * as authService from '../services/authService.js';

const loginTemplate = (loginHandler) => html`
        <section id="loginaPage">
            <form @submit=${loginHandler} class="loginForm">
                <h2>Login</h2>
                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </form>
        </section>
`;

export const loginView = (ctx) => {
    const loginHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);
        let email = form.get('email');
        let password = form.get('password');

        if (email != '' && password != '') {
            authService.login(email, password)
                .then(() => {
                    ctx.page.redirect('/');
                })
                .catch(err => {
                    alert(err);
                })
        }
    }

    ctx.render(loginTemplate(loginHandler));
}