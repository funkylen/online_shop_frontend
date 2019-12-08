import React from 'react';

import HomePage from './containers/HomePage';
import CategoryPage from './containers/CategoryPage';
import ProductPage from './containers/ProductPage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import AddProductPage from './containers/Account/AddProductPage';
import AddCategoryPage from './containers/Account/AddCategoryPage';
import BasketPage from './containers/Account/BasketPage';
import { OrdersPage, SettingsPage } from './containers/Account/AccountPage';
import SearchPage from './containers/SearchPage';

export const index = () => <HomePage />;

export const category = ({ match }) => <CategoryPage id={match.params.id} />;

export const product = ({ match }) => <ProductPage id={match.params.id} />;

export const orders = () => <OrdersPage />;

export const settings = () => <SettingsPage />;

export const addCategory = () => <AddCategoryPage />;

export const addProduct = () => <AddProductPage />;

export const login = () => <LoginPage />;

export const register = () => <RegisterPage />;

export const basket = () => <BasketPage />;

export const search = ({ location }) => <SearchPage search={location.search} />;
