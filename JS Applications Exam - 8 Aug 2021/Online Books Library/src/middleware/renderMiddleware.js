import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';

const headerElement = document.querySelector('.site-header');
const contentElement = document.querySelector('.site-content');

const renderContext = (templateResult) => {
    render(templateResult, contentElement);
}

export const renderNavigationMiddleware = (ctx, next) => {
    render(navigationView(ctx), headerElement);
    next();
}

export const renderContentMiddleware = (ctx, next) => {
    ctx.render = renderContext;
    next();
}