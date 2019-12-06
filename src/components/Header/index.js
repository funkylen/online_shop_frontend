import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css';
import logo from '../../assets/img/logo.png';
import Category from './Category';
// import DropdownCategory from './DropdownCategory';
import Account from './Account';

class Header extends React.Component {
	getCategories() {
		let categories = [];

    for (let i = 0; i < 5; i++) {
      categories.push(
				<NavLink to={`${[i]}`} activeClassName="active">
					<Category name={"Категория"} />
				</NavLink>
      );
    }

		return categories;
	}

	render() {
		const categories = this.getCategories();

		const categoriesNavbar =
			categories.length === 0 ? null : (
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container">
						<button
							className="navbar-toggler col-12"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>

						<div className="collapse navbar-collapse overflow-auto" id="navbarSupportedContent" style={{textAlign:"center"}}>
							<ul className="navbar-nav mx-auto">{categories}</ul>
						</div>
					</div>
				</nav>
			);

		return (
			<header>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container">
              <Link to="/">
                <a className="navbar-brand">
                  <img src={logo} alt="Лого" />
                </a>
              </Link>
            <div className="row">

						<form className="form-inline">
              <div className="col-8">
							<input
								className="form-control"
								type="search"
								placeholder="Поиск по товарам"
                aria-label="Search"
							/>
              </div>
              <div className="col-4">
							<button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
								Поиск
							</button>
              </div>
						</form>
            </div>
						<Account loggedIn={true} />
					</div>
				</nav>

				{categoriesNavbar}
			</header>
		);
	}
}

export default Header;
