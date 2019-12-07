import React from 'react';

const Login = ({ handleSubmit, handleChange }) => {
	return (
		<div className="container">
			<div className="col-md-6 mx-auto">
				<h2 className="mb-4 text-center">Вход</h2>
				<form name="form" onSubmit={handleSubmit}>
					<div className="form-group row">
						<label htmlFor="email" className="col-12">Электронная почта</label>
						<input
                            required
                            onChange={handleChange}
							type="email"
							className="form-control col-12"
							name="email"
						/>
					</div>
					<div className="form-group row">
						<label htmlFor="password" className="col-12">Пароль</label>
						<input
							required
                            onChange={handleChange}
							type="password"
							className="form-control col-12"
							name="password"
						/>
					</div>
					<div className="form-group row">
						<button className="btn btn-danger col-12">Войти</button>
					</div>
					{/* {error && <div className={'alert alert-danger'}>{error}</div>} */}
				</form>
			</div>
		</div>
	);
};

export default Login;
