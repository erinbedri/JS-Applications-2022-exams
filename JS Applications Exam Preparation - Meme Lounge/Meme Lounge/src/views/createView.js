import { html } from '../../node_modules/lit-html/lit-html.js';

import * as memeService from '../middleware/memeService.js';

const createTemplate = (submitHandler) => html`
        <section id="create-meme">
            <form @submit=${submitHandler} id="create-form">
                <div class="container">
                    <h1>Create Meme</h1>
        
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title">
        
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
        
                    <label for="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
        
                    <input type="submit" class="registerbtn button" value="Create Meme">
                </div>
            </form>
        </section>
`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let newMeme = {
            title: form.get('title'),
            description: form.get('description'),
            imageUrl: form.get('imageUrl')
        }

        if (newMeme.title != '' &&
            newMeme.description != '' &&
            newMeme.imageUrl != '') {
            memeService.create(newMeme)
                .then(() => {
                    ctx.page.redirect('/catalog');
                })
                .catch(err => {
                    alert(err);
                })
        }
    }

    ctx.render(createTemplate(submitHandler));
}