import React from 'react'
import './Navbar.css'
import {NavLink} from "react-router-dom"

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
        
            <li>
              <NavLink to="/mobiles">Mobiles</NavLink>
              </li>
              <li>
              <NavLink to="/computers">Computers</NavLink>
              </li>
              <li>
              <NavLink to="/watches">Watches</NavLink>
              </li>
              <li>
              <NavLink to="/menswear">MensWear</NavLink>
              </li>
              <li>
              <NavLink to="/womanwear">WomanWear</NavLink>
              </li>
              <li>
              <NavLink to="/furniture">Furniture</NavLink>
              </li>
              <li>
              <NavLink to="/kitchen">Kitchen</NavLink>
              </li>
              <li>
              <NavLink to="/fridge">Fridge</NavLink>
              </li>
              <li>
              <NavLink to="/books">Books</NavLink>
              </li>
              <li>
              <NavLink to="/speakers">Speakers</NavLink>
              </li>
              <li>
              <NavLink to="/tv">TV's</NavLink>
              </li>
              <li>
              <NavLink to="/ac">AC</NavLink>
              </li>
        </ul>
      </div>
    
    </div>
  )
}
