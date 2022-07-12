import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/users';

const saveUser = (user) => {
    if (user.authenticationToken) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}

export const login = (email, password) =>
    request.post(`${baseUrl}/login`, {email, password})
        .then(user => {
            saveUser(user);

            return user;
        });

