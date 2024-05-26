import React from 'react'
import logo from "../../assets/logo.svg";
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="navbar-logo-right">
            <p className='navbar-logo-right-p' id='p-1'>Home</p>
            <p className='navbar-logo-right-p' id='p-2'>Save</p>
            <p className='navbar-logo-right-p' id='p-3'>Travel</p>
            <p className='navbar-logo-right-p' id='p-4'>Experience</p>
            <p className='navbar-logo-right-p' id='p-5'>Wallet</p>
            <p className='navbar-logo-right-p' id='p-6'>Contact Us</p>
        </div>
    </div>
  )
}

export default Navbar;