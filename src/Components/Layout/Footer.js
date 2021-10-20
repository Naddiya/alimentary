import React from 'react';
import '../../styles/footer.scss'

function Footer() {
  return (
    <div id="footer">
      <ul className="footer-links">
        <li className="footer-link">Nous contacter</li>
        <li>About</li>
        <li>Réseaux Sociaux</li>
        <li>Mentions Légales</li>
      </ul>
      <div className="footer-bottom">Fièrement propulsé par Naddiya - 2021</div>
    </div>
  );
}

export default Footer;