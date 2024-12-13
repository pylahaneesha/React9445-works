import React, { createContext, useState } from 'react';
import { Sareesdata } from '../../Data/Saressdata';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Sidenav from '../../Modules/Sidenav';

export const useContext = createContext();

function Sareesdetails() {
  const [cart, setCart] = useState(0);
  let { id } = useParams();
  let productDet = Sareesdata.find((item) => item.id == id);

  return (
    <div style={{ backgroundColor: '#f4f7fc', Height: '100vh' }}>
      <Row className="g-0">
   
        <Col sm={2} className="p-0">
          <Sidenav />
        </Col>
        <Col sm={10}>
          <div className="container py-5">
            <div className="d-flex justify-content-around align-items-center border rounded-3 p-4 bg-white shadow-sm">
             
              <div className="data" style={{ maxWidth: '400px' }}>
                <h4 className="mb-3 text-dark">{productDet.id}</h4>
                <p><strong>Color:</strong> {productDet.Color}</p>
                <p><strong>Material:</strong> {productDet.Material}</p>
                <p><strong>Price:</strong> {productDet.Price}</p>
                <p><strong>Items in Cart:</strong> {cart}</p>
                <button
                  className="btn btn-outline-primary mt-2"
                  onClick={() => setCart(cart + 1)}
                >
                  Add to Cart
                </button>
              </div>

             
              <div className="product">
                <img
                  src={productDet.Image}
                  alt={productDet.id}
                  style={{ width: '300px' }}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Sareesdetails;
