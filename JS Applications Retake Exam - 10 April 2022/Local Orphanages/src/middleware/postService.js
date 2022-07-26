import * as request from './requester.js'

const baseUrl = 'http://localhost:3030';

export const getAll = () => request.get(`${baseUrl}/data/posts?sortBy=_createdOn%20desc`);

export const create = (newPost) => request.post(`${baseUrl}/data/posts`, newPost);

/*
export const getOne = (petId) => request.get(`${baseUrl}/data/pets/${petId}`);

export const edit = (editedPet, petId) => request.put(`${baseUrl}/data/pets/${petId}`, editedPet);

export const delPet = (petId) => request.del(`${baseUrl}/data/pets/${petId}`); 

*/