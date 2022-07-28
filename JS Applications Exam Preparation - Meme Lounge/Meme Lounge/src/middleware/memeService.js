import * as request from './requester.js'

const baseUrl = 'http://localhost:3030';


const api = {
    create: '/data/memes',
    getAll: '/data/memes?sortBy=_createdOn%20desc',
    getOne: (id) => `/data/memes/${id}`, 
    del: (id) => `/data/memes/${id}`,
}

export const create = (newMeme) => request.post(baseUrl + api.create, newMeme);

export const getAll = () => request.get(baseUrl + api.getAll);

export const getOne = (memeId) => request.get(baseUrl + api.getOne(memeId));

export const del = (memeId) => request.del(baseUrl + api.del(memeId));
