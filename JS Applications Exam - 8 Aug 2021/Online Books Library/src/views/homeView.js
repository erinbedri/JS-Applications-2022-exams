import { html } from '../../node_modules/lit-html/lit-html.js';

import * as bookService from '../middleware/bookService.js';

const bookTemplate = (book) => html`
                <li class="otherBooks">
                    <h3>A Court of Thorns and Roses</h3>
                    <p>Type: Fiction</p>
                    <p class="img"><img src=${book.imageUrl}></p>
                    <a class="button" href="/details/${book._id}">Details</a>
                </li>
`;

const noBookTemplate = () => html`
            <p class="no-books">No books in database!</p>
`;

const homeTemplate = (books) => html`
        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>

            ${books.length > 1
                ? html`
                    <ul class="other-books-list">

                    ${books.map(b => bookTemplate(b))}

                    </ul>
                `
                : noBookTemplate()
            }
        </section>
`;

export const homeView = (ctx) => {
    bookService.getAll()
        .then(books => {
            ctx.render(homeTemplate(books));
        })
        .catch(err => {
            alert(err)
        });
}