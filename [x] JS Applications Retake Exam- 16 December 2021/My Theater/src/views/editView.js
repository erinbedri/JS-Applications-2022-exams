import { html } from '../../node_modules/lit-html/lit-html.js';

import * as eventService from '../services/eventService.js';

const editTemplate = (event, editHandler) => html`
        <section id="editPage">
            <form @submit=${editHandler} class="theater-form">
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" value=${event.title}>
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" value=${event.date}>
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author"
                        value=${event.author}>
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description"
                        placeholder="Description">${event.description}</textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                        value=${event.imageUrl}>
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
`;

export const editView = (ctx) => {
    const editHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let editedEvent = {
            title: form.get('title'),
            date: form.get('date'),
            author: form.get('author'),
            imageUrl: form.get('imageUrl'),
            description: form.get('description'),
        }


        if (editedEvent.title != '' &&
            editedEvent.date != '' &&
            editedEvent.author != '' &&
            editedEvent.imageUrl != '' &&
            editedEvent.description != '') {

            eventService.edit(editedEvent, ctx.params.id)
                .then(() => {
                    ctx.page.redirect(`/details/${ctx.params.id}`);
                })
                .catch(err => {
                    alert(err);
                })
        }
    }
    eventService.getOne(ctx.params.id)
        .then(event => {
            ctx.render(editTemplate(event, editHandler));
        })
        .catch(err => {
            alert(err);
        })
}