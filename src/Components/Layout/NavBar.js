import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.scss';
import DropDownToolsMenu from './DropDownToolsMenu';
function Navbar() {


  return (
    <nav id='navbar'>
      <ul className="navbar-links">
        <li className="navbar-links-pages">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="navbar-links-pages">
          <Link to="/about">
            About
          </Link>
        </li>
        <li className="navbar-links-pages">
          <DropDownToolsMenu />
        </li>
        <div className="navbar-links">
          <li>
            <Link className="navbar-links-auth" to="#">Register</Link>
          </li>
          <li>
            <Link className="navbar-links-auth" to="#">Signin</Link>
          </li>
        </div>
      </ul>
    </nav>

  );
}

export default Navbar;