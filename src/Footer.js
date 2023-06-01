import React from 'react';

const Footer = () => (
  <footer>
    <p className="footer-text">Download <a href={process.env.PUBLIC_URL + "/Jonathan_Haws_Resume.pdf"}> RESUME </a></p>
  </footer>
);

export default Footer;