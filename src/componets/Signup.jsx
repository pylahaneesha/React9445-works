import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import signupImage from '../images/signup.png'; 

function Signup() {
  return (
    <div className="container-fluid p-0 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f4f7fc' }}>
      <div className="row w-100 justify-content-center">
  
        <div className="col-md-6 d-flex justify-content-center align-items-center p-5" style={{  borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }}>
          <img src={signupImage} alt="Signup Illustration" className="img-fluid" style={{ maxHeight: '100%', borderRadius: '15px' }} />
        </div>

    
        <div className="col-md-6 p-5">
          <h2 className="mb-4 text-center text-primary">Create Your Account</h2>
          <h5 className="mb-4 text-center">Please enter your details to sign up</h5>
          <form>
            <div className="mb-3">
              <input type="email" placeholder="Enter your Email Address" className="form-control" required />
            </div>
            <div className="mb-3">
              <input type="text" placeholder="Enter your Username" className="form-control" required />
            </div>
            <div className="mb-3">
              <input type="password" placeholder="Enter your Password" className="form-control" required />
            </div>
            <div className="mb-3">
              <input type="password" placeholder="Confirm your Password" className="form-control" required />
            </div>
            <div className="text-center">
              <Link to="/React9445-works">
                <button className="btn btn-primary w-100 mt-3">Sign Up</button>
              </Link>
            </div>
            <p className="text-center mt-3">Already have an account? <Link to="/React9445-works">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;
