import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.scss';

function Navbar() {
  return (
    <div id='navbar'>
      <ul className="navbar-links">
        <li className="navbar-links-pages"><Link to="/">Home</Link></li>
        <li className="navbar-links-pages"><Link to="/bmi">Indice de mass corporelle</Link></li>
        <li className="navbar-links-pages"><Link to="/energy">Besoins energétiques</Link></li>
        <li className="navbar-links-pages"><Link to="/deficits">Déficit calorique</Link></li>

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