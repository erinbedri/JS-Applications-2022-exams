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
                        ? html`
                            <div class="actionBtn">
                                <a href="/edit/${pet._id}" class="edit">Edit</a>
                                <a href="/delete/${pet._id}" class="remove">Delete</a>`
                        : nothing
                    }    

                    ${!user || user._id != pet._ownerId
                        ? html`
                            <a href="/donate/${pet._id}" class="donate">Donate</a>`
                        : nothing
                    } 

                </div>
            </div>
        </section>
`;

export const detailsView = (ctx) => {
    let petId = ctx.params.id

    petService.getOne(petId)
        .then(pet => {
            ctx.render(detailsTemplate(pet, ctx.user));
        })
        .catch(err => {
            alert(err);
        })
}