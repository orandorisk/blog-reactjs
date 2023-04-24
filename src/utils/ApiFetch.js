import Axios from 'axios';

const API = Axios.create({ baseURL: 'http://localhost:3000/v1' });

export const fetchBlogs = () => API.get('/blog/blogs');