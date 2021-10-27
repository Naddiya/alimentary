import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.scss';
import DropDownToolsMenu from './DropDownToolsMenu';

function Navbar() {

  return (
    <div id='navbar'>
      <nav className="navbar-links">
        <Link className="navbar-links-pages" to="/">
          Home
        </Link>
        <Link className="navbar-links-pages" to="/about">
          About
        </Link>
        <Link className="navbar-links-pages" to="/dashboard">
          DashBoard
        </Link>
        <DropDownToolsMenu />
        <div className="navbar-links">
          <Link className="navbar-links-auth" to="#">Register</Link>
          <Link className="navbar-links-auth" to="#">Signin</Link>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;