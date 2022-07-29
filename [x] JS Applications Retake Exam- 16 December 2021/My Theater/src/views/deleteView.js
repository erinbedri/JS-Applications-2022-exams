import * as eventService from '../services/eventService.js';

export const deleteView = (ctx) => {
    let confirmation = window.confirm('You are about to delete this event. Do you want to procede?');

    if (confirmation) {
        eventService.del(ctx.params.id)
            .then(() => {
                ctx.page.redirect('/');
            })
            .catch(err => {
                alert(err);
            })
    }
}