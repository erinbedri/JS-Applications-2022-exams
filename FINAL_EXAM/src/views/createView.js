import { html } from '../../node_modules/lit-html/lit-html.js';

import * as jobService from '../services/jobService.js';

const createTemplate = (submitHandler) => html`
        <section id="create">
            <div class="form">
                <h2>Create Offer</h2>
                <form @submit=${submitHandler} class="create-form">
                    <input type="text" name="title" id="job-title" placeholder="Title" />
                    <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
                    <input type="text" name="category" id="job-category" placeholder="Category" />
                    <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
                    <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                        cols="50"></textarea>
                    <input type="text" name="salary" id="job-salary" placeholder="Salary" />
        
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let newOffer = {
            title: form.get('title'),
            imageUrl: form.get('imageUrl'),
            category: form.get('category'),
            description: form.get('description'),
            requirements: form.get('requirements'),
            salary: form.get('salary')
        }

        if (newOffer.title != '' &&
            newOffer.imageUrl != '' &&
            newOffer.category != '' &&
            newOffer.description != '' &&
            newOffer.requirements != '' &&
            newOffer.salary != '') {
                jobService.create(newOffer)
                    .then(() => {
                        ctx.page.redirect('/catalog');
                    })
            }
    }

    ctx.render(createTemplate(submitHandler))
}