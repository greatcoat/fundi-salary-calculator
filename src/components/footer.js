import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Fundi. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://www.fundi.digital/" target="_blank" rel="noopener noreferrer">
          Visit Fundi
        </a>
        <span> | </span>
        <a href="https://www.linkedin.com/company/fundi-digital/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <span> | </span>
        <a href="https://www.facebook.com/fundifreelance" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;