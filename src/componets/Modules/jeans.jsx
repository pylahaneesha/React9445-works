import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Jeansdata } from '../Data/Jeansdata';

function Jeans() {
  return (
    <div className="bg-light min-vh-100" style={{ backgroundColor: '#f4f7fc' }}>
      <div className="container py-5">
        <center><h1 className="mb-4 text-primary">Jeans Collection</h1></center>

        <Link to='/dashboard'>
          <button className="btn btn-outline-primary mb-4">Back</button>
        </Link>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            Jeansdata.map((eee) => {
              return (
                <div className="col" key={eee.id}>
                  <div className="card shadow-sm bg-white border-0 rounded-3">
                   
                    <img 
                      src={eee.Image} 
                      alt={eee.id} 
                      className="card-img-top rounded-3" 
                      style={{ height: '250px', objectFit: 'contain', width: '100%' }} 
                    />
                    <div className="card-body">
                      <h5 className="card-title text-dark">{eee.id}</h5>
                      <p className="card-text text-muted"><strong>Color:</strong> {eee.Color}</p>
                      <p className="card-text text-muted"><strong>Material:</strong> {eee.Material}</p>
                      <p className="card-text text-muted"><strong>Price:</strong> {eee.Price}</p>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Jeans;
