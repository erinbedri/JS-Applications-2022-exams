import * as albumService from '../services/albumService.js';

export const deleteView = (ctx) => {

    albumService.getAlbum(ctx.params.id)
        .then(album => {
            let isConfirmed = confirm(`Are you sure you want to delete ${album.name}?`);

            if (isConfirmed) {
                albumService.delAlbum(album, ctx.params.id);

                ctx.page.redirect('/catalog');
            }
        })
}