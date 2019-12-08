import React from 'react';
import * as api from '../../api';
import { handleChange } from '../../services/handlers';
import * as auth from '../../services/auth';
import Settings from '../../components/Account/Settings';
import AccountPage from './AccountPage';
import Loading from '../../components/UI/Loading';

class OrdersPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			surname: null,
			name: null,
			patronymic: null,
			phone: null,
			loading: false,
			success: false,
			errors: {}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		api.init().then((response) =>
			this.setState({
				surname: response.data.surname,
				name: response.data.name,
				patronymic: response.data.patronymic,
				phone: response.data.phone
			})
		);
	}

	handleChange(e) {
		handleChange(e, this);
	}

	handleSubmit(e) {
		e.preventDefault();

		api
			.updateProfile(this.state.surname, this.state.name, this.state.patronymic, this.state.phone)
			.then((response) => {
				this.setState({ loading: true });
				this.setState({
					success: true,
					surname: response.data.surname,
					name: response.data.name,
					patronymic: response.data.patronymic,
					phone: response.data.phone,
					errors: {}
				});
				auth.setAccountData(response.data);
				this.setState({ loading: false });
			})
			.catch((error) => this.setState({ errors: error.response.data.errors }));
	}

	render() {
		if (this.state.loading) return <Loading />;
		return (
			<AccountPage>
				<Settings
					surname={this.state.surname}
					name={this.state.name}
					patronymic={this.state.patronymic}
					phone={this.state.phone}
					success={this.state.success}
					errors={this.state.errors}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
			</AccountPage>
		);
	}
}

export default OrdersPage;
