import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as memeService from '../middleware/memeService.js';

const editTemplate = (submitHandler, meme) => html`
        <section id="edit-meme">
            <form @submit=${submitHandler} id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">

                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" value=${meme.title} name="title">

                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description">${meme.description}</textarea>

                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" value=${meme.imageUrl} name="imageUrl">

                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
`;

export const editView = (ctx) => {
    let memeId = ctx.params.id;

    const submitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let editedMeme = {
            title: form.get('title'),
            description: form.get('description'),
            imageUrl: form.get('imageUrl')
        }

        if (editedMeme.title != '' &&
            editedMeme.description != '' &&
            editedMeme.imageUrl != '') {
            memeService.edit(memeId, editedMeme)
                .then(() => {
                    ctx.page.redirect(`/details/${memeId}`);
                })
                .catch(err => {
                    alert(err);
                })
        }
    }

    memeService.getOne(memeId)
        .then(meme => {
            ctx.render(editTemplate(submitHandler, meme))
        })
        .catch(err => {
            alert(err);
        })
}