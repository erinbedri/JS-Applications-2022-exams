import { html } from '../../node_modules/lit-html/lit-html.js';

import * as authService from '../middleware/authService.js';

const loginTemplate = (submitHandler) => html`
        <section id="login">
            <div class="container">
                <form @submit=${submitHandler} id="login-form" action="#" method="post">
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>
`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);
        let username = form.get('username').trim();
        let password = form.get('password').trim();

        if (username != '' && password != '') {
            authService.login(username, password)
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