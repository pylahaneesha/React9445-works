import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ForgotImage from '../images/forgot.png';

function Signup() {
  return (
    <div className="container-fluid p-0 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f4f7fc' }}>
      <div className="row w-100 justify-content-center">
  
        <div className="col-md-6 d-flex justify-content-center align-items-center p-5" style={{  borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }}>
          <img src={ForgotImage} alt="Signup Illustration" className="img-fluid" style={{ maxHeight: '100%', borderRadius: '15px' }} />
        </div>

    
        <div className="col-md-6 p-5">
          <h2 className="mb-4 text-center text-primary">Create Your Password</h2>
       
          <form>
            <div className="mb-3">
              <input type="email" placeholder="Enter your Email Address" className="form-control" required />
            </div>
            <div className="mb-3">
              <input type="text" placeholder="Enter your Username" className="form-control" required />
            </div>
            <div className="mb-3">
              <input type="password" placeholder="Enter your New Password" className="form-control" required />
            </div>
            <div className="mb-3">
              <input type="password" placeholder="Confirm your Password" className="form-control" required />
            </div>
            <div className="text-center">
              <Link to="/">
                <button className="btn btn-primary w-100 mt-3">Submit</button>
              </Link>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;
