import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as memeService from '../middleware/memeService.js';

const userControlsTemplate = (memeId) => html`
                    <a class="button warning" href="/edit/${memeId}">Edit</a>
                    <button data-id=${memeId} @click=${deleteHandler} class="button danger">Delete</button>
`;

const detailsTemplate = (user, meme) => html`
        <section id="meme-details">
            <h1>Meme Title: ${meme.title}</h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${meme.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${meme.description}</p>

                    ${user && user._id == meme._ownerId
                        ? userControlsTemplate(meme._id)
                        : nothing
                    }
                    
                </div>
            </div>
        </section>
`;


const deleteHandler = () => {
    console.log('here comes detele')
}

export const detailsView = (ctx) => {
    let memeId = ctx.params.id;

    memeService.getOne(memeId)
        .then(meme => {
            ctx.render(detailsTemplate(ctx.user, meme));
        })
        .catch(err => {
            alert(err);
        })
}

