import React from 'react';
import ProductCard from '../UI/ProductCard';

class Category extends React.Component {
	getProducts() {
		let products = [];

		this.props.products.data.forEach((element) => {
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

	getPageNumberButtons() {
		let pages = [];

		console.log(this.props.products.last_page);

		for (let i = 1; i < this.props.products.last_page + 1; i++) {
			pages.push(
				<button type="button" className="btn btn-danger mx-2">
					{i}
				</button>
			);
		}

		return pages;
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
				<div className="d-flex justify-content-end my-5">{this.getPageNumberButtons()}</div>
			</main>
		);
	}
}

export default Category;
