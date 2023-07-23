import React, { useState } from 'react'
import logo from '../../asset/image/logo/logo.png'
import { Link } from 'react-scroll';
import NavLinks from './NavLinks';


function GeneralNavbar({ activeColor, setShowThemeColors, setColorItemStatus }) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const [fixed, setFixed] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      setFixed(true)
    } else {
      setFixed(false);
    }
  })
  const handleThemeButton = () => {
    setShowThemeColors(true)
    setColorItemStatus(true)
  }

  return (
    <nav className={`general-navbar ${fixed ? 'fixed-top' : ''}`}>
      <div className="container">
        <div className="inner">
          <Link className='logo' offset={-50} to='header'>
            <img src={logo} alt="logo" />
          </Link>

          <div className="right">
            <NavLinks showMenu={showMenu} setShowMenu={setShowMenu} />
            <div className="buttons">
              <button className="menu-button d-lg-none" onClick={toggleMenu}><i className="fa-solid fa-bars"></i></button>
              <button className="theme-button" style={{ color: `#${activeColor}` }} onClick={() => handleThemeButton()}><i className="fa-solid fa-brush"></i></button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default GeneralNavbar
