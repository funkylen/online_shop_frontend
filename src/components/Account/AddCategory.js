import React from 'react';

class AddCategory extends React.Component {
  render() {
    return (
      <div className="card mt-1">
        <div className="card-body">
          <h5 className="card-title mb-4">Добавление категории</h5>
          <form>
            <div className="col-sm mb-4">
              <label>Название категории</label>
              <input
                type="text"
                className="form-control"
                placeholder="Название категории"
                style={{ maxWidth: '300px', minWidth: '100px' }}
              />
            </div>

            <div className="col-sm">
              <button type="button" className="btn btn-danger">
                Добавить
						</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddCategory;
