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
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;
