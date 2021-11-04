import React, { useState } from "react";
import { MenuItem, Box, Menu } from "@mui/material";
import { Link } from "react-router-dom";
import '../../styles/navbar.scss';


function ToggleToolsMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Box className="navbar-links-pages toggle">
      <MenuItem
        aria-controls="navbar"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} >
        Tools
      </MenuItem>

      <Menu
        className="navbar-links-pages"
        id='menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu',
        }}
      >
        <MenuItem component={Link} to="/bmi" onClick={handleClose}>
          Indice de masse corporelle
        </MenuItem>
        <MenuItem component={Link} to="/energy" onClick={handleClose}>
          Besoins energétiques
        </MenuItem>
        <MenuItem component={Link} to="/deficits" onClick={handleClose}>
          Déficits maximaux
        </MenuItem>
      </Menu >
    </Box>
  );
};

export default ToggleToolsMenu;