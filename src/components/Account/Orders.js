import React from 'react';

import ProductImage from '../../assets/img/product/product1.jpg';

class Orders extends React.Component {
  render() {
    return (
      <div className="container mt-1" style={{padding:"0px 0px"}}>
        <div className="card mb-4" style={{minWidth:"200px"}}>

          <h5 className="card-header">ID заказа 123456</h5>
          <div className="card-body">

            <div className="row justify-content-around align-items-center">
              <div className="col-sm">
                <p>Статус</p>
              </div>
              <div className="col-sm">
                <p className="badge badge-success"><strong>Оплачен</strong></p>
              </div>
            </div>

            <div className="row justify-content-around align-items-center">
              <div className="col-sm">
                <p>Дата заказа</p>
              </div>
              <div className="col-sm">
                <p>вторник, 12 ноября 2019 г., 22:29</p>
              </div>
            </div>

            <div className="row justify-content-around align-items-center">
              <div className="col-sm">
                <p>Сумма заказа</p>
              </div>
              <div className="col-sm">
                <p>150 Р</p>
              </div>
            </div>

          </div>
        </div>

        <div className="card" style={{minWidth:"200px"}}>
          <select className="card-header form-control" style={{ height: "50px" }}>
            <option>1 товар</option>
            <option>2 товар</option>
            <option>3 товар</option>
            <option>4 товар</option>
            <option>5 товар</option>
          </select>
          <div className="card-body container">
            <div className="row">

              <div className="col-sm-3 pt-3">
                <img src={ProductImage} alt="Изображение товара" className="card-img" style={{ width: "100px" }} />
              </div>

              <div className="col-sm-9">

                <div className="row justify-content-around align-items-center">
                  <div className="col-sm">
                    <p>Наименование</p>
                  </div>
                  <div className="col-sm">
                    <p style={{ textAlign: "center"}}>Контруктор для детей</p>
                  </div>
                  <div className="col-sm" style={{ textAlign: "center" }}>
                    <p className="badge badge-secondary">Доставлен</p>
                  </div>
                </div>

                <div className="row justify-content-around align-items-center">
                  <div className="col-sm">
                    <p>Количество</p>
                  </div>
                  <div className="col-sm">
                    <p style={{ textAlign: "center" }}>1</p>
                  </div>
                  <div className="col-sm">

                  </div>
                </div>

                <div className="row justify-content-around align-items-center">
                  <div className="col-sm">
                    <p>Стоимость</p>
                  </div>
                  <div className="col-sm">
                    <p style={{ textAlign: "center" }}>150 Р</p>
                  </div>
                  <div className="col-sm">

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
