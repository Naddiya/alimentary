import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.scss';


function DropDownToolsMenu() {
  const [toggle, setToggle] = useState(false);
  const handleClick = (e) => setToggle(!toggle);

  return (
    <>
      <nav
        onClick={handleClick}
      >
        Tools
      </nav>
      {toggle && (
        <ul className="toggle-menu" onClick={handleClick} >
          <li>
            <Link className="navbar-links-pages toggle-menu-tool" to="/bmi">
              Indice de masse corporelle
            </Link>
          </li>
          <li>
            <Link className="navbar-links-pages toggle-menu-tool" to="/energy">
              Besoins energétiques
            </Link>
          </li>
          <li>
            <Link className="navbar-links-pages toggle-menu-tool" to="/deficits">
              Déficits maximaux
            </Link>
          </li>
        </ul >
      )}
    </>
  );
};

export default DropDownToolsMenu;