import React from 'react';
import * as api from '../api';
import Product from '../components/Product';
import Loading from '../components/UI/Loading';

class ProductPage extends React.Component {
	state = {
		product: null
	};

	getProduct(id) {
		this.setState({product:api.getProduct(id)})
	}

	componentDidMount() {
		this.getProduct(this.props.id);
	}

	render() {
    console.log(this.state);
    return this.state.product === null ? (
			<Loading />
		) : (
    <Product 
      name = {this.state.product.name}
      price = {this.state.product.price}
      description = {this.state.product.description}
      image = {this.state.product.image}
    /> 
    );
	}
}

export default ProductPage;
