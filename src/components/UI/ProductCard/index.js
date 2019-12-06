import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import productImage from '../../../assets/img/product/product1.jpg';

const ProductCard = ({ id, name, description, price }) => (
	<div className="my-3 mx-auto product-card">
		<Link to={`/product/${id}`}>
			<div className="card" style={{ width: '250px' }}>
				<img src={productImage} className="card-img-top" alt="Изображение товара" />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{description}</p>
					<p className="d-flex justify-content-between">
						<b>{price} Р</b>
					</p>
				</div>
			</div>
		</Link>
	</div>
);

export default ProductCard;
