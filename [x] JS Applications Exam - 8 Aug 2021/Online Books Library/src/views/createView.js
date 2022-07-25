import { html } from '../../node_modules/lit-html/lit-html.js';

import * as bookService from '../middleware/bookService.js';

const createTemplate = (submitHandler) => html`
        <section id="create-page" class="create">
            <form @submit=${submitHandler} id="create-form" action="" method="">
                <fieldset>
                    <legend>Add new Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" placeholder="Title">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type">
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Add Book">
                </fieldset>
            </form>
        </section>
`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let title = form.get('title');
        let description = form.get('description');
        let imageUrl = form.get('imageUrl');
        let type = form.get('type');
        
        if (title != '' && description != '' && imageUrl != '' && type != '') {
            let newBook = {
                title,
                description,
                imageUrl,
                type
            }
            
            bookService.create(newBook)
                .then(() => {
                    ctx.page.redirect('/')
                })
                .catch(err => {
                    alert(err)
                })

        }
    }
    ctx.render(createTemplate(submitHandler));
}