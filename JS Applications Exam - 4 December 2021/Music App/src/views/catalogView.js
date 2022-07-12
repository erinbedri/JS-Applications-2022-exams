import { html } from '../../node_modules/lit-html/lit-html.js';

import * as albumService from '../services/albumService.js';

const albumTemplate = (album) => html`
            <div class="card-box">
                <img src=${album.imgUrl}>
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${album.name}</p>
                        <p class="artist">Artist: ${album.artist}</p>
                        <p class="genre">Genre: ${album.genre}</p>
                        <p class="price">Price: $${album.price}</p>
                        <p class="date">Release Date: ${album.releaseDate}</p>
                    </div>
                    <div class="btn-group">
                        <a href="albums/${album._id}" id="details">Details</a>
                    </div>
                </div>
            </div>
`;

const catalogTemplate = (albums) => html`
    <section id="catalogPage">
        <h1>All Albums</h1>
    
        ${albums.map(album => albumTemplate(album))}

        ${albums.length < 1
            ? html`<p>No Albums in Catalog!</p>`
            : ''
        }
        
    </section>
`;

export const catalogView = (ctx) => {
    console.log('yes')

    albumService.getAll()
        .then(albums => {
            console.log(albums)
            ctx.render(catalogTemplate(albums))
    })

};