import React from 'react';
import Magnifier from "react-magnifier";


class Product extends React.Component {
  render() {
    return (
      <main className="container">
      <div className="row align-items-center justify-content-around" style={{marginBottom: "30px"}}>

        <div className="col-lg-5 mb-2">
          <div className="card" style={{minHeight: "430px"}}>
            <div className="card-body">
              <Magnifier src={this.props.image} minWidth={200} maxWidth={400} className="card-img-top" alt={this.props.name}/>
            </div>
          </div> 
        </div>

        <div className="col-lg-5 mb-2">
          <div className="card"  style={{minHeight: "430px"}}>
            <div className="card-body">
              <div className="row justify-content-around align-items-center" style={{marginBottom: "30px"}}> 
                <div>
                  <p><strong>{this.props.name}</strong></p>
                </div>
              </div>

              <div className="row justify-content-around align-items-center ml-2" style={{marginBottom: "30px"}}>
                <div className="col-sm">
                  <p>Цена:</p>
                </div>
                <div className="col-sm">
                  <p><strong>{this.props.price}Р</strong></p>
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
                  <p>{this.props.description}</p>
                </div>
              </div>

              <div className="row justify-content-around align-items-center ml-2">
                <button type="button" className="btn btn-danger">Добавить в корзину</button>
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