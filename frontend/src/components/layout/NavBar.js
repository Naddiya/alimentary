import { Box, MenuList, MenuItem } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import React from "react";
import ToggleToolsMenu from "./ToggleToolsMenu.js.js";
import Bubble from "../visuals/Bubble.js";

import "../../styles/navbar.scss";

function Navbar() {
  const token = false;

  return (
    <Box className="navbar">
      <Box className="navbar-logo">
        <a href="/home">
          <Bubble />
        </a>
      </Box>
      <Box className="navbar-menu">
        <MenuList className="navbar-menu-links">
          <MenuItem className="navbar-links-pages" component={Link} to="/">
            Home
          </MenuItem>
          <ToggleToolsMenu component={Link} />
          <MenuItem
            className="navbar-links-pages"
            component={Link}
            to="/sources"
          >
            Sources
          </MenuItem>
          <MenuItem
            className="navbar-menu-links-auth"
            component={Link}
            to="/register"
          >
            Register
          </MenuItem>
          {token && (
            <MenuItem
              className="navbar-menu-links-auth"
              component={Link}
              to="/login"
            >
              Login
            </MenuItem>
          )}
          {token && (
            <MenuItem
              className="navbar-menu-links-pages"
              component={Link}
              to="/dashboard"
            >
              DashBoard
            </MenuItem>
          )}
        </MenuList>
      </Box>
    </Box>
  );
}

export default Navbar;
