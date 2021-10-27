import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.scss';


function DropDownToolsMenu() {
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef(null);

  const handleClick = (e) => setToggle(!toggle);
  const handleClickOutside = (e) => {
    if (toggleRef.current &&
      !toggleRef.current.contains(e.target)) {
      return setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div className="navbar-links-pages" onClick={handleClick} ref={toggleRef}>
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