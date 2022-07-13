import { html } from '../../node_modules/lit-html/lit-html.js';

import * as albumService from '../services/albumService.js';

const detailsTemplate = (album, user) => html`
        <section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src=${album.imgUrl}>
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: ${album.name}</h1>
                        <h3>Artist: ${album.artist}</h3>
                        <h4>Genre: ${album.genre}</h4>
                        <h4>Price: $${album.price}</h4>
                        <h4>Date: ${album.releaseDate}</h4>
                        <p>Description: ${album.description}</p>
                    </div>

                    ${user && album._ownerId == user._id
                        ? html`                    
                            <div class="actionBtn">
                                <a href="#" class="edit">Edit</a>
                                <a href="#" class="remove">Delete</a>
                            </div>`
                        : ''
                    }

                </div>
            </div>
        </section>
`;

export const detailsView = (ctx) => {
    console.log(ctx)

    albumService.getAlbum(ctx.params.id)
        .then(album => {

            console.log(album)

            ctx.render(detailsTemplate(album, ctx.user))
        })

};