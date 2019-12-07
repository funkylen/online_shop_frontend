import React from 'react';

const Login = ({ error, handleSubmit, handleChange }) => {
	const errorContainer = !error ? null : (
		<div className="form-group col-12">
			<div className="alert alert-danger">{error}</div>
		</div>
	);

	return (
		<div className="container">
			<div className="col-md-6 mx-auto">
				<h2 className="mb-4 text-center">Вход</h2>
				<form name="form row" onSubmit={handleSubmit}>
					{errorContainer}
					<div className="form-group col-12">
						<label htmlFor="email">Электронная почта</label>
						<input required onChange={handleChange} type="email" className="form-control" name="email" />
					</div>
					<div className="form-group col-12">
						<label htmlFor="password">Пароль</label>
						<input
							required
							onChange={handleChange}
							type="password"
							className="form-control"
							name="password"
						/>
					</div>
					<div className="form-group col-12">
						<button className="btn btn-danger col-12">Войти</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
