import * as request from './requester.js'

const baseUrl = 'http://localhost:3030';

export const getAll = () => request.get(`${baseUrl}/data/posts?sortBy=_createdOn%20desc`);

export const create = (newPost) => request.post(`${baseUrl}/data/posts`, newPost);

export const getOne = (postId) => request.get(`${baseUrl}/data/posts/${postId}`);

export const edit = (editedPost, postId) => request.put(`${baseUrl}/data/posts/${postId}`, editedPost);

export const del = (postId) => request.del(`${baseUrl}/data/posts/${postId}`); 

export const getMyPosts = (userId) => request.get(`${baseUrl}/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
