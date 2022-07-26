import { html } from '../../node_modules/lit-html/lit-html.js';

import * as authService from '../middleware/authService.js';

const loginTemplate = (submitHandler) => html`
        <section id="login-page" class="auth">
            <form @submit=${submitHandler} id="login">
                <h1 class="title">Login</h1>

                <article class="input-group">
                    <label for="login-email">Email: </label>
                    <input type="email" id="login-email" name="email">
                </article>

                <article class="input-group">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password">
                </article>

                <input type="submit" class="btn submit-btn" value="Log In">
            </form>
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
                    ctx.page.redirect('/');
                })
                .catch(err => {
                    alert(err);
                })
        }
    } 
    ctx.render(loginTemplate(submitHandler));
}