import React from 'react';

const DropdownCategoryItem = () => (
	<a className="dropdown-item" href="#">
		Категория
	</a>
);

const DropdownCategory = () => (
	<li className="nav-item dropdown">
		<a
			className="nav-link dropdown-toggle"
			href="#"
			id="navbarDropdown"
			role="button"
			data-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false"
		>
			Еще категории
		</a>
		<div className="dropdown-menu" aria-labelledby="navbarDropdown">
			<DropdownCategoryItem/>
			<DropdownCategoryItem/>
			<DropdownCategoryItem/>
			<DropdownCategoryItem/>
			<DropdownCategoryItem/>
			<DropdownCategoryItem/>
			<DropdownCategoryItem/>
			<DropdownCategoryItem/>
		</div>
	</li>
);

export default DropdownCategory;
