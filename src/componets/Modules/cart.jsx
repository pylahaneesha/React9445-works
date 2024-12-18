import React, { useContext } from 'react';
import { CartContext } from '../context/Cartcontext';

function CartPage() {
  const { cart, setCart } = useContext(CartContext); 

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId)); 
  };

  return (
    <div className="container py-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="d-flex justify-content-around align-items-center border p-3 mb-2">
              <div>
                <img src={product.Image} alt={product.id} style={{ width: '100px' }} />
              </div>
              <div>
                <p><strong>{product.id}</strong></p>
                <p>Color: {product.Color}</p>
                <p>Price: {product.Price}</p>
                <p>Material: {product.Material}</p>
        
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
