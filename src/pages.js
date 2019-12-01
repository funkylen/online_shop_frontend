import React, { Fragment } from 'react';

import Home from './components/Home';
import Category from './components/Category';

export const index = () => <Home />;

export const category = ({ match }) => <Category id={match.params.id} />;
