import { Box, MenuList, MenuItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import '../../styles/navbar.scss';
import ToggleToolsMenu from './ToggleToolsMenu.js';

function Navbar() {

  return (
    <Box className='navbar'>
      <MenuList className="navbar-links" sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <MenuItem className="navbar-links-pages" component={Link} to='/'>
          Home
        </MenuItem>
        <MenuItem className="navbar-links-pages" component={Link} to='/about'>
          About
        </MenuItem>
        <MenuItem className="navbar-links-pages" component={Link} to='/dashboard'>
          DashBoard
        </MenuItem>
        <ToggleToolsMenu />
        <Box className="navbar-links" sx={{ display: 'flex' }}>
          <MenuItem className="navbar-links-auth" component={Link} to='#'>
            Register
          </MenuItem>
          <MenuItem className="navbar-links-auth" component={Link} to='#' >
            Signin
          </MenuItem>
        </Box>
      </MenuList>
    </Box>

  );
}

export default Navbar;