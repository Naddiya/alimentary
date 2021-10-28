import React from 'react';
import '../../styles/footer.scss';
import { Box, MenuList, MenuItem } from '@mui/material';


function Footer() {

  return (
    <Box className="footer" >
      <MenuList className="footer-links">
        <MenuItem className="footer-link">Nous contacter</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Réseaux Sociaux</MenuItem>
        <MenuItem>Mentions Légales</MenuItem>
      </MenuList>
      <Box className="footer-bottom">Fièrement propulsé par Naddiya - 2021</Box>
    </Box>
  );
}

export default Footer;