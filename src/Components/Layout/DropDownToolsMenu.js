import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.scss';


function DropDownToolsMenu() {
  const [toggle, setToggle] = useState(false);
  const handleClick = (e) => setToggle(!toggle);

  return (
    <div className="navbar-links-pages"  onClick={handleClick}>
      <Link to="#">
        Tools
      </Link>
      {toggle && (
        <div className="toggle-menu" onClick={handleClick} >
            <Link className="navbar-links-pages toggle-menu-tool" to="/bmi">
              Indice de masse corporelle
            </Link>
            <Link className="navbar-links-pages toggle-menu-tool" to="/energy">
              Besoins energétiques
            </Link>
            <Link className="navbar-links-pages toggle-menu-tool" to="/deficits">
              Déficits maximaux
            </Link>
        </div >
      )}
    </div>
  );
};

export default DropDownToolsMenu;