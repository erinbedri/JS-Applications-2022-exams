import {html} from '../../node_modules/lit-html/lit-html.js';

const userView = html`
            <div id="user">
                <a href="/catalog">My Posts</a>
                <a href="/create">Create Post</a>
                <a href="/logout">Logout</a>
            </div>
`;

const guestView = html`
            <div id="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
`;

export const navigationView = (ctx) => html`
            <h1><a href="/">Orphelp</a></h1>

            <nav>
                <a href="/">Dashboard</a>

                ${ctx.user
                    ? userView
                    : guestView
                }

            </nav>
`;