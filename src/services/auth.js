export const init = (accountData) => {
	if (getAccountData() !== accountData) {
		setAccountData(accountData);
		setRole(accountData.role);
	}
};

export const login = (token) => {
	setToken(token);
	window.location.href = '/';
};

export const logout = () => {
	localStorage.clear();
	window.location.href = '/';
};

export const loggedIn = () => getToken() !== null;

export const getAccountData = () => {
	const data = localStorage.getItem('account_data');
	return data === null ? null : JSON.parse(data);
};

export const setAccountData = (accountData) => localStorage.setItem('account_data', JSON.stringify(accountData));

export const getRole = () => localStorage.getItem('role');

export const setRole = (role) => localStorage.setItem('role', role);

export const getToken = () => localStorage.getItem('token');

export const setToken = (token) => localStorage.setItem('token', token);
