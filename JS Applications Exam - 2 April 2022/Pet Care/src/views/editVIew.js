import { html } from '../../node_modules/lit-html/lit-html.js';

import * as petService from '../middleware/petService.js';

const editTemplate = (pet, submitHandler) => html`
        <section id="editPage">
            <form @submit=${submitHandler} class="editForm">
                <img src="./images/editpage-dog.jpg">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" value=${pet.name}>
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" value=${pet.breed}>
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" value=${pet.age}>
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" value=${pet.weight}>
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" value=${pet.image}>
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>
`;

export const editView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let editedPet = {
            name: form.get('name'),
            breed: form.get('breed'),
            age: form.get('age'),
            weight: form.get('weight'),
            image: form.get('image')
        }

        petService.edit(editedPet, ctx.params.id)
            .then(() => {
                ctx.page.redirect(`/details/${ctx.params.id}`)
            })
            .catch(err => {
                alert(err);
            })
    }

    petService.getOne(ctx.params.id)
        .then(pet => {
            ctx.render(editTemplate(pet, submitHandler));
        })
}
