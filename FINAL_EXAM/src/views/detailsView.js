import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as jobService from '../services/jobService.js';

const userConstrols = (job) => html`
                    <a href="/edit/${job._id}" id="edit-btn">Edit</a>
                    <a href="/delete/${job._id}" id="delete-btn">Delete</a>
`;

const applyControls = (job) => html`
                    <a @click=${onClick(job._id)} href="#" id="apply-btn">Apply</a>
`;

const detailsTemplate = (user, job, jobApplications, hasLiked) => html`
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src=${job.imageUrl} alt="example1" />
                <p id="details-title">${job.title}</p>
                <p id="details-category">
                    Category: <span id="categories">${job.category}</span>
                </p>
                <p id="details-salary">
                    Salary: <span id="salary-number">${job.salary}</span>
                </p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <h4>Description</h4>
                        <span>${job.description}</span>
                    </div>
                    <div id="details-requirements">
                        <h4>Requirements</h4>
                        <span>${job.requirements}</span>
                    </div>
                </div>
                <p>Applications: <strong id="applications">${jobApplications}</strong></p>

                ${user && user._id == job._ownerId
                    ? userConstrols(job)
                    : nothing
                }

                ${user && user._id != job._ownerId && !hasLiked
                    ? applyControls(job)
                    : nothing
                }

                </div>
            </div>
        </section>
`;

export const detailsView = (ctx) => {
    let jobApplications;
    jobService.applicationsCount(ctx.params.id)
        .then(count => {
            jobApplications = count;
        })

    let hasLiked;
    jobService.hasLiked(ctx.user._id, ctx.params.id)
        .then(result => {
            hasLiked = result;
        })

    jobService.getOne(ctx.params.id)
        .then(job => {
            ctx.render(detailsTemplate(ctx.user, job, jobApplications, hasLiked))
        })
}

function onClick(jobId) {
    jobService.apply(jobId)
        .catch(err => {
            alert(err);
        })
}