import * as albumService from '../services/albumService.js';

export const deleteView = (ctx) => {
    let id = ctx.params.id;

    albumService.getAlbum(id)
        .then(album => {
            let isConfirmed = confirm(`Are you sure you want to delete ${album.name}?`);

            if (isConfirmed) {
                albumService.delAlbum(id);

                ctx.page.redirect('/catalog');
            }
        })
}