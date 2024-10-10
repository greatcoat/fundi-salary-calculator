import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Replace this with an actual logo image if needed */}
        <a href="/">Fundi</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#salary-calculator">Salary Calculator</a>
        </li>
        <li>
          <a 
            href="https://form.typeform.com/to/IgVJvciQ?typeform-medium=embed-snippet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            Hire Marketers
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;