import React from 'react';
import productImage from '../../assets/img/product/product1.jpg';

const ProductCard = ({ fav }) => (
	<div className="col-3 my-3">
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
	</div>
);

export default ProductCard;
