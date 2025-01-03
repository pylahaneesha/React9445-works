import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Sareesdata } from '../Data/Saressdata';
import Sidenav from './Sidenav';
import { Col, Row } from 'react-bootstrap';



function Sarees() {
  return (
    
    <div className="bg-light min-vh-100" style={{ backgroundColor: '#f4f7fc' }}>
      <div className="container py-5">
      <Row className="g-0">
        <Col sm={2} className="p-0">
          <Sidenav />
        </Col>
        <Col sm={10}>
        
        <center><h1 className="mb-4 text-primary">Sarees Collection</h1></center>

    

        
        <div className="d-flex flex-wrap justify-content-between">
          {
            Sareesdata.map((e) => {
              return (
                <div key={e.id} className="card shadow-sm bg-white border-0 rounded-3 mb-4" style={{ width: 'calc(33% - 10px)' }}>
                  <Link to={`/sarees/${e.id}`} className="text-decoration-none">
                    <img
                      src={e.Image}
                      alt={`Saree ${e.id}`}
                      className="card-img-top rounded-3"
                      style={{ height: '250px', objectFit: 'contain', width: '100%' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-dark">{e.id}</h5>
                      <p className="card-text text-muted"><strong>Color:</strong> {e.Color}</p>
                      <p className="card-text text-muted"><strong>Material:</strong> {e.Material}</p>
                      <p className="card-text text-muted"><strong>Price:</strong> {e.Price}</p>
                    </div>
                  </Link>
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

export default Sarees;
