import React from 'react';


class addCategory extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-4">Добавление категории</h5>

          <div className="col-sm mb-4">
            <label>Название категории</label>
            <input type="text" className="form-control" placeholder="Название категории" style={{ width: "300px" }} />
          </div>

          <div className="col-sm">
            <button type="button" className="btn btn-danger">Добавить</button>
          </div>

        </div>

      </div>
    );
  }
}

export default addCategory;