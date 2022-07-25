import * as request from './requester.js';

const baseUrl = 'http://localhost:3030';

const api = {
    allBooks: '/data/books?sortBy=_createdOn%20desc',
    oneBook: '/data/books/',
    create: '/data/books',
    edit: '/data/books/',
    delete: '/data/books/',
}

export const getAll = () => request.get(baseUrl + api.allBooks);

export const getAllMyBooks = (userId) => request.get(baseUrl + `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);

export const getOne = (bookId) => request.get(baseUrl + api.oneBook + `${bookId}`);

export const create = (newBook) => request.post(baseUrl + api.create, newBook);

export const edit = (bookId, editedBook) => request.put(baseUrl + api.edit + `${bookId}`, editedBook);

export const del = (bookId) => request.del(baseUrl + api.delete + `${bookId}`);
