import React from 'react';
import * as basket from '../../services/basket';
import * as api from '../../api';
import AccountPage from './AccountPage';
import Loading from '../../components/UI/Loading';
import Basket from '../../components/Account/Basket';

export class BasketPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			products: [],
			success: false,
			loading: true
		};

		this.removeItem = this.removeItem.bind(this);
	}

	componentDidMount() {
		const items = basket.get();

		Object.keys(items).forEach((id) => {
			api.getProduct(id).then((response) => {
				const products = this.state.products;
				let product = response.data;
				product.count = items[id];
				products[id] = product;
				this.setState({ products: products });
			});
		});

		this.setState({ loading: false });
	}

	removeItem(id) {
		basket.removeItem(id);

		const products = this.state.products;

		delete products[id];

		this.setState({ products: products });
	}

	render() {
		if (this.state.loading) return <Loading />;
		return (
			<AccountPage>
				<Basket products={Object.values(this.state.products)} removeItem={this.removeItem} />
			</AccountPage>
		);
	}
}

export default BasketPage;