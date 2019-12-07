import React from 'react';
import * as auth from '../services/auth';
import { handleChange } from '../services/handlers';
import * as api from '../api';

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
			success: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({ success: false });
		api
			.createCategory(this.state.name)
			.then((response) => this.setState({ name: response.data.name, success: true }))
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
					name={this.state.name}
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

export const AddProductPage = () => (
	<AccountPage>
		<AddProduct />
	</AccountPage>
);

export const BasketPage = () => (
	<AccountPage>
		<Basket />
	</AccountPage>
);
