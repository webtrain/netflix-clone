import React, { useEffect, useState } from 'react';
import Logo from '../img/netflix-logo-png-2562.png';
import Avatar from '../img/netflix-logo-png-2562.png';

const Navbar = () => {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
      return () => {
        window.removeEventListener('scroll')
      }
    })
  }, [])


  return (
    <nav className={`nav ${show  && "nav-black"}`}>
      <img className="nav__logo" src={Logo} alt="Netflix Logo" />

      <span className="nav__avatar">
        <i className="far fa-user"></i>
      </span>
    </nav>
  );
};

export default Navbar;
