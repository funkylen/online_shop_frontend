import React, { Fragment } from 'react';

import HomePage from './containers/HomePage';
import CategoryPage from './containers/CategoryPage';

export const index = () => <HomePage />;

export const category = ({ match }) => {
	return <CategoryPage id={match.params.id} />;
};
