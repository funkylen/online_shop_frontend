import React from 'react';
import { Link } from 'react-router-dom';

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
					<Link to='/account/basket' className="dropdown-item">Корзина</Link>
					<Link to='/account/orders' className="dropdown-item">Мои заказы</Link>
					<Link to='/account/favourites' className="dropdown-item">Избранное</Link>
					<Link to='/account/settings' className="dropdown-item">Настройки</Link>
					<Link to='/logout' className="dropdown-item">Выход</Link>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<a className="nav-link" href="#">
					Вход
				</a>
			</div>
		);
	}
};

export default Account;
