import { html } from '../../node_modules/lit-html/lit-html.js';

import * as postService from '../middleware/postService.js';

const postTemplate = (post) => html`
            <div class="post">
                <h2 class="post-title">${post.title}</h2>
                <img class="post-image" src=${post.imageUrl} alt="Material Image">
                <div class="btn-wrapper">
                    <a href="/details/${post._id}" class="details-btn btn">Details</a>
                </div>
            </div>
`;

const homeTemplate = (posts) => html`
        <section id="dashboard-page">
            <h1 class="title">All Posts</h1>

            <div class="all-posts">

                ${posts.length > 0
                    ? html`${posts.map(p => postTemplate(p))}`
                    : html`<h1 class="title no-posts-title">No posts yet!</h1>`
                }

            </div>

        </section>
`;

export const homeView = (ctx) => {
    postService.getAll()
        .then(posts => {
            ctx.render(homeTemplate(posts))
        })
        .catch(err => {
            alert(err)
        })
}