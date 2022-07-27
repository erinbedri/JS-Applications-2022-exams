import page from '../node_modules/page/page.mjs';

import { renderNavigationMiddleware, renderContentMiddleware } from './middleware/renderMiddleware.js';
import { authMiddleware } from './middleware/authMiddleware.js';

import { homeView } from './views/homeView.js';
/*
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { deleteView } from './views/deleteView.js';
*/

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', homeView);
/*
page('/catalog', catalogView);
page('/create', createView);
page('/login', loginView);
page('/logout', logoutView);
page('/register', registerView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteView);
*/

page.start()