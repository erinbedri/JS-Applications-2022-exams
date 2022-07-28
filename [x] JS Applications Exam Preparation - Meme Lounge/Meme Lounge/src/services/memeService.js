import * as request from '../middleware/requester.js';

const baseUrl = 'http://localhost:3030';


const api = {
    create: '/data/memes',
    getAll: '/data/memes?sortBy=_createdOn%20desc',
    getOne: (id) => `/data/memes/${id}`, 
    del: (id) => `/data/memes/${id}`,
    edit: (id) => `/data/memes/${id}`,
    getUserMemes: (id) => `/data/memes?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`
}

export const create = (newMeme) => request.post(baseUrl + api.create, newMeme);

export const getAll = () => request.get(baseUrl + api.getAll);

export const getOne = (memeId) => request.get(baseUrl + api.getOne(memeId));

export const del = (memeId) => request.del(baseUrl + api.del(memeId));

export const edit = (memeId, editedMeme) => request.put(baseUrl + api.edit(memeId), editedMeme);

export const getUserMemes = (userId) => request.get(baseUrl + api.getUserMemes(userId));
