import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as carService from '../middleware/carsService.js';

const userControls = (carId) => html`
                <div class="listings-buttons">
                    <a href="/edit/${carId}" class="button-list">Edit</a>
                    <a href="/delete/${carId}" class="button-list">Delete</a>
                </div>
`;

const detailsTemplate = (user, car) => html`
        <section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src=${car.imageUrl}>
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${car.brand}</li>
                    <li><span>Model:</span>${car.model}</li>
                    <li><span>Year:</span>${car.year}</li>
                    <li><span>Price:</span>${car.price}$</li>
                </ul>

                <p class="description-para">${car.description}</p>

                ${user && car._ownerId == user._id
                    ? userControls(car._id)
                    : nothing
                }

            </div>
        </section>
`;

export const detailsView = (ctx) => {
    let carId = ctx.params.id;

    carService.getOne(carId)
        .then(car => {
            console.log(car)
            ctx.render(detailsTemplate(ctx.user, car));
        })
        .catch(err => {
            alert(err);
        })
}