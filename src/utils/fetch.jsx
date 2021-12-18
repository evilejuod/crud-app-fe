
const headers = {
    'Content-type': 'application/json',
}

const get = async (url) => {
    const resp = await fetch(url, {
        method: 'GET',
        headers,
    });

    const result = await resp.json();

    return result;
}

const deleteMethod = async (url) => {
    const resp = await fetch(url, {
        method: 'DELETE',
        headers,
    });

    const result = await resp.json();

    return result;
}

const put = async (url, values) => {
    const resp = await fetch(url, {
        method: 'PUT',
        headers,
        body: JSON.stringify(values)
    });

    const result = await resp.json();

    return result;
}

const post = async (url, values) => {
    const resp = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(values)
    });

    const result = await resp.json();

    return result;
}

export default {
    get,
    delete: deleteMethod,
    post,
    put
}