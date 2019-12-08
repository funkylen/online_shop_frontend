import React from 'react';
import ProductCard from '../UI/ProductCard';
import Empty from '../UI/Empty';

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
					image={element.image}
					price={element.price}
				/>
			);
		});

		return products;
	}

	render() {
		const { getPreviousPageData, getNextPageData, firstPage, lastPage } = this.props;
		const products = this.getProducts();

		if (products.length === 0) {
			return (
				<main className="container">
					<h3>{this.props.name}</h3>
					<Empty />
				</main>
			);
		} else {
			return (
				<main className="container">
					<h3>{this.props.name}</h3>
					<div>
						<div className="row mt-3">{products}</div>
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
					</div>
					)
				</main>
			);
		}
	}
}

export default Category;
