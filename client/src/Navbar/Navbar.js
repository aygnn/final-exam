import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';



export default function Navbar() {
  return (
    <div className='navbarr'>
        <div className='logo'>
        <h3>Floral Studio</h3>

        </div>
    <div className='homes'>
        
    <Link to={'/'}>Home</Link>
    <Link to={'add'}>Add</Link>
    <a href='#'>Portfolio</a>
    <a href='#'>Pricing</a>
    <a href='#'>Contacts</a>


    </div>
    <div className='burger'><GiHamburgerMenu/></div>

    </div>
  )
}
