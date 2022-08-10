import { html } from '../../node_modules/lit-html/lit-html.js';

import * as jobService from '../services/jobService.js';

const editTemplate = (submitHandler, job) => html`
        <section id="edit">
            <div class="form">
                <h2>Edit Offer</h2>
                <form @submit=${submitHandler} class="edit-form">
                    <input type="text" name="title" id="job-title" placeholder="Title" value=${job.title}/>
                    <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" value=${job.imageUrl}/>
                    <input type="text" name="category" id="job-category" placeholder="Category" value=${job.category}/>
                    <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50">${job.description}</textarea>
                    <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                        cols="50">${job.requirements}</textarea>
                    <input type="text" name="salary" id="job-salary" placeholder="Salary" value=${job.salary}/>
        
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
`;

export const editView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let editedJob = {
            title: form.get('title'),
            imageUrl: form.get('imageUrl'), 
            category: form.get('category'), 
            description: form.get('description'), 
            requirements: form.get('requirements'), 
            salary: form.get('salary')
        }


        if (editedJob.title != '' &&
            editedJob.imageUrl != '' &&
            editedJob.category != '' &&
            editedJob.description != '' &&
            editedJob.requirements != '' &&
            editedJob.salary != '') {

            jobService.edit(editedJob, ctx.params.id)
                .then(() => {
                    ctx.page.redirect(`/details/${ctx.params.id}`);
                })
        }
    }

    jobService.getOne(ctx.params.id)
        .then(job => {
            ctx.render(editTemplate(submitHandler, job));
        })
}