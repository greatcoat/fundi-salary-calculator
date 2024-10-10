import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        {/* SVG Logo */}
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="143.822" height="29.415" viewBox="0 0 143.822 29.415">
            <defs>
              <clipPath id="clip-path">
                <rect id="Rectangle_1037" data-name="Rectangle 1037" width="7.655" height="7.655"/>
              </clipPath>
            </defs>
            <g id="fundi-logo-web" transform="translate(-29.3 -80.4)">
              <path id="Path_790" data-name="Path 790" d="M154.255,109.333h6.691V80.46h-6.691Zm-27-5.485v-17.9H133.4a9.715,9.715,0,0,1,6.932,2.411,8.449,8.449,0,0,1,2.592,6.51,8.276,8.276,0,0,1-2.592,6.51,9.715,9.715,0,0,1-6.932,2.411h-6.148Zm-6.631,5.485H133.7a18.36,18.36,0,0,0,8.318-1.808,13.449,13.449,0,0,0,5.606-5.063,15.494,15.494,0,0,0,0-15.19,13.449,13.449,0,0,0-5.606-5.063A18.36,18.36,0,0,0,133.7,80.4H120.62ZM107.178,80.46V98L92.832,80.46H87.287v28.873h6.57V91.792l14.406,17.541h5.485V80.46ZM68.42,109.815c4.1,0,7.354-1.145,9.644-3.436s3.436-5.546,3.436-9.765V80.46H74.93V96.373c0,2.652-.542,4.641-1.627,5.847a5.965,5.965,0,0,1-4.762,1.869c-4.28,0-6.45-2.592-6.45-7.776V80.46H55.4V96.615q0,6.329,3.436,9.765t9.584,3.436M51.06,85.825V80.46H29.3v28.873h6.691V98.845H49.372V93.42H35.931V85.825Z" fill="#0500e0"/>
              <g id="Group_1027" data-name="Group 1027" transform="translate(165.466 101.859)">
                <path id="Path_791" data-name="Path 791" d="M262.114,119.823V119.1H259.1v3.978h.9v-1.447h1.386v-.784H260v-1.025Z" transform="translate(-256.749 -117.231)" fill="#0500e0"/>
                <g id="Group_1026" data-name="Group 1026">
                  <g id="Group_1025" data-name="Group 1025" clip-path="url(#clip-path)">
                    <path id="Path_792" data-name="Path 792" d="M262.855,123.655H255.2V116h7.655Zm-7.052-.6h6.51V116.6H255.8Z" transform="translate(-255.2 -116)" fill="#0500e0"/>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </div>

      {/* Regular Desktop Nav Links */}
      <ul className="nav-links">
        <li><a href="#salary-calculator">Salary Calculator</a></li>
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

      {/* Burger Menu Icon for Mobile */}
      <div className="burger-menu" onClick={toggleMenu}>
        ≡
      </div>

      {/* Slide-in Mobile Menu */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#salary-calculator" onClick={toggleMenu}>Salary Calculator</a></li>
          <li>
            <a 
              href="https://form.typeform.com/to/IgVJvciQ?typeform-medium=embed-snippet" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Hire Marketers
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;