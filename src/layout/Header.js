import React, { useState } from "react";
import Mainlogo from "../../src/assets/logo/MainLogo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Track if the menu is closing
  const location = useLocation();

  const toggleMenu = () => {
    if (isMenuOpen) {
      handleCloseMenuWithAnimation();
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleCloseMenuWithAnimation = () => {
    setIsClosing(true); // Add closing animation
    setTimeout(() => {
      setIsMenuOpen(false); // Hide menu after animation
      setIsClosing(false); // Reset closing state
    }, 300); // Match this timeout with CSS animation duration
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="header_div">
      <div className="logo_div">
        <a href="/">
          <img className="main_logo" src={Mainlogo} alt="Main Logo" />
        </a>
      </div>
      <div>
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Unicode for hamburger icon */}
        </div>

        {/* Navigation Menu */}
        <ul
          className={`list_right_side ${isMenuOpen ? "active" : ""} ${
            isClosing ? "closing" : ""
          }`}
        >
          {isMenuOpen && (
            <div className="close-menu" onClick={handleCloseMenuWithAnimation}>
              &#10005; {/* Unicode for cross icon */}
            </div>
          )}
          <li className="list_second_styling" onClick={handleCloseMenuWithAnimation}>
            <p>
              <Link
                to="/"
                style={isActivePath("/") ? { color: "#0dc270" } : {}}
              >
                <strong>Home</strong>
              </Link>
            </p>
          </li>
          <li className="list_second_styling" onClick={handleCloseMenuWithAnimation}>
            <p>
              <Link
                to="/services"
                style={isActivePath("/services") ? { color: "#0dc270" } : {}}
              >
                <strong>Services</strong>
              </Link>
            </p>
          </li>
          <li className="list_second_styling" onClick={handleCloseMenuWithAnimation}>
            <p>
              <Link
                to="/company"
                style={isActivePath("/company") ? { color: "#0dc270" } : {}}
              >
                <strong>Company</strong>
              </Link>
            </p>
          </li>
          <li className="list_second_styling" onClick={handleCloseMenuWithAnimation}>
            <p>
              <Link
                to="/careers"
                style={isActivePath("/careers") ? { color: "#0dc270" } : {}}
              >
                <strong>Careers</strong>
              </Link>
            </p>
          </li>
          <li className="list_second_styling" onClick={handleCloseMenuWithAnimation}>
            <p>
              <Link
                to="/blogs"
                style={isActivePath("/blogs") ? { color: "#0dc270" } : {}}
              >
                <strong>Blogs</strong>
              </Link>
            </p>
          </li>
          <li className="list_second_styling" onClick={handleCloseMenuWithAnimation}>
            <p>
              <Link
                to="/contact-us"
                style={isActivePath("/contact-us") ? { color: "#0dc270" } : {}}
              >
                <strong>Contact Us</strong>
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
