import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as postService from '../middleware/postService.js';
import { post } from '../middleware/requester.js';

const creatorTemplate = (post) => html`
            <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
            <a href="/delete/${post._id}" class="delete-btn btn">Delete</a>
`;

const donateTemplate = (post) => html`
            <a @click=${onClick(post._id)} href="#" class="donate-btn btn">Donate</a>
`;

const detailsTemplate = (user, post, postDonations, hasDonated) => html`
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
                        <p class="donate-Item">Donate Materials: ${postDonations}</p>

                        <div class="btns">

                            ${user && user._id == post._ownerId
                                ? creatorTemplate(post)
                                : nothing 
                            }

                            ${user && user._id != post._ownerId && !hasDonated
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
    let postDonations;
    postService.donationCount(ctx.params.id)
        .then(count => {
            postDonations = count;
        })
        .catch(err => {
            alert(err);
        })

    let hasDonated;
    postService.hasDonated(ctx.user._id, ctx.params.id)
        .then(result => {
            console.log(result)
            hasDonated = result;
        })
        .catch(err => {
            alert(err);
        })

    postService.getOne(ctx.params.id)
        .then(post => {
            ctx.render(detailsTemplate(ctx.user, post, postDonations, hasDonated));
        })
        .catch(err => {
            alert(err);
        })
}

function onClick(postId) {
    postService.donate(postId)
        .catch(err => {
            alert(err);
        })
}