import axios from 'axios';

axios.defaults.baseURL = 'https://youngview.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:8080/api';

axios.defaults.headers.common = {'Accept': 'application/json, */*'}

export const getCategories = () => axios.get('/category');
export const getCategory = (id) => axios.get(`/category/${id}`);
export const createCategory = () => axios.post('/category');
export const editCategory = (id) => axios.put(`/category/${id}`);
export const deleteCategory = (id) => axios.delete(`/category/${id}`);

export const getProducts = () => axios.get('/product');
export const getProduct = (id) => axios.get(`/product/${id}`);
