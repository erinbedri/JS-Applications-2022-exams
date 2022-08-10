import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';

const headerElement = document.getElementById('navigation');
const contentElement = document.getElementById('content');

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