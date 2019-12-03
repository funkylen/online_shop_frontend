import React from 'react';

import './index.css';

class Account extends React.Component {
  render() {
    return (
      <div className="container">

        <div className="row align-items-center justify-content-start">
          <h4 style={{ paddingLeft: "15px" }}>Имя пользователя</h4>
        </div>
        <hr style={{ marginBottom: "10px" }} />

        <div className="row align-items-start justify-content-start" style={{ paddingLeft: "20px" }}>
          <div className="col-3">
            <div className="row mb-3">
              <a className="active-item" href="#myorders">Мои заказы</a>
            </div>
            <div className="row mb-3">
              <a className="no-active-item" href="#settings">Настройки</a>
            </div>
            <div className="row mb-3">
              <a className="no-active-item" href="#addcategory">Добавить категорию</a>
            </div>
            <div className="row">
              <a className="no-active-item" href="#addproduct">Добавить продукт</a>
            </div>
          </div>

          <div className="col-7 mb-4">
            <p>тут какой-то блок</p> 
          </div>
        </div>
      </div>
    );
  }
}

export default Account;