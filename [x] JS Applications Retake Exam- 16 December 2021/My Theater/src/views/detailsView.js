import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as eventService from '../services/eventService.js';

const userConstrols = (eventId) => html`
                        <a class="btn-delete" href="/delete/${eventId}">Delete</a>
                        <a class="btn-edit" href="/edit/${eventId}">Edit</a>
`;

const likeControl = (ctx) => html`
                        <a @click=${onClick(ctx)} class="btn-like" href="#">Like</a>
`;

const detailsTemplate = (ctx, event, likes, hasLiked) => html`
        <section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${event.title}</h1>
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

                        ${ctx.user && ctx.user._id === event._ownerId
                            ? userConstrols(event._id)
                            : nothing
                        }
                        ${ctx.user && ctx.user._id !== event._ownerId && !hasLiked
                            ? likeControl(ctx)
                            : nothing
                        }

                    </div>
                    <p class="likes">Likes: ${likes}</p>
                </div>
            </div>
        </section>
`;

export const detailsView = (ctx) => {
    let likes;
    eventService.getLikesOfEvent(ctx.params.id)
        .then(count => {
            likes = count;
        })
        .catch(err => {
            alert(err);
        })

    let hasLiked = false;
    if (ctx.user) {
        eventService.hasLiked(ctx.user._id, ctx.params.id)
            .then(result => {
                hasLiked = result;
            })
            .catch(err => {
                alert(err);
            })
    }

    eventService.getOne(ctx.params.id)
        .then(event => {
            ctx.render(detailsTemplate(ctx, event, likes, hasLiked));
        })
        .catch(err => {
            alert(err);
        })
}

const onClick = (ctx) => {
    let eventId = ctx.params.id;

    eventService.like(eventId)
        .catch(err => {
            alert(err);
        })
}