import axios from 'axios';
import * as auth from './services/auth';

// axios.defaults.baseURL = 'https://youngview.herokuapp.com/api';
axios.defaults.baseURL = 'http://localhost:8080/api';

axios.defaults.headers.common = auth.loggedIn()
	? {
			Accept: 'application/json, */*',
			Authorization: `Bearer ${auth.getToken()}`,
			'Content-Type': 'application/json'
		}
	: {
			Accept: 'application/json, */*',
			'Content-Type': 'application/json'
		};

export const login = (email, password) =>
	axios.post('/login', {
		email: email,
		password: password
	});

export const register = (email, password, surname, name, patronymic, phone) => {
	const data = {
		email: email,
		password: password,
		password_confirmation: password,
		surname: surname,
		name: name
	};

	if (patronymic) data.patronymic = patronymic;
	if (phone) data.phone = phone;

	return axios.post('/register', data);
};

export const init = () => axios.get('/init');

export const getCategories = () => axios.get('/category');
export const getCategory = (id) => axios.get(`/category/${id}`);
export const createCategory = () => axios.post('/category');
export const editCategory = (id) => axios.put(`/category/${id}`);
export const deleteCategory = (id) => axios.delete(`/category/${id}`);

export const getProducts = (page = 1) => axios.get(`/product?page=${page}`);
export const getProduct = (id) => axios.get(`/product/${id}`);
