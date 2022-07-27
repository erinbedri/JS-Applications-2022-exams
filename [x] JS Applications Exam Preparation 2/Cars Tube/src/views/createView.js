import { html } from '../../node_modules/lit-html/lit-html.js';

import * as carService from '../middleware/carsService.js';

const createTemplate = (submitHandler) => html`
        <section id="create-listing">
            <div class="container">
                <form @submit=${submitHandler} id="create-form">
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr>
        
                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand">
        
                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model">
        
                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description">
        
                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year">
        
                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl">
        
                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price">
        
                    <hr>
                    <input type="submit" class="registerbtn" value="Create Listing">
                </form>
            </div>
        </section>
`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let newCar = {
            brand: form.get('brand'),
            model: form.get('model'),
            description: form.get('description'),
            year: Number(form.get('year')),
            imageUrl: form.get('imageUrl'),
            price: Number(form.get('price'))
        }

        if (newCar.brand != '' &&
            newCar.model != '' &&
            newCar.description != '' &&
            newCar.year != '' && Number(newCar.year) > 0 &&
            newCar.imageUrl != '' &&
            newCar.price != '' && Number(newCar.price) > 0
        ) {
            carService.create(newCar)
                .then(() => {
                    ctx.page.redirect('/catalog');
                })
                .catch(err => {
                    alert(err);
                })
        }
    }
    ctx.render(createTemplate(submitHandler));
} 