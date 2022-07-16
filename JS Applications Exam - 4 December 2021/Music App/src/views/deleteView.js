import * as albumService from '../services/albumService.js';

export const deleteView = (ctx) => {
    let isConfirmed = confirm('Are you sure you want to delete this album?');

    if (isConfirmed) {
        albumService.getAlbum(ctx.params.id)
            .then(album => {

                console.log(album)

                albumService.delAlbum(album, ctx.params.id);

                ctx.page.redirect('/catalog');
            })
    }
};