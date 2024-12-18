import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import loginImage from '../images/max.png'; 

function Login() {
  return (
    <div className="container-fluid p-0 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f4f7fc' }}>
      <div className="row w-100 justify-content-center">
   
        <div className="col-md-6 p-5">
          <h2 className="mb-4 text-center text-primary">Welcome Back...</h2>
          <h5 className="mb-4 text-center">Please enter your details to log in</h5>
          <form>
            <div className="mb-3">
              <input type="text" placeholder="Enter your Username" className="form-control" required />
            </div>
            <div className="mb-3">
              <input type="password" placeholder="Enter your Password" className="form-control" required />
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me for 30 days</label>
            </div>
            <p><Link to="/forgot">Forgot password?</Link></p>
            <div className="text-center">
              <Link to="/dashboard">
                <button className="btn btn-primary w-100 mt-3">Login</button>
              </Link>
            </div>
            <p className="text-center mt-3">Don't have an account? <Link to="/signup">Sign up</Link></p>
          </form>
        </div>

    
        <div className="col-md-6 d-flex justify-content-center align-items-center p-5" style={{  borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }}>
          <img src={loginImage} className="img-fluid" style={{ maxHeight: '100%', borderRadius: '15px' }} />
        </div>
      </div>
    </div>
  )
}

export default Login;
