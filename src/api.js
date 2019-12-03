import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

export const getCategories = () => axios.get('/category');
export const getCategory = (id) => axios.get(`/category/${id}`);
export const createCategory = () => axios.post('/category');
export const editCategory = (id) => axios.put(`/category/${id}`);
export const deleteCategory = (id) => axios.delete(`/category/${id}`); 

export const getProducts = () => axios.get('/product');
