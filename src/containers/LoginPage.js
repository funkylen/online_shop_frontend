import React from 'react';
import * as api from '../api';
import Login from '../components/Login';
import { login } from '../services/auth';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			submitted: false,
			loading: false,
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
			.login(this.state.email, this.state.password)
			.then((response) => {
				login(response.data.api_token);
			})
			.catch((error) => this.setState({error: error.response.data.error}));
	}

	render() {
		return (
			<Login
				error={this.state.error}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default LoginPage;
