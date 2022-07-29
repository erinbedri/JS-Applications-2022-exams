import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as eventService from '../services/eventService.js';

const userConstrols = (eventId) => html`
                        <a class="btn-delete" href="/delete/${eventId}">Delete</a>
                        <a class="btn-edit" href="/edit/${eventId}">Edit</a>
`;

const likeControl = (eventId) => html`
                        <a class="btn-like" href="/like/${eventId}">Like</a>
`;

const detailsTemplate = (user, event) => html`
        <section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${event.name}</h1>
                    <div>
                        <img src=${event.imageUrl} />
                    </div>
                </div>

                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${event.description}</p>
                    <h4>Date: ${event.date}</h4>
                    <h4>Author: ${event.author}</h4>
                    <div class="buttons">
                        ${user && user._id === event._ownerId
                            ? userConstrols(event._id)
                            : nothing
                        }
                        ${user && user._id !== event._ownerId
                            ? likeControl(event._id)
                            : nothing
                        }

                    </div>
                    <p class="likes">Likes: ${event.likes}</p>
                </div>
            </div>
        </section>
`;

export const detailsView = (ctx) => {
    eventService.getOne(ctx.params.id)
        .then(event => {
            ctx.render(detailsTemplate(ctx.user, event));
        })
        .catch(err => {
            alert(err);
        })
}