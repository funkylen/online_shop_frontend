import React, { Fragment } from 'react';

import Home from './components/Home';
import Category from './components/Category';
import Product from './components/Product';
import Account from './components/Account';
// import Orders from './components/Account';
// import OrdersEmpty from './components/Account';
// import Settings from './components/Account';
// import AddCategory from './components/Account';
// import AddProduct from './components/Account';

export const index = () => <Home />;

export const category = ({ match }) => <Category id={match.params.id} />;

export const product = ({ match }) => <Product id={match.params.id} />;

export const account = ({ match }) => <Account id={match.params.id} />;

// export const orders = ({ match }) => <Orders id={match.params.id} />;

// export const ordersEmpty = ({ match }) => <OrdersEmpty id={match.params.id} />;

// export const settings = ({ match }) => <Settings id={match.params.id} />;

// export const addCategory = ({ match }) => <AddCategory id={match.params.id} />;

// export const addProduct = ({ match }) => <AddProduct id={match.params.id} />;