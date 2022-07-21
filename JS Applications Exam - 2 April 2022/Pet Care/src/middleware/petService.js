import * as request from './requester.js'

const baseUrl = 'http://localhost:3030';

export const getAll = () => request.get(`${baseUrl}/data/pets?sortBy=_createdOn%20desc&distinct=name`);

export const createPet = (pet) => {
    request.post(`${baseUrl}/data/pets`, pet)
        .then(pet => {
            return pet;
        })
}