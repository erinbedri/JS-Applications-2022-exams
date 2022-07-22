import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as petService from '../middleware/petService.js';

const detailsTemplate = (pet, user) => html`
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${pet.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age: ${pet.age}</h4>
                        <h4>Weight: ${pet.weight}</h4>
                        <h4 class="donation">Donation: 0$</h4>
                    </div>

                    ${user && user._id == pet._ownerId
                        ? userTemplate(pet._id)
                        : nothing
                    }

                </div>
            </div>
        </section>
`;

const userTemplate = (petId) => html`
                    <div class="actionBtn">
                        <a href="/edit/${petId}" class="edit">Edit</a>
                        <a href="/delete/${petId}" class="remove">Delete</a>

                        <!--(Bonus Part) Only for no creator and user-->
                        <a href="#" class="donate">Donate</a>
                    </div>
`;

export const detailsView = (ctx) => {
    let petId = ctx.params.id

    petService.getOne(petId)
        .then(pet => {
            ctx.render(detailsTemplate(pet, ctx.user));
        })
}