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
                <input type="text" className="form-control" placeholder="Иванов" />
              </div>

              <div className="col-sm">
                <label>Имя</label>
                <input type="text" className="form-control" placeholder="Иван" />
              </div>

              <div className="col-sm">
                <label>Отчество</label>
                <input type="text" className="form-control" placeholder="Иванович" />
              </div>
            </form>
          </div>

          <hr />

          <div className="row justify-content-start align-items-center pl-3 pr-3 mb-4">
            <form className="row">

              <div className="col-sm">
                <label>Электронная почта</label>
                <input type="email" className="form-control" placeholder="example@mail.ru" />
              </div>

              <div className="col-sm">
                <label>Номер телефона</label>
                <input type="tel" className="form-control" placeholder="8-987-654-32-10" />
              </div>
            </form>
          </div>

          <hr />

          <div className="row mb-4">
            <label className="container-fluid">Пол</label>
            <button type="button" className="btn btn-outline-secondary mr-3 ml-3">Мужской</button>
            <button type="button" className="btn btn-outline-secondary">Женский</button>
          </div>


          <div className="row mb-4">
            <div className="col-sm">
              <label>Дата рождения</label>
              <input type="datepicker" className="form-control" placeholder="дд.мм.гггг" style={{ width: "200px" }} />
            </div>
          </div>

          <div className="row justify-content-between">
            <button type="button" className="btn btn-link">Выйти из системы</button>
            <button type="button" className="btn btn-danger mr-3">Сохранить</button>
          </div>

        </div>

      </div>
    );
  }
}

export default Settings;