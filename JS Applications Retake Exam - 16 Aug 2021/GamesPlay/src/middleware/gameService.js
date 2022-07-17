import * as request from './requester.js'

const baseUrl = 'http://localhost:3030';

export const getAll = () => request.get(`${baseUrl}/data/games?sortBy=_createdOn%20desc`);