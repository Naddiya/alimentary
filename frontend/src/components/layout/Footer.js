import React from "react";
import { Box, MenuList, MenuItem } from "@mui/material";

import "../../styles/footer.scss";

function Footer() {
  const year = new Date();

  return (
    <Box className="footer">
      <MenuList className="footer-top">
        <MenuItem>Nous contacter</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Réseaux Sociaux</MenuItem>
        <MenuItem>Mentions Légales</MenuItem>
      </MenuList>
      <Box className="footer-bottom">
        Fièrement propulsé par Naddiya - {year.getFullYear()}
      </Box>
    </Box>
  );
}

export default Footer;
