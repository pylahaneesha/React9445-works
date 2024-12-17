import React, { useContext } from 'react';
import { CartContext } from '../context/Cartcontext';
import { Link } from 'react-router-dom';

function Topbar() {
  const { cart } = useContext(CartContext); 

  return (
    <div className="border p-2 d-flex justify-content-between">
      <p>Top Bar</p>
      <div>
        <Link to="/cart">
          <button className="btn btn-primary w-5 mt-3">
            Cart ({cart.length})
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
