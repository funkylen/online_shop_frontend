import React from 'react';
import { Redirect } from 'react-router-dom';
import * as api from '../api';
import { loggedIn } from '../services/auth';
import Product from '../components/Product';
import Loading from '../components/UI/Loading';

class ProductPage extends React.Component {
	state = {
		product: null
	};

	getProduct(id) {
		api
			.getProduct(id)
			.then((response) => this.setState({ product: response.data }))
			.catch((err) => this.setState({ product: null }));
	}

	componentDidMount() {
		this.getProduct(this.props.id);
	}

	addToBasket() {
		if (loggedIn()) {
			alert('Товар добавлен в корзину');
		} else {
			window.location.href = '/login';
		}
	}

	render() {
		return this.state.product === null ? (
			<Loading />
		) : (
			<Product
				name={this.state.product.name}
				price={this.state.product.price}
				description={this.state.product.description}
				image={this.state.product.image}
				addToBasket={this.addToBasket}
			/>
		);
	}
}

export default ProductPage;
