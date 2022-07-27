import * as request from './requester.js'

const baseUrl = 'http://localhost:3030';

const api = {
    getAll: '/data/cars?sortBy=_createdOn%20desc',
    create: '/data/cars',
    getOne(carId) { return `/data/cars/${carId}` },
    edit(carId) { return `/data/cars/${carId}` },
}

export const getAll = () => request.get(baseUrl + api.getAll);

export const create = (newCar) => request.post(baseUrl + api.create, newCar);

export const getOne = (carId) => request.get(baseUrl + api.getOne(carId));

export const edit = (editedCar, carId) => request.put(baseUrl + api.edit(carId), editedCar);

/*

export const del = (postId) => request.del(`${baseUrl}/data/posts/${postId}`); 

export const getMyPosts = (userId) => request.get(`${baseUrl}/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);

export const hasDonated = (userId, postId) => request.get(`${baseUrl}/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`);

export const donationCount = (postId) => request.get(`${baseUrl}/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);

export const donate = (postId) => request.post(`${baseUrl}/data/donations`, { postId });
*/