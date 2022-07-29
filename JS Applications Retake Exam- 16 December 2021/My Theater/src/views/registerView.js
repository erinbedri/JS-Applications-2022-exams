import { html } from '../../node_modules/lit-html/lit-html.js';

import * as authService from '../services/authService.js';

const registerTemplate = (registerHandler) => html`
        <section id="registerPage">
            <form @submit=${registerHandler} class="registerForm">
                <h2>Register</h2>
                <div class="on-dark">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div class="on-dark">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <div class="on-dark">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Register</button>

                <p class="field">
                    <span>If you have profile click <a href="/login">here</a></span>
                </p>
            </form>
        </section>
`;

export const registerView = (ctx) => {
    const registerHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);
        let email = form.get('email');
        let password = form.get('password');
        let repassword = form.get('repeatPassword');

        if (email != '' && password != '' && password === repassword) {
            authService.register(email, password)
                .then(() => {
                    ctx.page.redirect('/');
                })
                .catch(err => {
                    alert(err);
                })
        }
    }

    ctx.render(registerTemplate(registerHandler));
}