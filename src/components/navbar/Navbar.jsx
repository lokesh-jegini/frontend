import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='Navbar'>
         <div className="navSection">
  <div className="title">
    <h2>E-Mart</h2>
  </div>
  
  <div className='navsearch'>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user">
          <div className="user-detail">SignIN/SignUp</div>
        </div>
          <div className="cart">Cart</div>
          </div>
      </div>
      <div className="subMenu">
        <ul>
        
            <li>Mobiles</li>
            <li>Computers</li>
            <li>Watches</li>
            <li>Mens Wear</li>
            <li>Woman Wear</li>
            <li>Furniture</li>
            <li>Kitchen</li>
            <li>Fridge</li>
            <li>Books</li>
            <li>Speakers</li>
            <li>TV's</li>
            <li>AC</li>
      
        </ul>
      </div>
    
    </div>
  )
}
