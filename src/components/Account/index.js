import React from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/account/orders" className="active-item">Мои заказы</Link> 
            </div>
            <div className="row mb-3">
              <Link to="/account/settigs" className="no-active-item">Настройки</Link>
            </div>
            <div className="row mb-3">
              <Link to="/account/addCategory" className="no-active-item">Добавить категорию</Link>
            </div>
            <div className="row">
              <Link to="/account/addProduct" className="no-active-item">Добавить товар</Link>
            </div>
          </div>

          <div className="col-7 mb-4">
            
          </div>
        </div>
      </div>
    );
  }
}

export default Account;