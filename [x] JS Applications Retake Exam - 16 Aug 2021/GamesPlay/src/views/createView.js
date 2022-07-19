import { html } from '../../node_modules/lit-html/lit-html.js';

import * as gameService from '../middleware/gameService.js';

const createTemplate = (submitHandler) => html`
        <section id="create-page" class="auth">
            <form @submit=${submitHandler} id="create">
                <div class="container">

                    <h1>Create Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title...">

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category...">

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input class="btn submit" type="submit" value="Create Game">
                </div>
            </form>
        </section>
`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        let title = form.get('title');
        let category = form.get('category');
        let maxLevel = form.get('maxLevel');
        let imageUrl = form.get('imageUrl');
        let summary = form.get('summary');

        if (title != '' && category != '' && maxLevel != '' && imageUrl != '' && summary != '') {
            let newGame = {
                title,
                category,
                maxLevel,
                imageUrl,
                summary
            }
            gameService.create(newGame);
            
            ctx.page.redirect('/catalog');
        }
    }

    ctx.render(createTemplate(submitHandler));
};