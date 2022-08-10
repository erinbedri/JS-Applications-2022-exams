import {html} from '../../node_modules/lit-html/lit-html.js';

const userView = (user) => html`
            <div class="user">
                <a href="/create">Create Offer</a>
                <a href="/logout">Logout</a>
            </div>
`;

const guestView = html`
            <div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
`;

export const navigationView = (ctx) => html`
            <a id="logo" href="/"><img id="logo-img" src="./images/logo.jpg" alt=""/></a>

            <nav>
                <div>
                    <a href="/catalog">Dashboard</a>
                </div>

                ${ctx.user
                    ? userView(ctx.user)
                    : guestView
                }

            </nav>
`;
