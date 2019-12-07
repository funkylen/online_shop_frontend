import React from 'react';
import ProductCard from '../UI/ProductCard';

class Category extends React.Component {
	getProducts() {
		let products = [];

		this.props.products.data.forEach((element) => {
			products.push(
				<ProductCard
					key={`product_card_${element.id}`}
					id={element.id}
					name={element.name}
					description={element.description}
					price={element.price}
				/>
			);
		});

		return products;
	}

	render() {
		const { getPreviousPageData, getNextPageData, firstPage, lastPage } = this.props;
		return (
			<main className="container">
				<h3>{this.props.name}</h3>
				<div className="row mt-3">{this.getProducts()}</div>
				<div className="d-flex justify-content-around my-5">
					<button
						onClick={getPreviousPageData}
						disabled={firstPage ? true : false}
						type="button"
						className="btn btn-danger mx-2"
					>
						Предыдущая страница
					</button>
					<button
						onClick={getNextPageData}
						disabled={lastPage ? true : false}
						type="button"
						className="btn btn-danger mx-2"
					>
						Следующая страница
					</button>
				</div>
			</main>
		);
	}
}

export default Category;
