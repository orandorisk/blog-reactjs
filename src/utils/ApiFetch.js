import Axios from 'axios';

const BASE_URL = 'http://localhost:3000/v1/blog/blogs';

export const ApiFetch = async () => {
    const res = await Axios.get(BASE_URL);
    return res.data;
}