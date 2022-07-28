import { html } from '../../node_modules/lit-html/lit-html.js';

import * as authService from '../services/authService.js';

const registerTemplate = (submitHandler) => html`
        <section id="register">
            <form @submit=${submitHandler} id="register-form">
                <div class="container">
                    <h1>Register</h1>
                    <label for="username">Username</label>
                    <input id="username" type="text" placeholder="Enter Username" name="username">
                    <label for="email">Email</label>
                    <input id="email" type="text" placeholder="Enter Email" name="email">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <label for="repeatPass">Repeat Password</label>
                    <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                    <div class="gender">
                        <input type="radio" name="gender" id="female" value="female">
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="male" value="male" checked>
                        <label for="male">Male</label>
                    </div>
                    <input type="submit" class="registerbtn button" value="Register">
                    <div class="container signin">
                        <p>Already have an account?<a href="/login">Sign in</a>.</p>
                    </div>
                </div>
            </form>
        </section>
`;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let newUser = {
            email: form.get('email'),
            password: form.get('password'),
            repassword: form.get('repeatPass'),
            gender: form.get('gender'),
        }

        if (newUser.email != '' &&
            newUser.password != '' &&
            newUser.password == newUser.repassword &&
            newUser.gender != '') {

            authService.register(newUser)
                .then(() => {
                    ctx.page.redirect('/catalog');
                })
                .catch(err => {
                    alert(err);
                })
        }
    }
    ctx.render(registerTemplate(submitHandler));
}