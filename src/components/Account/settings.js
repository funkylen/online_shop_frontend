import React from 'react';

class Settings extends React.Component {
  render() {
    return (
      <div className="card mt-1">
        <div className="card-body">

          <div className="col-12">
            <div>
              <p><strong>Мои данные</strong></p>
            </div>
          </div>

          <div className="row justify-content-start align-items-center pl-3 pr-3 mb-4">
            <form className="row">

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
            </form>
          </div>

          <hr />

          <div className="row justify-content-start align-items-center pl-3 pr-3 mb-4">
            <form className="row">

              <div className="col-sm">
                <label>Электронная почта</label>
                <input type="email" className="form-control" placeholder="example@mail.ru" style={{ minWidth: "125px" }} />
              </div>

              <div className="col-sm">
                <label>Номер телефона</label>
                <input type="tel" className="form-control" placeholder="8-987-654-32-10" style={{ minWidth: "125px" }} />
              </div>
            </form>
          </div>

          <hr />

          <div className="row mb-4">
            <label className="container-fluid">Пол</label>
            <button type="button" className="btn btn-outline-secondary mb-1 mr-3 ml-3">Мужской</button>
            <button type="button" className="btn btn-outline-secondary mb-1 mr-3 ml-3">Женский</button>
          </div>


          <div className="row mb-4">
            <div className="col-sm">
              <label>Дата рождения</label>
              <input type="datepicker" className="form-control" placeholder="дд.мм.гггг" style={{ minWidth: "125px", maxWidth: "200px" }} />
            </div>
          </div>

          <div className="row justify-content-around">
            <button type="button" className="btn btn-link">Выйти из системы</button>
            <button type="button" className="btn btn-danger">Сохранить</button>
          </div>

        </div>

      </div>
    );
  }
}

export default Settings;