import fetch from '../utils/fetch';

const apiUrl = 'http://localhost:5000/api/users/';

const getAllUsers = async () => {
    const result = await fetch.get(apiUrl);
    return result.data;
}

const getUserById = async (id) => {
    const result = await fetch.get(apiUrl + id);
    return result.data;
}

const deleteUser = async (id) => {
    const result = await fetch.delete(apiUrl + id);
    return result.data;
}

const updateUser = async (id, values) => {
    const result = await fetch.put(apiUrl + id, values);
    return result.data;
}

const createUser = async (values) => {
    const result = await fetch.post(apiUrl, values);
    return result.data;
}

export default {
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser,
    createUser,
}