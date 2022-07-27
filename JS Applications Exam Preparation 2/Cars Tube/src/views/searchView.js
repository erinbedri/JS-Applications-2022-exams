import { html } from '../../node_modules/lit-html/lit-html.js';

import * as carService from '../middleware/carsService.js';

const listingTemplate = (car) => html`
                <div class="listing">
                    <div class="preview">
                        <img src=${car.imageUrl}>
                    </div>
                    <h2>${car.brand} ${car.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${car.year}</h3>
                            <h3>Price: ${car.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/details/${car._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
`;

const searchTemplate = (cars, clickHandler) => html`
        <section id="search-cars">
            <h1>Filter by year</h1>

            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button @click=${clickHandler} class="button-list">Search</button>
            </div>

            <h2>Results: ${cars.lenght}</h2>
            <div class="listings">

                ${cars.length > 0
                    ? html`${cars.map(c => listingTemplate(c))}`
                    : html`<p class="no-cars"> No results.</p>`
                }

        </section>
`;

export const searchView = (ctx) => {
    const clickHandler = (e) => {
        e.preventDefault();

        let query = document.getElementById('search-input');
    
        carService.search(encodeURIComponent(query.value))
            .then(cars => {
                ctx.render(searchTemplate(cars, clickHandler))
            })
            .catch(err => {
                alert(err);
            })
    }

    carService.getAll()
        .then(cars => {
            ctx.render(searchTemplate(cars, clickHandler))
        })
}