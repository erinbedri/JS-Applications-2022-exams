import { html } from '../../node_modules/lit-html/lit-html.js';

import * as postService from '../middleware/postService.js';

const createTemplate = (submitHandler) => html`
        <section id="create-page" class="auth">
            <form @submit=${submitHandler} id="create">
                <h1 class="title">Create Post</h1>
        
                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input type="title" name="title" id="title">
                </article>
        
                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input type="text" name="description" id="description">
                </article>
        
                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl">
                </article>
        
                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address">
                </article>
        
                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone">
                </article>
        
                <input type="submit" class="btn submit" value="Create Post">
            </form>
        </section>
`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let newPost = {
            title: form.get('title'),
            description: form.get('description'),
            imageUrl: form.get('imageUrl'),
            address: form.get('address'),
            phone: form.get('phone')
        }

        if (newPost.title != '' &&
            newPost.description != '' &&
            newPost.imageUrl != '' &&
            newPost.address != '' &&
            newPost.phone != '') {
                postService.create(newPost)
                    .then(() => {
                        ctx.page.redirect('/');
                    })
                    .catch(err => {
                        alert(err);
                    })
        }
    }
    ctx.render(createTemplate(submitHandler));
}