import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './Main/Index';
import Category from './Main/Categrory';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Index} />
		<Route path="/category/:id" component={Category} />
	</Switch>
);

export default Main;
