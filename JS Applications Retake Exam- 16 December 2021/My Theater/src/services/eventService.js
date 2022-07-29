import * as request from '../middleware/requester.js'

const baseUrl = 'http://localhost:3030';


const api = {
    getAll: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    create: '/data/theaters',
    getOne: (id) => `/data/theaters/${id}`,
    edit: (id) => `/data/theaters/${id}`,
    delete: (id) => `/data/theaters/${id}`,
    getMyEvents: (id) => `/data/theaters?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`
}

export const getAll = () => request.get(baseUrl + api.getAll);

export const create = (newEvent) => request.post(baseUrl + api.create, newEvent);

export const getOne = (eventId) => request.get(baseUrl + api.getOne(eventId));

export const edit = (editedEvent, eventId) => request.put(baseUrl + api.edit(eventId), editedEvent);

export const del = (eventId) => request.del(baseUrl + api.delete(eventId));

export const getMyEvents = (userId) => request.get(baseUrl + api.getMyEvents(userId));

/*






export const search = (query) => request.get(baseUrl + api.search(query));
*/