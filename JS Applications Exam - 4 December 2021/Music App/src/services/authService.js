import * as request from './requester.js';

const baseUrl = 'http://localhost:3030';

const saveUser = (user) => {
    if (user.accessToken) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}

const clearUser = () => {
    localStorage.removeItem('user')
}

export const getUser = () => {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        let user = JSON.parse(serializedUser);

        return user;
    }
}

export const login = (email, password) =>
    request.post(`${baseUrl}/users/login`, { email, password })
        .then(user => {
            saveUser(user);

            return user;
        });

export const register = (email, password) =>
    request.post(`${baseUrl}/users/register`, { email, password })
        .then(user => {
            saveUser(user);

            return user;
        });

export const logout = () =>
    fetch(`${baseUrl}/users/logout`, { headers: { 'X-Authorization': getToken() } })
        .then(() => {
            clearUser();
        });

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
            'X-Authorization': getToken(),
        },
        body: JSON.stringify(newAlbum)
    })
        .then(res => res.json())
}

const getToken = () => {
    return getUser()?.accessToken;
}