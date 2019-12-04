import React, { Fragment } from 'react';

import Product from './components/Product';
import Account from './components/Account';
import Orders from './components/Account/Orders';
import Settings from './components/Account/Settings';
import AddCategory from './components/Account/AddCategory';
import AddProduct from './components/Account/AddProduct';

import HomePage from './containers/HomePage';
import CategoryPage from './containers/CategoryPage';

export const index = () => <HomePage />;

export const category = ({ match }) => <CategoryPage id={match.params.id} />;

export const product = ({ match }) => <Product id={match.params.id} />;

export const orders = ({ match }) => (
	<Account match={match}>
		<Orders />
	</Account>
);

export const settings = ({ match }) => (
	<Account match={match}>
		<Settings />
	</Account>
);

export const addCategory = ({ match }) => (
	<Account match={match}>
		<AddCategory />
	</Account>
);

export const addProduct = ({ match }) => (
	<Account match={match}>
		<AddProduct />
	</Account>
);
