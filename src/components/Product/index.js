import React from 'react';
import ProductImage from '../../assets/img/product/product1.jpg';
import LikeImage from '../../assets/img/like.svg';

import './index.css';

class Product extends React.Component {
  render() {
    return (
      <main className="container">
      <div className="row align-items-center justify-content-around" style={{marginBottom: "30px"}}>

        <div className="col-lg-5 mb-2">
          <div className="card" style={{minHeight: "450px"}}>
            <div className="card-body">
              <img src={ProductImage} className="card-img-top" alt="Продукт"/>
            </div>
          </div> 
        </div>

        <div className="col-lg-5 mb-2">
          <div className="card"  style={{minHeight: "450px"}}>
            <div className="card-body">
              <div className="row justify-content-around align-items-center" style={{marginBottom: "30px"}}>
                <div>
                  <p className="pt-3"><strong>Детский конструктор</strong></p>
                </div>
                  <div className="btn-hover">
                </div>
              </div>

              <div className="row justify-content-around align-items-center ml-2" style={{marginBottom: "30px"}}>
                <div className="col-sm">
                  <p>Цена:</p>
                </div>
                <div className="col-sm">
                  <p><strong>317 P</strong></p>
                </div>
              </div>

              <div className="row justify-content-around align-items-center ml-2" style={{marginBottom: "30px"}}>
                <div className="col-sm">
                  <p>Количество:</p>
                </div>
                <div className="col-sm">
                  <div className="form-group">
                    <input className="form-control" type="number" placeholder="1" style={{width: "110px"}}/>
                  </div>
                </div>
              </div>

              <div className="row justify-content-around align-items-center ml-2">
                <div className="col-sm">
                  <p>Описание:</p>
                </div>
              </div>
              <div className="row justify-content-around align-items-center ml-2" style={{marginBottom: "30px"}}>
                <div className="col-sm">
                  <p>Тут будет описание товара, тип смотрите какой классный конструктор, вау, *взрыв*, эпик и всё.</p>
                </div>
              </div>

              <div className="row justify-content-around align-items-center ml-2">
                <div className="col-sm">
                  <button type="button" className="btn btn-danger">Добавить в корзину</button>
                </div>
                <div className="col-sm">
                <a className="btn btn-light" href="#" role="button">Купить в 1 клик</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      </main>
    );
  }
}

export default Product;