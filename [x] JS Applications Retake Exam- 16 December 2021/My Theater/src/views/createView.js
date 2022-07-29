import { html } from '../../node_modules/lit-html/lit-html.js';

import * as eventService from '../services/eventService.js';

const createTemplate = (createHandler) => html`
        <section id="createPage">
            <form @submit=${createHandler} class="create-form">
                <h1>Create Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" value="">
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year">
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author">
                </div>
                <div>
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" placeholder="Description"></textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
`;

export const createView = (ctx) => {
    const createHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let newEvent = {
            title: form.get('title'),
            date: form.get('date'),
            author: form.get('author'),
            imageUrl: form.get('imageUrl'),
            description: form.get('description'),
        }


        if (newEvent.title != '' &&
            newEvent.date != '' &&
            newEvent.author != '' &&
            newEvent.imageUrl != '' &&
            newEvent.description != '') {

            eventService.create(newEvent)
                .then(() => {
                    ctx.page.redirect('/');
                })
                .catch(err => {
                    alert(err);
                })
        }
    }

    ctx.render(createTemplate(createHandler));
}