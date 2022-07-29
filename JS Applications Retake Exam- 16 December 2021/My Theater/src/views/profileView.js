import { html } from '../../node_modules/lit-html/lit-html.js';

import * as eventService from '../services/eventService.js';

const eventTemplate = (event) => html`
                <div class="eventBoard">
                    <div class="event-info">
                        <img src=${event.imageUrl}>
                        <h2>${event.title}</h2>
                        <h6>${event.date}</h6>
                        <a href="/details/${event._id}" class="details-button">Details</a>
                    </div>
                </div>
`;

const noEventTemplate = html`
                <div class="no-events">
                    <p>This user has no events yet!</p>
                </div>
`;

const profileTemplate = (user, events) => html`
        <section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${user.email}</h2>
            </div>
            <div class="board">
                ${events.length > 0
                    ? html`${events.map(e => eventTemplate(e))}`
                    : noEventTemplate
                }
            </div>
        </section>
`;

export const profileView = (ctx) => {
    eventService.getMyEvents(ctx.user._id)
        .then(events => {
            ctx.render(profileTemplate(ctx.user, events))
        })
        .catch(err => {
            alert(err);
        })
}