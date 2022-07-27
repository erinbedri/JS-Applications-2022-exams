import { html } from '../../node_modules/lit-html/lit-html.js';

import * as carService from '../middleware/carsService.js';

const editTemplate = (submitHandler, car) => html`
        <section id="edit-listing">
            <div class="container">

                <form @submit=${submitHandler} id="edit-form">
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" value=${car.brand}>

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" value=${car.model}>

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" value=${car.description}>

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" value=${car.year}>

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" value=${car.imageUrl}>

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" value=${car.price}>

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>
`;

export const editView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let editedCar = {
            brand: form.get('brand'),
            model: form.get('model'),
            description: form.get('description'),
            year: form.get('year'),
            imageUrl: form.get('imageUrl'),
            price: form.get('price')
        }

        if (editedCar.brand != '' &&
            editedCar.model != '' &&
            editedCar.description != '' &&
            editedCar.year != '' && Number(editedCar.year) > 0 &&
            editedCar.imageUrl != '' &&
            editedCar.price != '' && Number(editedCar.price) > 0
        ) {
            carService.edit(editedCar, carId)
                .then(() => {
                    ctx.page.redirect(`/details/${carId}`);
                })
                .catch(err => {
                    alert(err);
                })
        }
    }

    let carId = ctx.params.id;
    carService.getOne(carId)
        .then(car => {
            ctx.render(editTemplate(submitHandler, car))
        })
}