import {JSON_HEADER} from './constants';

export const login = async (args) => {

    const resp = await fetch('/api/login', {
        method: 'POST',
        headers: JSON_HEADER,
        body: JSON.stringify(args)
    });

    const data = await resp.json();

    const profile_image_response = await fetch('/api/profileimage', {
        method: 'GET',
        headers: {
            'Content-Type': 'image/jpeg;charset=utf-8'
        }
    });

    data.profile_image = await profile_image_response.text()
    return data;
};

export const logout = async () => {
    const resp = await fetch('/api/logout', {
        method: 'POST'
    });

    return;
}