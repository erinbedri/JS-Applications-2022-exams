import * as authService from '../middleware/authService.js';

export const logoutView = (ctx) => {
    authService.logout();

    ctx.page.redirect('/');
}