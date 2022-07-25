import { html } from '../../node_modules/lit-html/lit-html.js';

import * as bookService from '../middleware/bookService.js';

const editTemplate = (book, submitHandler) => html`
        <section id="edit-page" class="edit">
            <form @submit=${submitHandler} id="edit-form" action="#" method="">
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" value="${book.title}">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description"
                                id="description">${book.description}</textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" value="${book.imageUrl}">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" value="Fiction">
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>
`;

export const editView = (ctx) => {
    let bookId = ctx.params.id;

    const submitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let title = form.get('title');
        let description = form.get('description');
        let imageUrl = form.get('imageUrl');
        let type = form.get('type');
        
        if (title != '' && description != '' && imageUrl != '' && type != '') {
            let editedBook = {
                title,
                description,
                imageUrl,
                type
            }
            
            bookService.edit(bookId, editedBook)
                .then(() => {
                    ctx.page.redirect(`/details/${bookId}`)
                })
                .catch(err => {
                    alert(err)
                })

        }
    }
    bookService.getOne(bookId)
        .then(book => {
            ctx.render(editTemplate(book, submitHandler));
        })
}