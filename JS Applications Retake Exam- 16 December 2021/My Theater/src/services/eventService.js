import * as request from '../middleware/requester.js'

const baseUrl = 'http://localhost:3030';


const api = {
    getAll: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
}

export const getAll = () => request.get(baseUrl + api.getAll);
/*

export const getAllMyListings = (userId) => request.get(baseUrl + api.getAllMyListings(userId));

export const create = (newCar) => request.post(baseUrl + api.create, newCar);

export const getOne = (carId) => request.get(baseUrl + api.getOne(carId));

export const edit = (editedCar, carId) => request.put(baseUrl + api.edit(carId), editedCar);

export const del = (carId) => request.del(baseUrl + api.delete(carId));

export const search = (query) => request.get(baseUrl + api.search(query));
*/