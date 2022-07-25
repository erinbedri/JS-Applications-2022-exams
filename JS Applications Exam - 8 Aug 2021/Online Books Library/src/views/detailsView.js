import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as bookService from '../middleware/bookservice.js';

const userDetails = (book) => html`
        <a class="button" href="/delete/${book._id}">Delete</a>
        <a class="button" href="/edit/${book._id}">Edit</a>
`;

const detailsTemplate = (user, book) => html`
        <section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src=${book.imageUrl}></p>
                <div class="actions">
                    
                    ${user && user._id == book._ownerId
                        ? userDetails(book)
                        : nothing
                    }

                    <!-- Bonus -->
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    <a class="button" href="#">Like</a>

                    <!-- ( for Guests and Users )  -->
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 0</span>
                    </div>
                    <!-- Bonus -->

                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>
`;

export const detailsView = (ctx) => {
    bookService.getOne(ctx.params.id)
        .then(book => {
            ctx.render(detailsTemplate(ctx.user, book));
        })
        .catch(err => {
            alert(err)
        });
}