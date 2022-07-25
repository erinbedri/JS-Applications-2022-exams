import * as request from './requester.js'

const baseUrl = 'http://localhost:3030';

const api = {
    allBooks: '/data/books?sortBy=_createdOn%20desc',
}

export const getAll = () => request.get(baseUrl + api.allBooks)