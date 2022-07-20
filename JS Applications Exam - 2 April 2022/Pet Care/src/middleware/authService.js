import * as request from './requester.js'

const baseUrl = 'http://localhost:3030';

export const getUser = () => {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        let user = JSON.parse(serializedUser);

        return user;
    }
}

export const getToken = () => {
    return getUser()?.accessToken;
}

const saveUser = (user) => {
    localStorage.setItem('user', user);
}

export const login = (email, password) => {
    request.post(`${baseUrl}/users/login`)
        .then(user => {
            saveUser(user);
        })
} 