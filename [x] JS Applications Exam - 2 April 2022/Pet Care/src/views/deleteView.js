import * as petService from '../middleware/petService.js';

export const deleteView = (ctx) => {
    petService.delPet(ctx.params.id)
        .then(() => {
            ctx.page.redirect('/');
        })
        .catch(err => {
            alert(err);
        })
}