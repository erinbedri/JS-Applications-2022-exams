import * as memeService from '../middleware/memeService.js';

export const deleteView = (ctx) => {
    let memeId = ctx.params.id;
    
    let confirmation = window.confirm('Are you sure you want to delete this meme?');

    if (confirmation) {
        memeService.del(memeId)
            .then(() => {
                ctx.page.redirect('/catalog');
            })
            .catch(err => {
                alert(err);
            })
    }
}