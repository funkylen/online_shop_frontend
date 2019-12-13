import React from 'react';
import { Link } from 'react-router-dom';

class AddProduct extends React.Component {
	getImageInput = () => {
		let type, onChange, className;

		if (this.props.imageInput === 'url' ) {
			type = 'text';
			onChange = this.props.handleChange;
			className = 'form-control';
		} else {
			type = 'file';
			onChange = this.props.handleImageChange;
			className = 'form-control-file mt-1';
		}
		
		if (this.props.errors.image_file || this.props.errors.image_url) className += ' is-invalid';

		return <input onChange={onChange} type={type} name='image' className={className} />;
	}

	render() {
    const { errors, success, successName, successId, categories, handleChange, handleSubmit } = this.props;

		return (
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
							<div className="row">
								<div className="col-sm-4">
									<select
										onChange={this.props.handleChangeImageInput}
										id="product_image"
										className="form-control"
									>
										<option value="url">Ссылка</option>
										<option value="file">Файл</option>
									</select>
								</div>

								<div className="col-sm-8">
									{this.getImageInput()}
									<div className="invalid-feedback">{errors.image_url || errors.image_file}</div>
								</div>
							</div>
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
	}
}

export default AddProduct;
