import React from 'react';
import * as api from '../api';
import Loading from '../components/UI/Loading';
import Empty from '../components/UI/Empty';
import Home from '../components/Home';

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			products: null,
			lastPage: null,
			currentPage: null
		};

		this.getMoreProducts = this.getMoreProducts.bind(this);
	}

	getProducts() {
		api
			.getProducts()
			.then((response) => {
				this.setState({
					products: response.data.data,
					lastPage: response.data.last_page,
					currentPage: response.data.current_page
				});
			})
			.catch((err) => this.setState({ products: null }));
	}

	getMoreProducts() {
		api.getProducts(this.state.currentPage + 1).then((response) => {
			const newProducts = response.data.data;
			const products = this.state.products.concat(newProducts);

			this.setState({
				products: products,
				lastPage: response.data.last_page,
				currentPage: response.data.current_page
			});
		});
	}

	componentDidMount() {
		this.getProducts();
	}

	render() {
		if (this.state.products === null) return <Loading />;
		if (this.state.products.length === 0) return <Empty />;
		return (
			<Home
				products={this.state.products}
				lastPage={this.state.lastPage === this.state.currentPage}
				getMoreProducts={this.getMoreProducts}
			/>
		);
	}
}

export default HomePage;
