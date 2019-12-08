export const get = () => {
	const basket = localStorage.getItem('basket');
	return basket ? JSON.parse(basket) : {};
};

export const addItem = (id, count) => {
	const basket = get();
	basket[id] = count;
	set(basket);
};

export const removeItem = (id) => {
	const basket = get();
	delete basket[id];
	set(basket);
};

export const clear = () => localStorage.removeItem('basket');

const set = (basket) => {
	localStorage.setItem('basket', JSON.stringify(basket));
};