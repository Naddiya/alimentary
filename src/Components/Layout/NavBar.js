import React from 'react';
import '../../styles/navbar.scss';

function Navbar() {
  return (
    <div id='navbar'>
      <ul className="navbar-links">
        <li className="navbar-links-pages">Home</li>
        <li className="navbar-links-pages">About</li>
        <li className="navbar-links-pages">Tools</li>
        <div className="navbar-links">
          <li className="navbar-links-auth">Register</li>
          <li className="navbar-links-auth">Signin</li>
        </div>
      </ul>
    </div>

  );
}

export default Navbar;