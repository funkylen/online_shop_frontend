import React from 'react';

const Settings = ({ name, surname, patronymic, email, phone }) => (
	<div className="card mt">
		<div className="card-body">
			<h5 className="card-title">Мои данные</h5>

			<form>
				<div className="form-group">
					<label>Фамилия</label>
					<input type="text" name="surname" value={surname} className="form-control" placeholder="Иванов" />
				</div>
				<div className="form-group">
					<label>Имя</label>
					<input type="text" name="name" value={name} className="form-control" placeholder="Иван" />
				</div>
				<div className="form-group">
					<label>Отчество</label>
					<input type="text" name="patronymic" value={patronymic} className="form-control" placeholder="Иванович" />
				</div>
				<div className="form-group">
					<label>Электронная почта</label>
					<input type="email" name="email" value={email} className="form-control" placeholder="example@mail.ru" />
				</div>
				<div className="form-group">
					<label>Номер телефона</label>
					<input type="tel" name="phone" value={phone} className="form-control" placeholder="8-987-654-32-10" />
				</div>

				<div className="row justify-content-center">
					<button type="button" className="btn btn-danger">
						Сохранить
					</button>
				</div>
			</form>
		</div>
	</div>
);

export default Settings;
