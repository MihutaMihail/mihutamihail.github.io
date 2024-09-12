import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { changeLanguage } from "../../../js/changeLanguage";

const Navbar = () => {
  // State to manage selected language
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default to English

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to change the language based on the selected language flag
  const translatePage = () => {
    if (selectedLanguage === "en") {
      changeLanguage("en", null);
    } else {
      changeLanguage("fr", null);
    }
  };

  // Combined handler for navigation click events
  const handleNavClick = () => {
    scrollToTop();
    translatePage();
  };

  // Function to handle langauge selection
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    changeLanguage(lang, null);
  };

  return (
    <header id="nav">
      <div className="container-fluid">
        <div className="row">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* CV */}
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link"
                      activeclassname="active"
                      onClick={handleNavClick}
                    >
                      CV
                    </NavLink>
                  </li>
                  {/* End CV */}

                  {/* Blog */}
                  <li className="nav-item">
                    <NavLink
                      to="/blog"
                      className="nav-link"
                      activeclassname="active"
                      onClick={handleNavClick}
                    >
                      Blog
                    </NavLink>
                  </li>
                  {/* End Blog */}

                  {/* About */}
                  <li className="nav-item">
                    <NavLink
                      id="nav-about"
                      to="/about"
                      className="nav-link language-dependent"
                      activeclassname="active"
                      onClick={handleNavClick}
                    >
                      About
                    </NavLink>
                  </li>
                  {/* End About */}

                  {/* Contact */}
                  <li className="nav-item">
                    <NavLink
                      id="nav-contact"
                      to="/contact"
                      className="nav-link language-dependent"
                      activeclassname="active"
                      onClick={handleNavClick}
                    >
                      Contact
                    </NavLink>
                  </li>
                  {/* End Contact */}
                </ul>

                {/* Language dropdown */}
                <div className="dropdown language-dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownLanguage"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label={`Selected Language: ${
                      selectedLanguage === "en" ? "English" : "Français"
                    }`}
                  >
                    {/* Dynamically show the selected flag */}
                    <img
                      id="selectedFlag"
                      src={
                        selectedLanguage === "en"
                          ? "https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg"
                          : "https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png"
                      }
                      className="language-button"
                      alt={
                        selectedLanguage === "en" ? "UK Flag" : "France Flag"
                      }
                    />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownLanguage"
                  >
                    {/* English */}
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleLanguageChange("en")}
                        aria-label="Change language to English"
                      >
                        <img
                          src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg"
                          className="language-button"
                          alt="UK Flag"
                        />
                        &nbsp;English
                      </button>
                    </li>
                    {/* End English */}

                    {/* French */}
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleLanguageChange("fr")}
                        aria-label="Change language to Français"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png"
                          className="language-button"
                          alt="France Flag"
                        />
                        &nbsp;Français
                      </button>
                    </li>
                    {/* End French */}
                  </ul>
                </div>
                {/* End Language dropdown */}
              </div>
            </div>
          </nav>
          {/* End Navbar */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
