import React, { Fragment } from 'react';

import Home from './components/Home';
import Category from './components/Category';
import Product from './components/Product';
import Account from './components/Account';

export const index = () => <Home />;

export const category = ({ match }) => <Category id={match.params.id} />;

export const product = ({ match }) => <Product id={match.params.id} />;

export const account = ({ match }) => <Account id={match.params.id} />
