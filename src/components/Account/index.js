import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import './index.css';

class Account extends React.Component {
	render() {
		return (
			<div className="container mt-1" style={{margin: "0px 75px"}}>
				<div className="row align-items-center justify-content-start">
					<h4 style={{ paddingLeft: '15px' }}>Имя пользователя</h4>
				</div>
				<hr style={{ marginBottom: '10px' }} />

				<div className="row align-items-start justify-content-start" style={{ paddingLeft: '20px' }}>
					<div className="col-3">
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
						<div className="row mb-3">
							<NavLink
								to="/account/add-category"
								className="no-active-item"
								activeClassName="active-item"
							>
								Добавить категорию
							</NavLink>
						</div>
						<div className="row">
							<NavLink to="/account/add-product" className="no-active-item" activeClassName="active-item">
								Добавить товар
							</NavLink>
						</div>
					</div>

					<div className="col-7 mb-4">{this.props.children}</div>
				</div>
			</div>
		);
	}
}

export default Account;
