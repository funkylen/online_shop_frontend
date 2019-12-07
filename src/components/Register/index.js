import React from 'react';

const Register = ({ error, handleSubmit, handleChange }) => {
	const errorContainer = !error ? null : (
		<div className="form-group col-12">
			<div className="alert alert-danger">{error}</div>
		</div>
	);

	return (
		<div className="container">
			<div className="col-md-6 mx-auto">
				<h2 className="mb-4 text-center">Регистрация</h2>
				<form name="form row" onSubmit={handleSubmit}>
					{errorContainer}
					<div className="form-group col-12">
						<label htmlFor="surname">Email</label>
						<input required onChange={handleChange} type="email" name="email" className="form-control" />
					</div>
					<div className="form-group col-12">
						<label htmlFor="name">Пароль</label>
						<input
							required
							onChange={handleChange}
							type="password"
							name="password"
							className="form-control"
						/>
					</div>
					<div className="form-group col-12">
						<label htmlFor="surname">Фамилия</label>
						<input required onChange={handleChange} type="text" name="surname" className="form-control" />
					</div>
					<div className="form-group col-12">
						<label htmlFor="name">Имя</label>
						<input required onChange={handleChange} type="text" name="name" className="form-control" />
					</div>
					<div className="form-group col-12">
						<label htmlFor="patronymic">Отчество (необязательно)</label>
						<input onChange={handleChange} type="text" name="patronymic" className="form-control" />
					</div>
					<div className="form-group col-12">
						<label htmlFor="patronymic">Телефон (необязательно)</label>
						<input onChange={handleChange} type="text" name="phone" className="form-control" />
					</div>
					<div className="form-group col-12">
						<button className="btn btn-danger col-12">Зарегистрироваться</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
