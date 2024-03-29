import page from '../node_modules/page/page.mjs';

import { renderNavigationMiddleware, renderContentMiddleware } from './middleware/renderMiddleware.js';
import { authMiddleware } from './middleware/authMiddleware.js';

import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { logoutView } from './views/logoutView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { deleteView } from './views/deleteView.js';
import { profileView } from './views/profileView.js';


/*
import { likeHandler } from './views/likeView.js';
import { catalogView } from './views/catalogView.js';
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
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteView);
page('/profile', profileView);

/*
page('/like/:id', likeHandler);
page('/myCatalog', myCatalogView);
page('/search', searchView);
*/

page.start()