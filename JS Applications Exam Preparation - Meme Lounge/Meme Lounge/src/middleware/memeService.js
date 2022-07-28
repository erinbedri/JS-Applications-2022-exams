import * as request from './requester.js'

const baseUrl = 'http://localhost:3030';


const api = {
    create: '/data/memes',
    getAll: '/data/memes?sortBy=_createdOn%20desc',
}

export const create = (newMeme) => request.post(baseUrl + api.create, newMeme);

export const getAll = () => request.get(baseUrl + api.getAll);
