import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';

const headerElement = document.getElementById('site-header');
const contentElement = document.getElementById('site-content');

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