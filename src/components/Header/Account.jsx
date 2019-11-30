import React from 'react';

const Account = ({ loggedIn = false }) => {
	if (loggedIn) {
		return (
			<div className="dropdown">
				<a
					className="nav-link dropdown-toggle"
					href="#"
					id="navbarDropdown"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Личный кабинет
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					<a className="dropdown-item" href="#">
						Мои заказы
					</a>
					<a className="dropdown-item" href="#">
						Избранное
					</a>
					<a className="dropdown-item" href="#">
						Корзина
					</a>
					<a className="dropdown-item" href="#">
						Выход
					</a>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<a className="nav-link" href="#">Вход</a>
			</div>
		);
	}
};

export default Account;
