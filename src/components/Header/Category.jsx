import React from 'react';

const Category = ({ active }) => (
	<li class={`nav-item${active ? ' active' : ''}`}>
		<a class="nav-link" href="#">
			Категория
		</a>
	</li>
);

export default Category;
