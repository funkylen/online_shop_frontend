import React from 'react';

const Register = ({ errors, handleSubmit, handleChange }) => {
	return (
		<div className="container">
			<div className="col-md-6 mx-auto">
				<h2 className="mb-4 text-center">Регистрация</h2>
				<form name="form row" onSubmit={handleSubmit}>
					<div className="form-group col-12">
						<label htmlFor="email">Email</label>
						<input
							required
							onChange={handleChange}
							type="email"
							name="email"
							className={`form-control${errors.email ? ' is-invalid' : ''}`}
						/>
						<div class="invalid-feedback">{errors.email}</div>
					</div>
					<div className="form-group col-12">
						<label htmlFor="password">Пароль</label>
						<input
							required
							onChange={handleChange}
							type="password"
							name="password"
							className={`form-control${errors.password ? ' is-invalid' : ''}`}
						/>
						<div class="invalid-feedback">{errors.password}</div>
					</div>
					<div className="form-group col-12">
						<label htmlFor="surname">Фамилия</label>
						<input
							required
							onChange={handleChange}
							type="text"
							name="surname"
							className={`form-control${errors.surname ? ' is-invalid' : ''}`}
						/>
						<div class="invalid-feedback">{errors.surname}</div>
					</div>
					<div className="form-group col-12">
						<label htmlFor="name">Имя</label>
						<input
							required
							onChange={handleChange}
							type="text"
							name="name"
							className={`form-control${errors.name ? ' is-invalid' : ''}`}
						/>
						<div class="invalid-feedback">{errors.name}</div>
					</div>
					<div className="form-group col-12">
						<label htmlFor="patronymic">Отчество</label>
						<input
							onChange={handleChange}
							type="text"
							name="patronymic"
							className={`form-control${errors.patronymic ? ' is-invalid' : ''}`}
						/>
						<small class="form-text text-muted">необязательно</small>
						<div class="invalid-feedback">{errors.patronymic}</div>
					</div>
					<div className="form-group col-12">
						<label htmlFor="phone">Телефон</label>
						<input
							onChange={handleChange}
							type="text"
							name="phone"
							className={`form-control${errors.phone ? ' is-invalid' : ''}`}
						/>
						<small class="form-text text-muted">необязательно</small>
						<div class="invalid-feedback">{errors.phone}</div>
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
