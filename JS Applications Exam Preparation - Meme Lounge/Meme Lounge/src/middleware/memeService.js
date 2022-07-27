import * as request from './requester.js'

const baseUrl = 'http://localhost:3030';

/*
const api = {
    getAll: '/data/cars?sortBy=_createdOn%20desc',
    create: '/data/cars',
    getOne: (id) => `/data/cars/${id}`,
    getAllMyListings: (id) => `/data/cars?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`,
    edit: (id) => `/data/cars/${id}`,
    delete: (id) => `/data/cars/${id}`,
    search: (query) => `/data/cars?where=year%3D${query}`
}

export const getAll = () => request.get(baseUrl + api.getAll);

export const getAllMyListings = (userId) => request.get(baseUrl + api.getAllMyListings(userId));

export const create = (newCar) => request.post(baseUrl + api.create, newCar);

export const getOne = (carId) => request.get(baseUrl + api.getOne(carId));

export const edit = (editedCar, carId) => request.put(baseUrl + api.edit(carId), editedCar);

export const del = (carId) => request.del(baseUrl + api.delete(carId));

export const search = (query) => request.get(baseUrl + api.search(query));
*/