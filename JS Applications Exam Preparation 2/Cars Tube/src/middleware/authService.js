import * as request from './requester.js'

const baseUrl = 'http://localhost:3030';

export const getUser = () => {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        let user = JSON.parse(serializedUser);

        return user;
    }
}

const saveUser = (user) => {
    if (user.accessToken) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}

export const getToken = () => {
    return getUser()?.accessToken;
}

export const login = (username, password) =>
    request.post(`${baseUrl}/users/login`, { username, password })
        .then(user => {
            saveUser(user);

            return user;
        })

export const register = (username, password) =>
    request.post(`${baseUrl}/users/register`, { username, password })
        .then(user => {
            saveUser(user);

            return user;
        });

export const logout = () => {
    fetch(`${baseUrl}/users/logout`, { headers: { 'X-Authorization': getToken() } })
        .then(() => {
            localStorage.removeItem('user');
        })
}
