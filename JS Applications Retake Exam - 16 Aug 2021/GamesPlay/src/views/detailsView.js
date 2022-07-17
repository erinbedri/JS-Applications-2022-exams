import { html, nothing } from '../../node_modules/lit-html/lit-html.js'

import * as gameService from '../middleware/gameService.js';


const detailsTemplate = (game, isOWner) => html`
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${game.imageUrl} />
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>

                <p class="text">${game.summary}</p>

                ${game && isOWner
                    ? html`
                        <div class="buttons">
                            <a href="/edit/${game._id}" class="button">Edit</a>
                            <a href="/delete/${game._id}" class="button">Delete</a>
                    	</div>
                    `
                    : nothing
                }

        </section>
`;

export const detailsView = (ctx) => {
    let gameId = ctx.params.id;
    let user = ctx.user;

    gameService.getOne(gameId)
        .then(game => {
            let isOwner = user && game._ownerId === user._id;

            ctx.render(detailsTemplate(game, isOwner));
        })
}