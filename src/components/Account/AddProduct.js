import React from 'react';

class AddProduct extends React.Component {
  render() {
    return (
      <div className="card mt-1 " style={{minWidth:"200px"}}>
        <div className="card-body">
          <h5 className="card-title mb-1">Добавление товара</h5>
        </div>
        <form>
          <div className="row pl-3 pr-3 mb-3">
            <div className="col-sm">
              <label>Название товара</label>
              <input type="text" className="form-control mb-2" placeholder="Название товара" />
              <label>Цена товара</label>
              <input type="number" className="form-control" placeholder="Цена товара" />
            </div>

            <div className="col-sm">
              <label>Описание товара</label>
              <textarea className="form-control" rows="4" style={{ resize: 'none' }} />
            </div>
          </div>

          <div className="col-sm">
              <p className="mb-1">Выберите изображение для товара:</p>
            </div>
          <div className="col-sm mb-3 ml-3" style={{width: "75px"}}>
            <input type="file" class="custom-file-input" />
            <label class="custom-file-label"></label>
          </div>

          <div className="col-sm mb-3">
            <button type="button" className="btn btn-danger">
              Добавить товар
					</button>
          </div>

        </form>
      </div>
    );
  }
}

export default AddProduct;
