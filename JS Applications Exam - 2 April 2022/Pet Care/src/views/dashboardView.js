import { html } from '../../node_modules/lit-html/lit-html.js';

import * as petService from '../middleware/petService.js';

const dashboardTemplate = (pets) => html`
        <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
                ${pets.length > 1
                    ? pets.map(p => petTemplate(p))
                    : noPetTemplate()                
                }
            </div>
        </section>
`;

const petTemplate = (pet) => html`
                <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src=${pet.image}>
                    </article>
                    <h2 class="name">${pet.name}</h2>
                    <h3 class="breed">${pet.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/details/{${pet._id}">Details</a>
                    </div>
                </div>
`;

const noPetTemplate = () => html`
                <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>
`;

export const dashboardView = (ctx) => {
    petService.getAll()
        .then(pets => {
            ctx.render(dashboardTemplate(pets));
        })
}