import * as jobService from '../services/jobService.js';

export const deleteView = (ctx) => {
    jobService.del(ctx.params.id)
        .then(() => {
            ctx.page.redirect('/')
        })
}