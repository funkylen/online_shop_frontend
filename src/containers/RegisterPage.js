import React from 'react';
import * as api from '../api';
import { login } from '../services/auth';
import { handleChange } from '../services/handlers';
import Register from '../components/Register';

class RegisterPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			surname: '',
			name: '',
			patronymic: '',
			phone: '',
			errors: {}
		};
	}

	handleChange = (e) => {
		handleChange(e, this);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		api
			.register(
				this.state.email,
				this.state.password,
				this.state.surname,
				this.state.name,
				this.state.patronymic,
				this.state.phone
			)
			.then((response) => {
				login(response.data.api_token);
			})
			.catch((error) => this.setState({ errors: error.response.data.errors }));
	}

	render() {
		return (
			<Register errors={this.state.errors} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
		);
	}
}

export default RegisterPage;
