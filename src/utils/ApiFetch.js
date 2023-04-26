import Axios from 'axios';

const API = Axios.create({ baseURL: 'http://localhost:3000/v1' });

export const fetchBlogs = (page) => API.get(`/blog/blogs?page=${page}&perPage=2`);
export const createPost = (data) => API.post('/blog/blog', data);