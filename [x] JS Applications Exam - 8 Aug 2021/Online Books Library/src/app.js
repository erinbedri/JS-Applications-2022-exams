import page from '../node_modules/page/page.mjs';

import { renderNavigationMiddleware, renderContentMiddleware } from '../src/middleware/renderMiddleware.js';
import { authMiddleware } from '../src/middleware/authMiddleware.js';

import { homeView } from '../src/views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { logoutView } from './views/logoutView.js';
import { detailsView } from './views/detailsView.js';
import { createView } from './views/createView.js';
import { editView } from './views/editView.js';
import { deleteView } from './views/deleteView.js';
import { catalogView } from './views/catalogView.js';

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/details/:id', detailsView);
page('/create', createView);
page('/edit/:id', editView);
page('/delete/:id', deleteView);
page('/catalog', catalogView);

page.start();