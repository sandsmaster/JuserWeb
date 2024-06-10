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
          <HeaderButton text="About us" />
          <HeaderButton text="What we do" />
          <HeaderButton text="Previous work" />
        </ul>
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
