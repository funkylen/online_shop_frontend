import React from 'react';

class Orders extends React.Component {
	getProductCards() {
		let productCards = [];

		this.props.products.forEach((element) => {
			productCards.push(
				<div className="row align-items-center border" style={{ height: '200px' }}>
					<div className="col-4 image">
						<img src={element.image} alt="Изображение товара" className="w-100" />
					</div>
					<div className="col-8 image">
						<div className="row m-3">
							<div className="col">Наименование</div>
							<div className="col">{element.name}</div>
						</div>
						<div className="row m-3">
							<div className="col">Количество</div>
							<div className="col">{element.count}</div>
						</div>
						<div className="row m-3">
							<div className="col">Стоимость</div>
							<div className="col">{element.price}</div>
						</div>
					</div>
				</div>
			);
		});

		return productCards;
	}

	render() {
		return (
			<div className="container mt-1 p-0 mb-5">
				<div className="card mb-4">
					<h5 className="card-header">Заказ №{this.props.id}</h5>
					<div className="card-body">
						<div className="row justify-content-around align-items-center">
							<div className="col-sm">
								<p>Статус</p>
							</div>
							<div className="col-sm">
								<p className="badge badge-success">
									<strong>Оплачен</strong>
								</p>
							</div>
						</div>
						<div className="row justify-content-around align-items-center">
							<div className="col-sm">
								<p>Дата заказа</p>
							</div>
							<div className="col-sm">
								<p>{this.props.date}</p>
							</div>
						</div>
						<div className="row justify-content-around align-items-center">
							<div className="col-sm">
								<p>Сумма заказа</p>
							</div>
							<div className="col-sm">
								<p>{this.props.orderSum} Р</p>
							</div>
						</div>
					</div>
					<div className="card-header">{this.getProductCards()}</div>
				</div>
			</div>
		);
	}
}

export default Orders;
