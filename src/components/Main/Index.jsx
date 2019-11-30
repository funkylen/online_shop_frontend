import React from 'react';
import ProductCard from './ProductCard';

class Index extends React.Component {
	getProducts() {
		let products = [];

		for (let i = 0; i < 8; i++) {
			products.push(<ProductCard />);
		}

		return products;
	}

	render() {
		return (
			<main className="container">
				<div className="row">{this.getProducts()}</div>
				<div className="d-flex justify-content-center my-5">
					<button type="button" class="btn btn-danger">
						Все товары
					</button>
				</div>
			</main>
		);
	}
}

export default Index;
