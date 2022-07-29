import {html} from '../../node_modules/lit-html/lit-html.js';

const userView = html`
        <li><a href="/profile">Profile</a></li>
        <li><a href="/create">Create Event</a></li>
        <li><a href="/logout">Logout</a></li>
`;

const guestView = html`
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
`;

export const navigationView = (ctx) => html`
    <nav>
    <a href="/">Theater</a>
        <ul>
            ${ctx.user
                ? userView
                : guestView
            }
        </ul>
    </nav>
`;