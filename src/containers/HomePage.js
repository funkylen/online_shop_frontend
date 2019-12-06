import React from 'react';
import * as api from '../api';
import Loading from '../components/UI/Loading';
import Home from '../components/Home';

class HomePage extends React.Component {
	state = {
		products: null
	};

	getProducts() {
		api
			.getProducts()
			.then((response) => this.setState({ products: response.data }))
			.catch((err) => this.setState({ products: null }));
	}

	componentDidMount() {
		this.getProducts();
	}

	componentWillReceiveProps() {
		this.getProducts();
	}

	render() {
		return this.state.products === null ? (
			<Loading />
		) : (
			<Home
				products={this.state.products.data}
				lastPage={this.state.products.last_page === this.state.products.current_page}
			/>
		);
	}
}

export default HomePage;
