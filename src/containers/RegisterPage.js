import React from 'react';

class RegisterPage extends React.Component {
  render() {
    return (
      <div className="container mb-4">
        <div className="col-md-9 col-md-offset-3">
          <h2 className="mb-4">Регистрация</h2>
          <form name="form">
            <div className="row">
            <div className="form-group col-auto">
              <label htmlFor="surname">Фамилия</label>
              <input
                type="text"
                name="surname"
                className="form-control"
                style={{ minWidth: "200px" }}
              />
            </div>
            <div className="form-group col-auto">
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                name="name"
                className="form-control"
                style={{ minWidth: "200px" }}
              />
            </div>
            <div className="form-group col-auto">
              <label htmlFor="patronymic">Отчество</label>
              <input
                type="text"
                name="patronymic"
                className="form-control"
                style={{ minWidth: "200px" }}
              />
            </div>
            </div>
            <div className="row">
            <div className="form-group col-auto">
              <label htmlFor="surname">Почта*</label>
              <input required
                type="email"
                name="email"
                className="form-control"
                style={{ minWidth: "200px" }}
              />
            </div>
            <div className="form-group col-auto">
              <label htmlFor="name">Пароль*</label>
              <input required
                type="password"
                name="password"
                className="form-control"
                style={{ minWidth: "200px" }}
              />
            </div>
            </div>
            <div className="row">
              <div className="form-group col-auto">
                <button className="btn btn-primary">Зарегистрироваться</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
