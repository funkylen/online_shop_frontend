import React from 'react';
import * as api from '../api';

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
		api.login(this.state.email, this.state.password).then((response) => {
			localStorage.setItem('token', response.data.api_token);
			window.location.href = '/';
		});
	}

	render() {
		const { email, password, error } = this.state;
		return (
      <div className="container">
			<div className="col-md-6 col-md-offset-3">
				<h2 className="mb-4">Вход</h2>
				<form name="form" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="email">Электронная почта</label>
						<input required
							type="email"
							className="form-control"
              name="email"
              style={{maxWidth: "220px"}}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Пароль</label>
						<input required
							type="password"
							className="form-control"
              name="password"
              style={{maxWidth: "220px"}}
						/>
					</div>
					<div className="form-group">
						<button className="btn btn-primary">Войти</button>
					</div>
					{error && <div className={'alert alert-danger'}>{error}</div>}
				</form>
			</div>
      </div>
		);
	}
}

export default LoginPage;
