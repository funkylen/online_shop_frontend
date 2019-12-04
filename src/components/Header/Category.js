import React from 'react';

const Category = ({ active, name }) => (
	<li className="nav-item">
		<a className="nav-link" href="#">
			{name}
		</a>
	</li>
);

export default Category;
