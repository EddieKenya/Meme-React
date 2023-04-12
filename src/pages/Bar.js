import React, { useState } from 'react';
import './Navbar.css';


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">Logo</a>
      </div>
      <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">About</a>
        </li>
        <li className="nav-item">
          <a href="#">Services</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
  );
}

export default Navbar;
