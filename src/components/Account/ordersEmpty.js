import React from 'react';

class Orders extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col">

          <div class="row justify-content-center mb-4 mt-2">
            <strong><p class="h1 text-muted">Здесь пусто :(</p></strong>
          </div>

          <div class="row justify-content-center">
            <p>У вас отсутствуют активные заказы.</p>
          </div>

          <div class="row justify-content-center">
            <p>Воспользуйтесь поиском, чтобы найти всё что нужно.</p>
          </div>

          <div class="row justify-content-center">
            <button type="button" class="btn btn-danger">Перейти к товарам</button>
          </div>
        </div>
      </div>
    );
  }
}

