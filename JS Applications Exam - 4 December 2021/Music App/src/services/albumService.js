import * as request from './requester.js';

import * as authService from '../services/authService.js';

const baseUrl = 'http://localhost:3030/data/albums';

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`);

export const getAlbum = (id) => request.get(`${baseUrl}/${id}`);

export const create = (albumName, imageUrl, price, releaseDate, artist, genre, description) => {
    let newAlbum = {
        name: albumName,
        imageUrl,
        price,
        releaseDate,
        artist,
        genre,
        description
    }

    fetch(`${baseUrl}/data/albums`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': authService.getToken(),
        },
        body: JSON.stringify(newAlbum)
    })
        .then(res => res.json())
}