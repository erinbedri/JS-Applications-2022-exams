import page from '../node_modules/page/page.mjs';

import { renderNavigationMiddleware, renderContentMiddleware } from './middleware/renderMiddleware.js';

import { homeView } from './views/homeView.js';
import { dashboardView } from './views/dashboardView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { logoutView } from './views/logoutView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { deleteView } from './views/deleteView.js';
import { editView } from './views/editView.js';

page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', homeView);
page('/dashboard', dashboardView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/create', createView);
page('/details/:id', detailsView);
page('/delete/:id', deleteView);
page('/edit/:id', editView);

page.start()


