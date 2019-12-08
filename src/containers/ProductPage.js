import React from 'react';
import * as api from '../api';
import { loggedIn } from '../services/auth';
import * as basket from '../services/basket';
import { handleChange } from '../services/handlers';
import Product from '../components/Product';
import Loading from '../components/UI/Loading';
import * as auth from '../services/auth.js';

class ProductPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			product: null,
			count: 1,
			inBasket: false
		};

		this.addToBasket = this.addToBasket.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	getProduct(id) {
		api
			.getProduct(id)
			.then((response) => this.setState({ product: response.data }))
			.catch((err) => this.setState({ product: null }));
	}

	componentDidMount() {
		this.getProduct(this.props.id);
		const basketItems = basket.get();
		if (basketItems[this.props.id]) this.setState({ inBasket: true });
	}

	handleChange(e) {
		handleChange(e, this);
	}

	addToBasket() {
		if (loggedIn()) {
			basket.addItem(this.props.id, this.state.count);
			this.setState({ inBasket: true });
		} else {
			window.location.href = '/login';
		}
	}

	render() {
		if (this.state.product === null) return <Loading />;

		return (
			<Product
				name={this.state.product.name}
				price={this.state.product.price}
				description={this.state.product.description}
        image={this.state.product.image}
        role={auth.getRole()}
				addToBasket={this.addToBasket}
				handleChange={this.handleChange}
				inBasket={this.state.inBasket}
			/>
		);
	}
}

export default ProductPage;
