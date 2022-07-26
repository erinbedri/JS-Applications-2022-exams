import { html } from '../../node_modules/lit-html/lit-html.js';

import * as postService from '../middleware/postService.js';

const postTemplate = (post) => html`
                <div class="post">
                    <h2 class="post-title">Clothes</h2>
                    <img class="post-image" src=${post.imageUrl} alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/details/${post._id}" class="details-btn btn">Details</a>
                    </div>
                </div>
`;

const catalogTemplate = (user, posts) => html`
        <section id="my-posts-page">
            <h1 class="title">My Posts</h1>
            <div class="my-posts">

                ${user && posts.length > 0
                    ? html`${posts.map(p => postTemplate(p))}`
                    : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
                }

            </div>
        </section>
`;

export const catalogView = (ctx) => {
    postService.getMyPosts(ctx.user._id)
        .then(posts => {
            ctx.render(catalogTemplate(ctx.user, posts))
        })
        .catch(err => {
            alert(err);
        })
}