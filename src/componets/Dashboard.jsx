import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidenav from './Modules/Sidenav';
import { Sareesdata } from './Data/Saressdata';
import { Link } from 'react-router-dom';
import { Dressesdata } from './Data/Dressesdata';
import { Jeansdata } from './Data/Jeansdata';

function Dashboard() {
  const display = Sareesdata.slice(0, 4);
  const display1 = Dressesdata.slice(0, 4);
  const display2 = Jeansdata.slice(0, 4);
  
  return (
    <div className="container-fluid" style={{ backgroundColor: '#f4f7fc', minHeight: '100vh' }}>
      <Row className="g-0">
        <Col sm={2} className="p-0">
          <Sidenav />
        </Col>

        <Col sm={10} className="p-5">
          <div className="content-wrapper">
            <center><h1 className="mb-4 text-primary">Sarees Collection</h1></center>
            
            <Row className="g-4">
              {display.map((e) => (
                <Col xs={12} sm={6} md={3} key={e.id}>
                  <div className='card border-0'>
                    <Link to={`/sarees/${e.id}`} className="text-decoration-none">
                      <img
                        src={e.Image}
                        alt={e.id}
                        className='card-img-top'
                        style={{
                          height: '250px',
                          objectFit: 'contain',
                          width: '100%',
                          borderRadius: '10px'
                        }}
                      />
                      <div className='card-body bg-white'>
                       
                        <h5 className='card-title text-center text-dark'>{e.id}</h5>
                       
                        <p className="card-text text-dark"><strong>Color:</strong> {e.Color}</p>
                        <p className="card-text text-dark"><strong>Material:</strong> {e.Material}</p>
                      </div>
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>

            <div className="text-center mt-4">
              <Link to='/sarees'>
                <button className="btn btn-outline-primary">View All Sarees</button>
              </Link>
            </div>

            <div className="mt-5">
              <center><h1 className="mb-4 text-primary">Dresses Collection</h1></center>
              <Row className="g-4">
                {display1.map((ee) => (
                  <Col xs={12} sm={6} md={3} key={ee.id}>
                    <div className='card border-0'>
                      <Link to={`/dresses/${ee.id}`} className="text-decoration-none">
                        <img
                          src={ee.Image}
                          alt={ee.id}
                          className='card-img-top'
                          style={{
                            height: '250px',
                            objectFit: 'contain',
                            width: '100%',
                            borderRadius: '10px'
                          }}
                        />
                        <div className='card-body bg-white'>
                       
                          <h5 className='card-title text-center text-dark'>{ee.id}</h5>
                        
                          <p className="card-text text-dark"><strong>Color:</strong> {ee.Color}</p>
                          <p className="card-text text-dark"><strong>Material:</strong> {ee.Material}</p>
                        </div>
                      </Link>
                    </div>
                  </Col>
                ))}
              </Row>

              <div className="text-center mt-4">
                <Link to='/dresses'>
                  <button className="btn btn-outline-primary">View All Dresses</button>
                </Link>
              </div>
            </div>

            <div className="mt-5">
              <center><h1 className="mb-4 text-primary">Jean Tops Collection</h1></center>
              <Row className="g-4">
                {display2.map((eee) => (
                  <Col xs={12} sm={6} md={3} key={eee.id}>
                    <div className='card border-0'>
                      <Link to={`/jeans/${eee.id}`} className="text-decoration-none">
                        <img
                          src={eee.Image}
                          alt={eee.id}
                          className='card-img-top'
                          style={{
                            height: '250px',
                            objectFit: 'contain',
                            width: '100%',
                            borderRadius: '10px'
                          }}
                        />
                        <div className='card-body bg-white'>
                         
                          <h5 className='card-title text-center text-dark'>{eee.id}</h5>
                        
                          <p className="card-text text-dark"><strong>Color:</strong> {eee.Color}</p>
                          <p className="card-text text-dark"><strong>Material:</strong> {eee.Material}</p>
                        </div>
                      </Link>
                    </div>
                  </Col>
                ))}
              </Row>

              <div className="text-center mt-4">
                <Link to='/jeans'>
                  <button className="btn btn-outline-primary">View All Jean Tops</button>
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
