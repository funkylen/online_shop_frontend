import React from 'react';
import * as auth from '../services/auth';
import * as basket from '../services/basket';
import { handleChange } from '../services/handlers';
import * as api from '../api';

import Loading from '../components/UI/Loading';
import Account from '../components/Account';
import Basket from '../components/Account/Basket';
import Orders from '../components/Account/Orders';
import Settings from '../components/Account/Settings';
import AddCategory from '../components/Account/AddCategory';
import AddProduct from '../components/Account/AddProduct';

class AccountPage extends React.Component {
	getUsername() {
		const accountData = auth.getAccountData();

		if (accountData.surname && accountData.name) return `${accountData.surname} ${accountData.name}`.trim();

		return accountData.email;
	}

	render() {
		return (
			<Account username={this.getUsername()} role={auth.getRole()}>
				{this.props.children}
			</Account>
		);
	}
}

export class AddCategoryPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			errors: {},
			success: false,
			successName: null
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({ success: false });
		api
			.createCategory(this.state.name)
			.then((response) => this.setState({ successName: response.data.name, success: true }))
			.catch((error) => this.setState({ errors: error.response.data.errors }));
	}

	handleChange(e) {
		handleChange(e, this);
	}

	render() {
		return (
			<AccountPage>
				<AddCategory
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					success={this.state.success}
					errors={this.state.errors}
					successName={this.state.successName}
				/>
			</AccountPage>
		);
	}
}

export class AddProductPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: [],
			name: '',
			price: '',
			categoryId: '',
			description: '',
			errors: {},
			success: false
		};

		this.fd = new FormData();

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
	}

	componentDidMount() {
		api.getCategories().then((response) => {
			const categories = [];
			response.data.forEach((element) => {
				categories.push(
					<option key={`category_id-${element.id}`} value={element.id}>
						{element.name}
					</option>
				);
			});

			this.setState({ categories: categories });
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({ success: false });
		const { name, price, categoryId, image, description } = this.state;

		api
			.createProduct(name, price, categoryId, image, description)
			.then((response) => this.setState({ name: response.data.name, success: true }))
			.catch((error) => this.setState({ errors: error.response.data.errors }));
	}

	handleImageChange(e) {
		this.setState({ image: e.target.files[0] });
	}

	handleChange(e) {
		handleChange(e, this);
	}

	render() {
		console.log(this.state);
		return (
			<AccountPage>
				<AddProduct
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					handleImageChange={this.handleImageChange}
					success={this.state.success}
					errors={this.state.errors}
					name={this.state.name}
					categories={this.state.categories}
				/>
			</AccountPage>
		);
	}
}

export const OrdersPage = () => (
	<AccountPage>
		<Orders />
	</AccountPage>
);

export const SettingsPage = () => (
	<AccountPage>
		<Settings />
	</AccountPage>
);

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
