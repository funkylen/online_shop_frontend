import React from 'react';
import { Link } from 'react-router-dom';

const AddProduct = ({
	errors,
	success,
	successName,
	successId,
	categories,
	handleChange,
	handleSubmit,
	handleImageChange
}) => (
	<div className="card mt-1">
		<div className="card-body">
			<h5 className="card-title mb-1">Добавление товара</h5>
		</div>
		<form onSubmit={handleSubmit} id="add_product_form">
			<div className="row pl-3 pr-3 mb-3" hidden={!success}>
				<div className="col-sm">
					<div className="alert alert-success">
						Товар <Link to={`/product/${successId}`}>{successName}</Link> успешно добавлен
					</div>
				</div>
			</div>

			<div className="row pl-3 pr-3 mb-3">
				<div className="col-sm">
					<label htmlFor="product_name">Название товара</label>
					<input
						required
						onChange={handleChange}
						type="text"
						name="name"
						className={`form-control mb-2${errors.name ? ' is-invalid' : ''}`}
						placeholder="Игрушка детская"
						id="product_name"
					/>
				</div>
				<div className="invalid-feedback">{errors.name}</div>
			</div>
			<div className="row pl-3 pr-3 mb-3">
				<div className="col-sm">
					<label htmlFor="product_price">Цена товара</label>
					<input
						required
						onChange={handleChange}
						type="number"
						name="price"
						className={`form-control${errors.price ? ' is-invalid' : ''}`}
						placeholder="5000"
						id="product_price"
					/>
					<div className="invalid-feedback">{errors.price}</div>
				</div>
			</div>
			<div className="row pl-3 pr-3 mb-3">
				<div className="col-sm">
					<label htmlFor="product_category">Категория товара</label>
					<select
						onChange={handleChange}
						name="categoryId"
						className={`form-control${errors.category_id ? ' is-invalid' : ''}`}
					>
						{categories}
					</select>
					<div className="invalid-feedback">{errors.category_id}</div>
				</div>
			</div>
			<div className="row pl-3 pr-3 mb-3">
				<div className="col-sm">
					<label htmlFor="product_description">Описание товара</label>
					<textarea
						onChange={handleChange}
						className={`form-control${errors.description ? ' is-invalid' : ''}`}
						name="description"
						rows="4"
						style={{ resize: 'none' }}
						id="product_description"
					/>
					<small className="form-text text-muted">необязательно</small>
					<div className="invalid-feedback">{errors.description}</div>
				</div>
			</div>

			<div className="row pl-3 pr-3 mb-3">
				<div className="col-sm form-group">
					<label htmlFor="product_image">Изображение товара</label>
					<input
						onChange={handleImageChange}
						type="file"
						name="image"
						className="form-control-file"
						id="product_image"
					/>
				</div>
			</div>

			<div className="row pl-3 pr-3 mb-3">
				<div className="col-sm">
					<button type="submit" className="btn btn-danger">
						Добавить товар
					</button>
				</div>
			</div>
		</form>
	</div>
);

export default AddProduct;
