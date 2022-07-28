import { html } from '../../node_modules/lit-html/lit-html.js';

import * as memeService from '../middleware/memeService.js';

const memeTemplate = (meme) => html`
                <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${meme.title}</p>
                            <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/details${meme._id}">Details</a>
                        </div>
                    </div>
                </div>
`;

const catalogTemplate = (memes) => html`
       <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">

                ${memes.length > 0
                    ? html`${memes.map(m => memeTemplate(m))}`
                    : html`<p class="no-memes">No memes in database.</p>`
                }

			</div>
        </section>
`;

export const catalogView = (ctx) => {
    memeService.getAll()
        .then((memes) => {
            ctx.render(catalogTemplate(memes));
        })
        .catch(err => {
            alert(err);
        })
}