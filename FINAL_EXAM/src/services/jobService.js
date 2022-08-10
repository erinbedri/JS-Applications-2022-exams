import * as request from '../middleware/requester.js'

const baseUrl = 'http://localhost:3030';

const api = {
    getAll: '/data/offers?sortBy=_createdOn%20desc',
    create: '/data/offers',
    getOne: (id) => `/data/offers/${id}`,
    edit: (id) => `/data/offers/${id}`,
    delete: (id) => `/data/offers/${id}`,
    applications: '/data/applications',
    hasLiked: (userId, jobId) => `/data/applications?where=offerId%3D%22${jobId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    count: (jobId) => `/data/applications?where=offerId%3D%22${jobId}%22&distinct=_ownerId&count`
}

export const getAll = () => request.get(baseUrl + api.getAll);

export const create = (newJob) => request.post(baseUrl + api.create, newJob);

export const getOne = (carId) => request.get(baseUrl + api.getOne(carId));

export const edit = (editedJob, jobId) => request.put(baseUrl + api.edit(jobId), editedJob);

export const del = (jobId) => request.del(baseUrl + api.delete(jobId));

export const apply = (offerId) => request.post(baseUrl + api.applications, { offerId });

export const hasLiked = (userId, jobId) => request.get(baseUrl + api.hasLiked(userId, jobId));

export const applicationsCount = (jobId) => request.get(baseUrl + api.count(jobId));
