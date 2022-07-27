import * as authService from './authService.js';

export const authMiddleware = (ctx, next) => {
    ctx.user = authService.getUser();

    next();
}