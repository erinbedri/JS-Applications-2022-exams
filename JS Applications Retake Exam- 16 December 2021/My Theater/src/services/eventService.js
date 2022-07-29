import * as request from '../middleware/requester.js'

const baseUrl = 'http://localhost:3030';


const api = {
    getAll: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    create: '/data/theaters',
    getOne: (id) => `/data/theaters/${id}`,
}

export const getAll = () => request.get(baseUrl + api.getAll);

export const create = (newEvent) => request.post(baseUrl + api.create, newEvent);

export const getOne = (eventId) => request.get(baseUrl + api.getOne(eventId));
/*

export const getAllMyListings = (userId) => request.get(baseUrl + api.getAllMyListings(userId));



export const edit = (editedCar, carId) => request.put(baseUrl + api.edit(carId), editedCar);

export const del = (carId) => request.del(baseUrl + api.delete(carId));

export const search = (query) => request.get(baseUrl + api.search(query));
*/