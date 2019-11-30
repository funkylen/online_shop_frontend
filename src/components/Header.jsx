import React from 'react';
import './Header.css';
import logo from '../assets/img/logo.png';
import Category from './Header/Category';
import DropdownCategory from './Header/DropdownCategory';
import Account from './Header/Account';

class Header extends React.Component {
	getCategories() {
		let categories = [];

		for (let i = 0; i < 10; i++) {
			categories.push(<Category key={`category_${i}`} />);
		}

		return categories;
	}

	render() {
		return (
			<header>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container">
						<a className="navbar-brand" href="#">
							<img src={logo} alt="Лого" />
						</a>

						<form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Поиск по товарам"
								aria-label="Search"
							/>
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
								Поиск
							</button>
						</form>
						<Account loggedIn={true}/>
					</div>
				</nav>

				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container">
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								{this.getCategories()}
								<DropdownCategory />
							</ul>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
