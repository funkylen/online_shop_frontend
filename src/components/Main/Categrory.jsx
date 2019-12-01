import React from 'react';
import ProductCard from './ProductCard';

class Category extends React.Component {
	getProducts() {
		let products = [];

		for (let i = 0; i < 8; i++) {
			products.push(<ProductCard key={`product_card_${i}`} />);
		}

		return products;
	}

	render() {
		return (
			<main className="container">
				<h3>Товары в категории {this.props.match.params.id}</h3>
				<div className="d-flex justify-content-end">
					<span className="mx-3">Сортировка:</span>
					<button className="mx-3">По алфавиту</button>
					<button className="mx-3">По цене</button>
				</div>
				<div className="row">{this.getProducts()}</div>
				<div className="d-flex justify-content-end my-5">
					<button type="button" class="btn btn-danger mx-2">
						1
					</button>
					<button type="button" class="btn btn-outline-danger mx-2">
						2
					</button>
					<button type="button" class="btn btn-outline-danger mx-2">
						3
					</button>
				</div>
			</main>
		);
	}
}

export default Category;
