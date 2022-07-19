import { html } from '../../node_modules/lit-html/lit-html.js'

import * as gameService from '../middleware/gameService.js';

const gameTemplate = (game) => html`
            <div class="allGames">
                <div class="allGames-info">
                    <img src=${game.imageUrl}>
                    <h6>${game.category}</h6>
                    <h2>${game.title}</h2>
                    <a href="/details/${game._id}" class="details-button">Details</a>
                </div>
`;

const catalogTemplate = (games) => html`
        <section id="catalog-page">
            <h1>All Games</h1>

            ${games.length > 0
                ? html`
                    ${games.map(game => gameTemplate(game))}
                `
                : html`
                    <h3 class="no-articles">No articles yet</h3>
                `
            }
`;

export const catalogView = (ctx) => {
    gameService.getAll()
        .then(games => {
            ctx.render(catalogTemplate(games));
        })
}

