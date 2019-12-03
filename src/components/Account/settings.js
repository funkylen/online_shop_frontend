import React from 'react';

class Orders extends React.Component {
  render() {
    return (
      <div class="card mt-1">
        <div class="card-body">

          <div className="col-12">
            <div>
              <p><strong>Мои данные</strong></p>
            </div>
          </div>

          <div className="row justify-content-start align-items-center pl-3 pr-3 mb-4">
            <form class="row">

              <div class="col-sm">
                <label>Фамилия</label>
                <input type="text" class="form-control" placeholder="Иванов" />
              </div>

              <div class="col-sm">
                <label>Имя</label>
                <input type="text" class="form-control" placeholder="Иван" />
              </div>

              <div class="col-sm">
                <label>Отчество</label>
                <input type="text" class="form-control" placeholder="Иванович" />
              </div>
            </form>
          </div>

          <hr />

          <div className="row justify-content-start align-items-center pl-3 pr-3 mb-4">
            <form class="row">

              <div class="col-sm">
                <label>Электронная почта</label>
                <input type="email" class="form-control" placeholder="example@mail.ru" />
              </div>

              <div class="col-sm">
                <label>Номер телефона</label>
                <input type="tel" class="form-control" placeholder="8-987-654-32-10" />
              </div>
            </form>
          </div>

          <hr />

          <div className="row mb-4">
            <label class="container-fluid">Пол</label>
            <button type="button" class="btn btn-outline-secondary mr-3 ml-3">Мужской</button>
            <button type="button" class="btn btn-outline-secondary">Женский</button>
          </div>


          <div className="row mb-4">
            <div class="col-sm">
              <label>Дата рождения</label>
              <input type="datepicker" class="form-control" placeholder="дд.мм.гггг" style={{ width: "200px" }} />
            </div>
          </div>

          <div className="row justify-content-between">
            <button type="button" class="btn btn-link">Выйти из системы</button>
            <button type="button" class="btn btn-danger mr-3">Сохранить</button>
          </div>

        </div>

      </div>
    );
  }
}

