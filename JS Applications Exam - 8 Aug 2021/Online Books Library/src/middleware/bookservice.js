import * as request from './requester.js';

const baseUrl = 'http://localhost:3030';

const api = {
    allBooks: '/data/books?sortBy=_createdOn%20desc',
    oneBook: `/data/books/`
}

export const getAll = () => request.get(baseUrl + api.allBooks)

export const getOne = (bookId) => request.get(baseUrl + api.oneBook + `${bookId}`)