import React from 'react';

class Settings extends React.Component {
  render() {
    return (
      <div className="card mt-1" style={{ minWidth: "200px" }}>
        <div className="card-body">
          <h5 className="card-title">Мои данные</h5>

          <form>
            <div className="row justify-content-start align-items-center pl-3 pr-3 mb-4">
              <div className="row">

                <div className="col-sm">
                  <label>Фамилия</label>
                  <input type="text" className="form-control" placeholder="Иванов" style={{ minWidth: "125px" }} />
                </div>

                <div className="col-sm">
                  <label>Имя</label>
                  <input type="text" className="form-control" placeholder="Иван" style={{ minWidth: "125px" }} />
                </div>

                <div className="col-sm">
                  <label>Отчество</label>
                  <input type="text" className="form-control" placeholder="Иванович" style={{ minWidth: "125px" }} />
                </div>
              </div>
            </div>

            <div className="row justify-content-around align-items-center pl-3 pr-3 mb-4">
              <div className="row">

                <div className="col-sm">
                  <label>Электронная почта</label>
                  <input type="email" className="form-control" placeholder="example@mail.ru" style={{ minWidth: "125px" }} />
                </div>

                <div className="col-sm">
                  <label>Номер телефона</label>
                  <input type="tel" className="form-control" placeholder="8-987-654-32-10" style={{ minWidth: "125px" }} />
                </div>
              </div>
            </div>

            <hr />

            <div className="row justify-content-center">
              <button type="button" className="btn btn-danger">Сохранить</button>
            </div>

            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </form>

        </div>

      </div>
    );
  }
}

export default Settings;