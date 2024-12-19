import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Dressesdata } from '../Data/Dressesdata';
import { Col, Row } from 'react-bootstrap';
import Sidenav from './Sidenav';
function Dresses() {
  return (
    <div className="bg-light min-vh-100" style={{ backgroundColor: '#f4f7fc' }}>
      <div className="container py-5">
      <Row className="g-0">
        <Col sm={2} className="p-0">
          <Sidenav />
        </Col>
        <Col sm={10}>
        <center><h1 className="mb-4 text-primary">Dresses Collection</h1></center>

        
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            Dressesdata.map((ee) => {
              return (
                <div className="col" key={ee.id}>
                  <div className="card shadow-sm bg-white border-0 rounded-3">
                    <Link to={`/dresses/${ee.id}`} className="text-decoration-none">
                    <img 
                      src={ee.Image} 
                      alt={ee.id} 
                      className="card-img-top rounded-3" 
                      style={{ height: '250px', objectFit: 'contain', width: '100%' }} 
                    />
                    <div className="card-body">
                      <h5 className="card-title text-dark">{ee.id}</h5>
                      <p className="card-text text-muted"><strong>Color:</strong> {ee.Color}</p>
                      <p className="card-text text-muted"><strong>Material:</strong> {ee.Material}</p>
                      <p className="card-text text-muted"><strong>Price:</strong> {ee.Price}</p>
                    </div>
                    </Link>
                  </div>
                </div>
              );
            })
          }
        </div>
        </Col>
        </Row>
      </div>
      
      
    </div>
  );
}

export default Dresses;