import * as request from './requester.js';

import * as authService from '../services/authService.js';

const baseUrl = 'http://localhost:3030/data/albums';

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`);

export const getAlbum = (id) => request.get(`${baseUrl}/${id}`);

export const create = (album) => {
    request.post(`${baseUrl}`, album)
};

export const edit = (album, id) => {
    request.put(`${baseUrl}/${id}`, album)
};