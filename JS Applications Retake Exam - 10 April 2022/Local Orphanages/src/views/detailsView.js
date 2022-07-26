import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as postService from '../middleware/postService.js';

const creatorTemplate = (post) => html`
            <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
            <a href="/delete/${post._id}" class="delete-btn btn">Delete</a>
`;

const donateTemplate = (post) => html`
            <a href="/donate/${post._id}" class="donate-btn btn">Donate</a>
`;

const detailsTemplate = (user, post) => html`
        <section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src=${post.imageUrl} alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${post.title}</h2>
                        <p class="post-description">Description: ${post.description}</p>
                        <p class="post-address">Address: ${post.address}</p>
                        <p class="post-number">Phone number: ${post.phone}</p>
                        <p class="donate-Item">Donate Materials: 0</p>

                        <div class="btns">

                            ${user && user._id == post._ownerId
                                ? creatorTemplate(post)
                                : nothing 
                            }

                            ${user
                                ? donateTemplate(post)
                                : nothing
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
`;

export const detailsView = (ctx) => {
    postService.getOne(ctx.params.id)
        .then(post => {
            ctx.render(detailsTemplate(ctx.user, post));
        })
        .catch(err => {
            alert(err);
        })
}