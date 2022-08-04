import React from "react";
import { Box, MenuList, MenuItem, Link } from "@mui/material";

import "../../styles/footer.scss";

function Footer() {
  const year = new Date();

  return (
    <Box className="footer">
      <MenuList className="footer-top">
        <MenuItem component={Link} to="/contact">
          Nous contacter
        </MenuItem>
        <MenuItem component={Link} to="/about">
          About
        </MenuItem>
        <MenuItem component={Link} to="/network">
          Réseaux Sociaux
        </MenuItem>
        <MenuItem component={Link} to="/sources">
          Sources
        </MenuItem>
        <MenuItem component={Link} to="/legals">
          Mentions Légales
        </MenuItem>
      </MenuList>
      <Box className="footer-bottom">
        Fièrement propulsé par Naddiya - {year.getFullYear()}
      </Box>
    </Box>
  );
}

export default Footer;
