import React from 'react';
import * as api from '../api';
import { login } from '../services/auth';
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
			error: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
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
			.catch((error) => this.setState({ error: 'Здарова бандиты' }));
	}

	render() {
		return <Register error={this.state.error} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
	}
}

export default RegisterPage;
