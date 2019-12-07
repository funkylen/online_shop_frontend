import React from 'react';
import './index.css';

const Product = ({ image, name, price, description, addToBasket }) => (
	<main className="container">
		<div className="row align-items-center justify-content-around">
			<div className="col-lg-5 mb-2">
				<div className="card" style={{ minHeight: '430px' }}>
					<div className="card-body">
						<img src={image} className="card-img-top" alt="Продукт" />
					</div>
				</div>
			</div>

			<div className="col-lg-5 mb-2">
				<div className="card" style={{ minHeight: '430px' }}>
					<div className="card-body">
						<div className="row justify-content-around align-items-center">
							<div>
								<p>
									<strong>{name}</strong>
								</p>
							</div>
						</div>

						<div className="row justify-content-around align-items-center ml-2">
							<div className="col-sm">
								<p>Цена:</p>
							</div>
							<div className="col-sm">
								<p>
									<strong>{price}Р</strong>
								</p>
							</div>
						</div>

						<div className="row justify-content-around align-items-center ml-2">
							<div className="col-sm">
								<p>Количество:</p>
							</div>
							<div className="col-sm">
								<div className="form-group">
									<input
										className="form-control"
										type="number"
										placeholder="1"
										style={{ width: '110px' }}
									/>
								</div>
							</div>
						</div>

						<div className="row justify-content-around align-items-center ml-2">
							<div className="col-sm">
								<p>Описание:</p>
							</div>
						</div>
						<div className="row justify-content-around align-items-center ml-2">
							<div className="col-sm">
								<p className="product-page-description">{description}</p>
							</div>
						</div>

						<div className="row justify-content-around align-items-center ml-2">
							<button onClick={addToBasket} type="button" className="btn btn-danger">
								Добавить в корзину
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
);

export default Product;
