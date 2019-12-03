import React from 'react';
import ProductCard from '../UI/ProductCard';

class Home extends React.Component {
	getProducts() {
		let products = [];

		this.props.products.forEach((element) => {
			products.push(
				<ProductCard
					key={`product_card_${element.id}`}
					name={element.name}
					description={element.description}
					price={element.price}
					fav={false}
				/>
			);
		});

		return products;
	}

	render() {
		const getMoreButton = !this.props.lastPage ? (
			<div className="d-flex justify-content-center my-5">
				<button type="button" className="btn btn-danger">
					Показать больше
				</button>
			</div>
		) : null;

		return (
			<main className="container">
				<h3>Наши товары</h3>
				<div className="row">{this.getProducts()}</div>
				{getMoreButton}
			</main>
		);
	}
}

export default Home;
