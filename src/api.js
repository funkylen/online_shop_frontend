import axios from 'axios';

axios.defaults.baseURL = 'http://youngview.herokuapp.com/api';

export const getCategories = () => axios.get('/category');
export const getCategory = (id) => axios.get(`/category/${id}`);
export const createCategory = () => axios.post('/category');
export const editCategory = (id) => axios.put(`/category/${id}`);
export const deleteCategory = (id) => axios.delete(`/category/${id}`);

export const getProducts = () => axios.get('/product');
export const getProduct = (id) => ({
			id: 1,
			category_id: 1,
			name: 'Товар',
			description: 'Описание',
			price: 1500,
			image: null,
			created_at: '2019-12-05 18:26:34',
			updated_at: '2019-12-05 18:26:34'
});
