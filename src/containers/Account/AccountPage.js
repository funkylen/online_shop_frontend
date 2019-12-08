import React from 'react';
import * as auth from '../../services/auth';

import Account from '../../components/Account';
import Settings from '../../components/Account/Settings';

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

export default AccountPage;

export const SettingsPage = () => (
	<AccountPage>
		<Settings />
	</AccountPage>
);
