import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='headerContainer flex bg-white shadow-lg pr-5 pl-5 pt-10 pb-10 ms-4 me-4' >
        <div className='logo flex grow'>
          <img src={require('./download.png')}className='w-10  '></img>
          <h3>Swiggy App</h3>
        </div>
        <div className='menuContainer'>
          <ul className='flex'>
         <Link to ="/Offers"><li className='ps-5 text-lg'>Offers</li></Link>  
            <li className='ps-5 text-lg'>Help</li>
            <li className='ps-5 text-lg'>Sign In</li>
          <Link to="/Cart"><li className='ps-5 text-lg'>Cart</li></Link>  
          </ul>
        </div>
    </div>
  )
}

export default Header;