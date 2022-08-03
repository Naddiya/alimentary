import { Box, MenuList, MenuItem, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import ToggleToolsMenu from "./ToggleToolsMenu.js.js";
import Bubble from "../visuals/Bubble.js";

import "../../styles/navbar.scss";

function Navbar() {
  return (
    <>
      <Bubble />
      <Box className="navbar">
        <MenuList className="navbar-links">
          <MenuItem className="navbar-links-pages" component={Link} to="/">
            Home
          </MenuItem>

          <MenuItem
            className="navbar-links-pages"
            component={Link}
            to="/dashboard"
          >
            DashBoard
          </MenuItem>
          <ToggleToolsMenu component={Link} />
        </MenuList>
        <MenuList className="navbar-links">
          <MenuItem className="navbar-links-auth" component={Link} to="#">
            Register
          </MenuItem>
          <MenuItem className="navbar-links-auth" component={Link} to="#">
            Signin
          </MenuItem>
        </MenuList>
        <Divider />
      </Box>
    </>
  );
}

export default Navbar;
