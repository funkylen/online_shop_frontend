import React from 'react';
import * as auth from '../services/auth';

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

export const AddCategoryPage = () => (
	<AccountPage>
		<AddCategory />
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
