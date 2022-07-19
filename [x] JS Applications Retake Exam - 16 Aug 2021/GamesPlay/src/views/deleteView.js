import * as gameService from '../middleware/gameService.js';

export const deleteView = (ctx) => {
    let gameId = ctx.params.id;
    let confirmation = window.confirm(`Are you sure you want to delete ${ctx.title}`);

    if (confirmation) {
        gameService.delGame(gameId);

        ctx.page.redirect('/');
    }
}