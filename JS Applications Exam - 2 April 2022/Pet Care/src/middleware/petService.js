import * as request from './requester.js'

const baseUrl = 'http://localhost:3030';

export const getAll = () => request.get(`${baseUrl}/data/pets?sortBy=_createdOn%20desc&distinct=name`);

export const getOne = (petId) => request.get(`${baseUrl}/data/pets/${petId}`);

export const edit = (editedPet, petId) => request.put(`${baseUrl}/data/pets/${petId}`, editedPet);

export const delPet = (petId) => request.del(`${baseUrl}/data/pets/${petId}`); 

export const createPet = (newPet) => {
    request.post(`${baseUrl}/data/pets`, newPet)
        .then(pet => {
            return pet;
        })
}