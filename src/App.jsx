import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as pages from './pages';
import * as api from './api';
import * as auth from './services/auth';

import Loading from './components/UI/Loading';
import Header from './containers/Header';
import Footer from './components/Footer';

class App extends React.Component {
	state = {
		loading: true
	};

	componentDidMount() {
		api
			.init()
			.then((response) => {
				auth.init(response.data);
				this.setState({ loading: false });
			})
			.catch(() => {
				localStorage.clear();
				this.setState({ loading: false });
			});
	}

	render() {
		return this.state.loading ? (
			<Loading />
		) : (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={pages.index} />
					<Route path="/category/:id" component={pages.category} />
					<Route path="/product/:id" component={pages.product} />
					<Route path="/account/orders" component={pages.orders} />
					<Route path="/account/settings" component={pages.settings} />
					<Route path="/account/basket" component={pages.basket} />
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
