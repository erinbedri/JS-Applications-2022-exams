import page from '../node_modules/page/page.mjs';
import { renderNavigationMiddleware, renderContentMiddleware } from './middlewares/renderMiddleware.js';
import { authMiddleware } from './services/authMiddleware.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware)

page('/', homeView);
page('/login', loginView);

page.start();