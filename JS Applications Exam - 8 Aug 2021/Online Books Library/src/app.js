import { page } from '../node_modules/page/page.mjs';

import { authMiddleware } from '../src/middleware/authMiddleware.js';
import { renderNavigationMiddleware, renderContentMiddleware } from '../src/middleware/renderMiddleware.js';

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page.start();