import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className="sidenav">
      <ul className="sidenav-list">
        <li><Link to='/dashboard' className='sidenav-link'>Dashboard</Link></li>
        <li><Link to='/sarees' className='sidenav-link'>Sarees</Link></li>
        <li><Link to='/dresses' className='sidenav-link'>Dresses</Link></li>
        <li><Link to='/jeans' className='sidenav-link'>Tops</Link></li>
        <li className="logout-item"><Link to='/React9445-works' className='sidenav-link'>Logout</Link></li>
      </ul>
    </div>
  )
}

export default Sidenav;
