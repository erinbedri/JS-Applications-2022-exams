import page from '../node_modules/page/page.mjs';
import { renderNavigationMiddleware, renderContentMiddleware } from './middlewares/renderMiddleware.js';
import { authMiddleware } from './services/authMiddleware.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { catalogView } from './views/catalogView.js';
import { logoutView } from './views/logoutView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/catalog', catalogView);
page('/create', createView);
page('/albums/:id', detailsView);
page('/albums/:id/edit', editView);

page.start();