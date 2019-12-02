import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import productImage from '../../../assets/img/product/product1.jpg';

const ProductCard = ({ fav }) => (
	<div className="my-3 mx-auto product-card">
		<Link to="/product/id">
			<div className="card" style={{ width: '250px' }}>
				<img src={productImage} className="card-img-top" alt="Изображение товара" />
				<div className="card-body">
					<h5 className="card-title">Детский конструктор</h5>
					<p className="card-text">
						Тут будет описание товара, тип смотрите какой классный конструктор, вау, *взрыв*, эпик и всё.
					</p>
					<p class="d-flex justify-content-between">
						<b>317 Р</b>
						<span class="favourite">
							<i class={`${fav ? 'fas' : 'far'} fa-heart`} />
						</span>
					</p>
				</div>
			</div>
		</Link>
	</div>
);

export default ProductCard;
