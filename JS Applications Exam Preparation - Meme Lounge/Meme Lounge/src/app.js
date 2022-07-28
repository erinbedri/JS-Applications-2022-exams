import page from '../node_modules/page/page.mjs';

import { renderNavigationMiddleware, renderContentMiddleware } from './middleware/renderMiddleware.js';
import { authMiddleware } from './middleware/authMiddleware.js';

import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { logoutView } from './views/logoutView.js';
import { createView } from './views/createView.js';
import { catalogView } from './views/catalogView.js';
import { detailsView } from './views/detailsView.js';
import { deleteView } from './views/deleteView.js';
import { editView } from './views/editView.js';
/*
import { myCatalogView } from './views/myCatalogView.js';
import { searchView } from './views/searchView.js';
*/

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/create', createView);
page('/catalog', catalogView);
page('/details/:id', detailsView);
page('/delete/:id', deleteView);
page('/edit/:id', editView);
/*
page('/myCatalog', myCatalogView);
page('/search', searchView);
*/

page.start()