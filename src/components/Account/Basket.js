import React from 'react';

import ProductImage from '../../assets/img/product/product1.jpg';
import Bin from '../../assets/img/bin.svg';

class Basket extends React.Component {
  render() {
    return (
      <div className="container mt-1" style={{padding:"0px"}}>
        <div className="card mb-4" style={{padding:"10px", minWidth:"200px"}}>
          <div className="row no-gutters align-items-center">
            <div className="col-md-3">
              <img src={ProductImage} className="card-img" alt="..." />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">Конструктор для детей</h5>
                <p className="card-text" style={{overflow:"hidden"}}>Супер крутое описание товара, купите здесь и сейчас. Вы, кстати, в корзине, ага. Вжух-вжух, купи скорей, вместе с нами веселей.</p>
              </div>
            </div>
            <div className="col-md-2" style={{textAlign:"center"}}>
              <button type="button" className="btn btn-light" style={{textAlign:"center"}}>
                <img src={Bin}/>
                <p className="card-text"><small class="text-muted">Удалить</small></p>
              </button>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col-sm" style={{textAlign:"center"}}>
              <p className="card-text">Количество:</p>
            </div>
            <div className="col-sm" style={{textAlign:"center"}}>
              <input type="number" placeholder="1" style={{width: "110px", borderRadius:"3px"}}/>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col-sm" style={{textAlign:"center"}}>
              <p className="card-text">Цена:</p>
            </div>
            <div className="col-sm" style={{textAlign:"center"}}>
              <p className="card-text">317Р</p>
            </div>
          </div>
        </div>

        <div className="card mb-4" style={{padding:"10px", minWidth:"200px"}}>
          <div className="row no-gutters align-items-center">
            <div className="col-md-3">
              <img src={ProductImage} className="card-img" alt="..." />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">Конструктор для детей</h5>
                <p className="card-text" style={{overflow:"hidden"}}>Супер крутое описание товара, купите здесь и сейчас. Вы, кстати, в корзине, ага. Вжух-вжух, купи скорей, вместе с нами веселей.</p>
              </div>
            </div>
            <div className="col-md-2" style={{textAlign:"center"}}>
              <button type="button" className="btn btn-light" style={{textAlign:"center"}}>
                <img src={Bin}/>
                <p className="card-text"><small class="text-muted">Удалить</small></p>
              </button>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col-sm" style={{textAlign:"center"}}>
              <p className="card-text">Количество:</p>
            </div>
            <div className="col-sm" style={{textAlign:"center"}}>
              <input type="number" placeholder="1" style={{width: "110px", borderRadius:"3px"}}/>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col-sm" style={{textAlign:"center"}}>
              <p className="card-text">Цена:</p>
            </div>
            <div className="col-sm" style={{textAlign:"center"}}>
              <p className="card-text">317Р</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <button type="button" className="btn btn-danger">
              Купить
          </button>
        </div>
        
      </div>
        );
      }
    }
    
export default Basket;