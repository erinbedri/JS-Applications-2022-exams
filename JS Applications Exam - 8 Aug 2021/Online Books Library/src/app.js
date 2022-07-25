import page from '../node_modules/page/page.mjs';

import { authMiddleware } from '../src/middleware/authMiddleware.js';
import { renderNavigationMiddleware, renderContentMiddleware } from '../src/middleware/renderMiddleware.js';

import { homeView } from '../src/views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { logoutView } from './views/logoutView.js';

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);

page.start();