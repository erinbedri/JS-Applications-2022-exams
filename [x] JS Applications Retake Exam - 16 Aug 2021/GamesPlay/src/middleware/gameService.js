import * as request from './requester.js'

const baseUrl = 'http://localhost:3030';

export const getOne = (gameId) => request.get(`${baseUrl}/data/games/${gameId}`);

export const getAll = () => request.get(`${baseUrl}/data/games?sortBy=_createdOn%20desc`);

export const getAllForHomePage = () => request.get(`${baseUrl}/data/games?sortBy=_createdOn%20desc&distinct=category`);

export const create = (newGame) => request.post(`${baseUrl}/data/games`, newGame);

export const delGame = (gameId) => request.del(`${baseUrl}/data/games/${gameId}`);

export const edit = (game, gameId) => request.put(`${baseUrl}/data/games/${gameId}`, game);