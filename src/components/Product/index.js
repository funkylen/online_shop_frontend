import React from 'react';
import Magnifier from 'react-magnifier';
import './index.css';

const Product = ({ image, name, price, description, addToBasket, handleChange, inBasket }) => (
	<main className="container">
		<div className="row align-items-center justify-content-around">
			<div className="col-lg-5 mb-2">
				<div className="card" style={{ minHeight: '430px' }}>
					<div className="card-body">
						<Magnifier
							src={`/${image}`}
							minWidth={200}
							maxWidth={400}
							className="card-img-top"
							alt={name}
						/>
					</div>
				</div>
			</div>

			<div className="col-lg-5 mb-2">
				<div className="card" style={{ minHeight: '430px' }}>
					<div className="card-body">
						<div className="row justify-content-around align-items-center" style={{ marginBottom: '30px' }}>
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
										onChange={handleChange}
										name="count"
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
							<button onClick={addToBasket} type="button" className="btn btn-danger" disabled={inBasket}>
								{inBasket ? 'В корзине' : 'Добавить в корзину'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
);

export default Product;
