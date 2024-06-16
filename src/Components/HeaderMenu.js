import "../Styles/Header.css";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar navbar-expand-md container-fluid fixed-top">
      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarNav"
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
      >
        <ul className="navbar-nav">
          <HeaderButton text="Home" />
          <HeaderButton text="Previous work" />
        </ul>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="mailto:email@example.com" className="nav-link">
                email@example.com
              </a>
            </li>
            <li className="nav-item">
              <a href="tel:+1234567890" className="nav-link">
                +1 (234) 567-890
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

function HeaderButton(props) {
  return (
    <li className="nav-item d-flex align-items-center">
      <a href="#" className="nav-link">
        {props.text}
      </a>
      <br />
    </li>
  );
}

export default Header;
