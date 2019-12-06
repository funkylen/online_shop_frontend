import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as pages from './pages';

import Header from './containers/Header';
import Footer from './components/Footer';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={pages.index} />
					<Route path="/category/:id" component={pages.category} />
					<Route path="/product/:id" component={pages.product} />
					<Route path="/account/orders" component={pages.orders} />
					<Route path="/account/settings" component={pages.settings} />
					<Route path="/account/add-product" component={pages.addProduct} />
					<Route path="/account/add-category" component={pages.addCategory} />
					<Route path="/login" component={pages.login} />
					<Route path="/register" component={pages.register} />
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;
