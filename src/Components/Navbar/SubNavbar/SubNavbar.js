import React from 'react'
import './SubNavbar.css';
import   { Link } from 'react-router-dom';

function SubNavbar() {
  return (
    <>
  
    <div className="main">
       <div className="ride ride-type">
         
       <Link to='/nearestride' style={{ textDecoration: "none" }}>
       Nearest ride 
       </Link>
       </div>

       <div className="ride ride-type">
       <Link to='/upcommingride' style={{ textDecoration: "none" }}> 
        Upcomming ride(2) 
         </Link>
       </div>

       <div className="ride ride-type">
       <Link to='/pastride' style={{ textDecoration: "none" }}>
        Past ride(4)
        </Link>
       </div>
    </div>
        </>
  )
}

export default SubNavbar