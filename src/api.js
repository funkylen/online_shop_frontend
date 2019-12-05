import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

export const getCategories = () => axios.get('/category');
export const getCategory = (id) => axios.get(`/category/${id}`);
export const createCategory = () => axios.post('/category');
export const editCategory = (id) => axios.put(`/category/${id}`);
export const deleteCategory = (id) => axios.delete(`/category/${id}`);

export const getProducts = () => ({
	current_page: 1,
	data: [
		{
			id: 1,
			category_id: 1,
			name: 'Товар',
			description: 'Описание',
			price: 1500,
			image: null,
			created_at: '2019-12-05 18:26:34',
			updated_at: '2019-12-05 18:26:34'
		}
	],
	first_page_url: 'http://youngview.herokuapp.com/api/product?page=1',
	from: 1,
	last_page: 1,
	last_page_url: 'http://youngview.herokuapp.com/api/product?page=1',
	next_page_url: null,
	path: 'http://youngview.herokuapp.com/api/product',
	per_page: 8,
	prev_page_url: null,
	to: 1,
	total: 1
});
