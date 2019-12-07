import React from 'react';

import HomePage from './containers/HomePage';
import CategoryPage from './containers/CategoryPage';
import ProductPage from './containers/ProductPage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import { OrdersPage, SettingsPage, AddProductPage, AddCategoryPage, BasketPage } from './containers/AccountPage';

export const index = () => <HomePage />;

export const category = ({ match }) => <CategoryPage id={match.params.id} />;

export const product = ({ match }) => <ProductPage id={match.params.id} />;

export const orders = () => <OrdersPage />

export const settings = () => <SettingsPage />

export const addCategory = () => <AddCategoryPage />

export const addProduct = () => <AddProductPage />

export const login = () => <LoginPage />;

export const register = () => <RegisterPage />;

export const basket = () => <BasketPage />;
