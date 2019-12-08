import React from 'react';
import * as basket from '../../services/basket';

import Bin from '../../assets/img/bin.svg';
import Empty from '../../components/UI/Empty';

class BasketProductCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: this.props.count
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		basket.addItem(this.props.id, e.target.value);

		if (e.target.value > 0) this.setState({ count: e.target.value });
	}

	render() {
		const { id, name, price, description, image, removeItem } = this.props;

		return (
			<div className="card mb-4" style={{ padding: '10px', minWidth: '200px' }}>
				<div className="row no-gutters align-items-center">
					<div className="col-md-3">
						<img src={image} alt="Изображение товара" className="card-img" alt="..." />
					</div>
					<div className="col-md-7">
						<div className="card-body">
							<h5 className="card-title">{name}</h5>
							<p className="card-text" style={{ overflow: 'hidden' }}>
								{description}
							</p>
						</div>
					</div>
					<div className="col-md-2" style={{ textAlign: 'center' }}>
						<button
							onClick={() => removeItem(id)}
							type="button"
							className="btn btn-light"
							style={{ textAlign: 'center' }}
						>
							<img src={Bin} alt="Удалить" />
							<p className="card-text">
								<small className="text-muted">Удалить</small>
							</p>
						</button>
					</div>
				</div>
				<hr />

				<div className="row">
					<div className="col-sm" style={{ textAlign: 'center' }}>
						<p className="card-text">Количество:</p>
					</div>
					<div className="col-sm" style={{ textAlign: 'center' }}>
						<input
							type="number"
							onChange={this.handleChange}
							value={this.state.count}
							style={{ width: '110px', borderRadius: '3px' }}
						/>
					</div>
				</div>
				<hr />

				<div className="row">
					<div className="col-sm" style={{ textAlign: 'center' }}>
						<p className="card-text">Цена:</p>
					</div>
					<div className="col-sm" style={{ textAlign: 'center' }}>
						<p className="card-text">{price} Р</p>
					</div>
				</div>
			</div>
		);
	}
}

class Basket extends React.Component {
	getProducts() {
		let products = [];

		this.props.products.forEach((element) =>
			products.push(
				<BasketProductCard
					key={`basket_item_${element.id}`}
					id={element.id}
					name={element.name}
					price={element.price}
					description={element.description}
					image={element.image}
					count={element.count}
					removeItem={this.props.removeItem}
				/>
			)
		);

		return products;
	}

	render() {
		const products = this.getProducts();

		if (products.length === 0 && this.props.orderSuccess)
			return (
				<div>
					<div className="alert alert-success" hidden={!this.props.orderSuccess}>
						Заказ успешно оплачен
					</div>
					<Empty />
				</div>
			);

		if (products.length === 0) return <Empty />;

		return (
			<div className="container mt-1" style={{ padding: '0px' }}>
				<div className="row justify-content-center">
					{products}
					<button onClick={this.props.makeOrder} type="button" className="btn btn-danger">
						Купить
					</button>
				</div>
			</div>
		);
	}
}

export default Basket;
