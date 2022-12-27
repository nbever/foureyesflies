const authFetch = async (url, body) => {
    const response = await fetch(url, body);

    if (response.status === 405 || response.status === 401) {
        window.location = '/login';
        return;
    }

    const j_response = await response.json();
    return j_response;
};

export default authFetch;