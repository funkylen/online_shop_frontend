import React from 'react';

const Category = ({ active }) => (
	<li className={`nav-item${active ? ' active' : ''}`}>
		<a className="nav-link" href="#">
			Категория
		</a>
	</li>
);

export default Category;
