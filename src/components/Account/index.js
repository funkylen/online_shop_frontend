import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const Account = ({ username, role, children }) => (
	<main className="container">
		<div className="row align-items-center justify-content-start border-bottom pb-2 mb-3">
			<h4 className="col-12 d-lg-none">{username}</h4>
			<h4 className="d-none d-lg-block">{username}</h4>
		</div>

		<div className="row align-items-start justify-content-start">
			{role === 'admin' ? <AdminMenu /> : <UserMenu />}
			<div className="col-lg-7 col-sm-12 mb-4">{children}</div>
		</div>
	</main>
);

const AdminMenu = () => (
	<div className="col-lg-3 d-lg-block d-none">
		<div className="row mb-3">
			<NavLink to="/account/add-category" className="no-active-item" activeClassName="active-item">
				Добавить категорию
			</NavLink>
		</div>
		<div className="row mb-3">
			<NavLink to="/account/add-product" className="no-active-item" activeClassName="active-item">
				Добавить товар
			</NavLink>
		</div>
		<div className="row mb-3">
			<NavLink to="/account/settings" className="no-active-item" activeClassName="active-item">
				Настройки
			</NavLink>
		</div>
	</div>
);

const UserMenu = () => (
	<div className="col-lg-3 d-lg-block d-none">
		<div className="row mb-3">
			<NavLink to="/account/basket" className="no-active-item" activeClassName="active-item">
				Корзина
			</NavLink>
		</div>
		<div className="row mb-3">
			<NavLink to="/account/orders" className="no-active-item" activeClassName="active-item">
				Мои заказы
			</NavLink>
		</div>
		<div className="row mb-3">
			<NavLink to="/account/settings" className="no-active-item" activeClassName="active-item">
				Настройки
			</NavLink>
		</div>
	</div>
);

export default Account;
