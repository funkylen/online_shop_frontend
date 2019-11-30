import React from 'react';

const DropdownCategoryItem = () => (
	<a class="dropdown-item" href="#">
		Категория
	</a>
);

const DropdownCategory = () => (
	<li class="nav-item dropdown">
		<a
			class="nav-link dropdown-toggle"
			href="#"
			id="navbarDropdown"
			role="button"
			data-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false"
		>
			Еще категории
		</a>
		<div class="dropdown-menu" aria-labelledby="navbarDropdown">
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
