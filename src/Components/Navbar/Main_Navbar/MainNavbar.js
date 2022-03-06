import React from 'react'
import './MainNavbar.css'
function MainNavbar() {
  return (
    <div className='main-navbar'>
            <div className="logo">
                Edvora
            </div>
            <div className="user-section">
                    <div className="user-name">
                        <h5>Dhruv Rathi</h5>
                    </div>
                    <div className="user-icon">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.w2McZSq-EYWxh02iSvC3xwHaHa&pid=Api&P=0&w=170&h=170" alt="user-icon" />
                    </div>
            </div>
    </div>
  )
}

export default MainNavbar