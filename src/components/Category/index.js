import React from 'react';
import ProductCard from '../UI/ProductCard';

class Category extends React.Component {
	getProducts() {
		let products = [];

		this.props.products.data.forEach((element) => {
			products.push(
				<ProductCard
					key={`product_card_${element.id}`}
					name = {element.name}
					description = {element.description}
					price = {element.price}
					fav = {false}
				/>
			);
		});

		return products;
	}

	render() {
		return (
			<main className="container">
				<h3>{this.props.name}</h3>
				<div className="d-flex justify-content-end">
					<span className="mx-3">Сортировка:</span>
					<button className="mx-3">По алфавиту</button>
					<button className="mx-3">По цене</button>
				</div>
				<div className="row mt-3">{this.getProducts()}</div>
				<div className="d-flex justify-content-end my-5">
					<button type="button" className="btn btn-danger mx-2">
						1
					</button>
					<button type="button" className="btn btn-outline-danger mx-2">
						2
					</button>
					<button type="button" className="btn btn-outline-danger mx-2">
						3
					</button>
				</div>
			</main>
		);
	}
}

export default Category;
