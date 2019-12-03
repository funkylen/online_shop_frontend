import React from 'react';

class OrdersEmpty extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm">

          <div className="row justify-content-center mb-4 mt-2">
            <strong><p className="h1 text-muted">Здесь пусто :(</p></strong>
          </div>

          <div className="row justify-content-center">
            <p>У вас отсутствуют активные заказы.</p>
          </div>

          <div className="row justify-content-center">
            <p>Воспользуйтесь поиском, чтобы найти всё что нужно.</p>
          </div>

          <div className="row justify-content-center">
            <button type="button" className="btn btn-danger">Перейти к товарам</button>
          </div>
        </div>
      </div>
    );
  }
}

export default OrdersEmpty;

