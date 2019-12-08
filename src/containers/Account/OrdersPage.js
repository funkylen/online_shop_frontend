import React from 'react';
import * as api from '../../api';
import Orders from '../../components/Account/Orders';
import AccountPage from './AccountPage';
import Loading from '../../components/UI/Loading';
import Empty from '../../components/UI/Empty';

class OrdersPage extends React.Component {
	state = {
		orders: null
	};

	componentDidMount() {
		api.getOrders().then((response) => this.setState({ orders: response.data }));
	}

	getOrders() {
		let orders = [];
		this.state.orders.forEach((element) => {
			let orderSum = 0;
			element.products.forEach((product) => (orderSum += product.price * product.count));
			orders.push(
				<Orders
					key={`order_id_${element.id}`}
					id={element.id}
					date={element.created_at}
					products={element.products}
					orderSum={orderSum}
				/>
			);
		});
		return orders;
	}

	render() {
		if (this.state.orders === null)
			return (
				<AccountPage>
					<Loading />
				</AccountPage>
			);
		if (this.state.orders.length === 0)
			return (
				<AccountPage>
					<Empty />
				</AccountPage>
			);

		console.log(this.state);
		return <AccountPage>{this.getOrders()}</AccountPage>;
	}
}

export default OrdersPage;
