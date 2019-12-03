import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as pages from './pages';

import Header from './components/Header';
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
          <Route path="/account/:id" component={pages.account} />
          {/* <Route path="/account/orders" component={pages.orders} /> */}
          {/* <Route path="/account/ordersEmpty" component={pages.ordersEmpty} /> */}
          {/* <Route path="/account/settings" component={pages.settings} /> */}
				</Switch>
				<Footer />
			</Router> 
		);
	}
}

export default App;
