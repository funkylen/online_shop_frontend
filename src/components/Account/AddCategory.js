import React from 'react';

const AddCategory = ({ name, errors, success, handleChange, handleSubmit }) => (
	<div className="card mt-1">
		<div className="card-body">
			<h5 className="card-title mb-4">Добавление категории</h5>
			<form onSubmit={handleSubmit}>
				<div className="alert alert-success" hidden={!success}>
					Категория "{name}" успешно добавлена. Она появится в меню после обновления страницы
				</div>
				<div className="mb-4">
					<label>Название категории</label>
					<input
						onChange={handleChange}
						type="text"
						name="name"
						className={`form-control${errors.name ? ' is-invalid' : ''}`}
						placeholder="Название категории"
					/>
					<div class="invalid-feedback">{errors.name}</div>
				</div>
				<button type="submit" className="btn btn-danger">
					Добавить категорию
				</button>
			</form>
		</div>
	</div>
);

export default AddCategory;
