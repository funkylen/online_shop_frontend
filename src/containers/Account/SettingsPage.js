import React from 'react';
import * as api from '../../api';
import Settings from '../../components/Account/Settings';
import AccountPage from './AccountPage';

class OrdersPage extends React.Component {
	state = {
		surname: null,
		name: null,
		patronymic: null,
		email: null,
		phone: null
	};

	componentDidMount() {
		api.init().then((response) =>
			this.setState({
				surname: response.data.surname,
				name: response.data.name,
				patronymic: response.data.patronymic,
				email: response.data.email,
				phone: response.data.phone
			})
		);
	}

	render() {
		console.log(this.state);
		return (
			<AccountPage>
				<Settings
					surname={this.state.surname}
					name={this.state.name}
					patronymic={this.state.patronymic}
					email={this.state.email}
					phone={this.state.phone}
				/>
			</AccountPage>
		);
	}
}

export default OrdersPage;
