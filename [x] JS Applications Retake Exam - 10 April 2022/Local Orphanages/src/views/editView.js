import { html } from '../../node_modules/lit-html/lit-html.js';

import * as postService from '../middleware/postService.js';

const editTemplate = (submitHandler, post) => html`
        <section id="edit-page" class="auth">
            <form @submit=${submitHandler} id="edit">
                <h1 class="title">Edit Post</h1>

                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input type="title" name="title" id="title" value=${post.title}>
                </article>

                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input type="text" name="description" id="description" value=${post.description}>
                </article>

                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl" value=${post.imageUrl}>
                </article>

                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address" value=${post.address}>
                </article>

                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone" value=${post.phone}>
                </article>

                <input type="submit" class="btn submit" value="Edit Post">
            </form>
        </section>
`;

export const editView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let editedPost = {
            title: form.get('title'),
            description: form.get('description'),
            imageUrl: form.get('imageUrl'),
            address: form.get('address'),
            phone: form.get('phone')
        }

        if (editedPost.title != '' &&
            editedPost.description != '' &&
            editedPost.imageUrl != '' &&
            editedPost.address != '' &&
            editedPost.phone != '') {
                postService.edit(editedPost, ctx.params.id)
                    .then(() => {
                        ctx.page.redirect('/');
                    })
                    .catch(err => {
                        alert(err);
                    })
        }
    }
    postService.getOne(ctx.params.id)
        .then(post => {
            ctx.render(editTemplate(submitHandler, post));
        })
}