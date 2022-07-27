import {html} from '../../node_modules/lit-html/lit-html.js';

const userView = html`
            <div id="profile">
                <a>Welcome username</a>
                <a href="/mycatalog">My Listings</a>
                <a href="/create">Create Listing</a>
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
            <nav>
                <a class="active" href="/">Home</a>
                <a href="/catalog">All Listings</a>
                <a href="/search">By Year</a>

                ${ctx.user
                    ? userView
                    : guestView
                }

            </nav>
`;