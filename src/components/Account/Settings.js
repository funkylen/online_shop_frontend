import React from 'react';

const Settings = ({ name, surname, patronymic, phone, success, errors, handleChange, handleSubmit }) => (
	<div className="card mt">
		<div className="card-body">
			<h5 className="card-title">Мои данные</h5>

			<form onSubmit={handleSubmit}>
				<div className="alert alert-success" hidden={!success}>
					Аккаунт обновлен
				</div>
				<div className="form-group">
					<label>Фамилия</label>
					<input onChange={handleChange} type="text" name="surname" value={surname} className={`form-control${errors.surname ? ' is-invalid' : ''}`} placeholder="Иванов" />
					<div className="invalid-feedback">{errors.surname}</div>
				</div>
				<div className="form-group">
					<label>Имя</label>
					<input onChange={handleChange} type="text" name="name" value={name} className={`form-control${errors.name ? ' is-invalid' : ''}`} placeholder="Иван" />
					<div className="invalid-feedback">{errors.name}</div>
				</div>
				<div className="form-group">
					<label>Отчество</label>
					<input onChange={handleChange} type="text" name="patronymic" value={patronymic} className={`form-control${errors.patronymic ? ' is-invalid' : ''}`} placeholder="Иванович" />
					<div className="invalid-feedback">{errors.patronymic}</div>
				</div>
				<div className="form-group">
					<label>Номер телефона</label>
					<input onChange={handleChange} type="tel" name="phone" value={phone} className={`form-control${errors.phone ? ' is-invalid' : ''}`} placeholder="89876543210" />
					<div className="invalid-feedback">{errors.phone}</div>
				</div>

				<div className="row justify-content-center">
					<button type="submit" className="btn btn-danger">
						Сохранить
					</button>
				</div>
			</form>
		</div>
	</div>
);

export default Settings;
