import {html} from '../../node_modules/lit-html/lit-html.js';

const userView = (email) => html`
            <div class="user">
                <a href="/create">Create Meme</a>
                <div class="profile">
                    <span>Welcome, ${email}</span>
                    <a href="/profile">My Profile</a>
                    <a href="/logout">Logout</a>
                </div>
            </div>
`;

const guestView = html`
            <div class="guest">
                <div class="profile">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                <a class="active" href="/">Home Page</a>
            </div>
`;

export const navigationView = (ctx) => html`
        <nav>
            <a href="/catalog">All Memes</a>

                ${ctx.user
                    ? userView(ctx.user.email)
                    : guestView
                }

        </nav>
`;