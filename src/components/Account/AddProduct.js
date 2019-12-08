import React from 'react';

const AddProduct = ({ errors, success, name, categories, handleChange, handleSubmit, handleImageChange }) => (
	<div className="card mt-1">
		<div className="card-body">
			<h5 className="card-title mb-1">Добавление товара</h5>
		</div>
		<form onSubmit={handleSubmit}>
			<div className="row pl-3 pr-3 mb-3">
				<div className="col-sm">
					<label htmlFor="product_name">Название товара</label>
					<input
						onChange={handleChange}
						type="text"
						name="name"
						className="form-control mb-2"
						placeholder="Игрушка детская"
						id="product_name"
					/>
				</div>
			</div>
			<div className="row pl-3 pr-3 mb-3">
				<div className="col-sm">
					<label htmlFor="product_price">Цена товара</label>
					<input
						onChange={handleChange}
						type="number"
						name="price"
						className="form-control"
						placeholder="5000"
						id="product_price"
					/>
				</div>
			</div>
			<div className="row pl-3 pr-3 mb-3">
				<div className="col-sm">
					<label htmlFor="product_category">Категория товара</label>
					<select onChange={handleChange} name="categoryId" class="form-control">
						{categories}
					</select>
				</div>
			</div>
			<div className="row pl-3 pr-3 mb-3">
				<div className="col-sm">
					<label htmlFor="product_description">Описание товара</label>
					<textarea
						onChange={handleChange}
						className="form-control"
						name="description"
						rows="4"
						style={{ resize: 'none' }}
						id="product_description"
					/>
					<small className="form-text text-muted">необязательно</small>
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
