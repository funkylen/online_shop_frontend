import React from 'react';

const Account = ({ loggedIn = false }) => {
	if (loggedIn) {
		return (
			<div class="dropdown">
				<a
					class="nav-link dropdown-toggle"
					href="#"
					id="navbarDropdown"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Личный кабинет
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<a class="dropdown-item" href="#">
						Мои заказы
					</a>
					<a class="dropdown-item" href="#">
						Избранное
					</a>
					<a class="dropdown-item" href="#">
						Корзина
					</a>
					<a class="dropdown-item" href="#">
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
