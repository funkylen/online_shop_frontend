export const init = (role) => {
	if (getRole() !== role) setRole(role);
};

export const login = (token) => {
	localStorage.setItem('token', token);
	window.location.href = '/';
};

export const logout = () => {
	removeToken();
	window.location.href = '/';
};

export const loggedIn = () => getToken() !== null;

export const getRole = () => localStorage.getItem('role');

export const setRole = (role) => localStorage.setItem('role', role);

export const getToken = () => localStorage.getItem('token');

export const setToken = (token) => localStorage.setItem('token', token);

export const removeToken = () => localStorage.removeItem('token');
