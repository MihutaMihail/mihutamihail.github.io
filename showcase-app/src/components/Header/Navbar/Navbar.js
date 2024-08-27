import React from "react";
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { changeLanguage } from "../../../js/changeLanguage";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const translatePage = () => {
    const selectedFlag = document.getElementById("selectedFlag")?.alt;
    
    if (selectedFlag === "UK Flag") {
      changeLanguage("en", null)
    } else {
      changeLanguage("fr", null)
    }
  }

  return (
    <header id="nav">
      <div className="container-fluid">
        <div className="row">
          {/* <!-- Navbar --> */}
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
                      onClick={() => {
                        scrollToTop();
                        translatePage();
                      }}
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
                      onClick={() => {
                        scrollToTop();
                        translatePage();
                      }}
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
                      onClick={() => {
                        scrollToTop();
                        translatePage();
                      }}
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
                      onClick={() => {
                        scrollToTop();
                        translatePage();
                      }}
                    >
                      Contact
                    </NavLink>
                  </li>
                  {/* End Contact */}
                </ul>

                {/* <!-- Language dropdown --> */}
                <div className="dropdown language-dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownLanguage"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      id="selectedFlag"
                      src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg"
                      className="language-button"
                      alt="UK Flag"
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
                        onClick={(event) => changeLanguage("en", event)}
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
                        onClick={(event) => changeLanguage("fr", event)}
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png"
                          className="language-button"
                          alt="Drapeau France"
                        />
                        &nbsp;Français
                      </button>
                    </li>
                    {/* End French */}
                  </ul>
                </div>
                {/* <!-- End Language dropdown --> */}
              </div>
            </div>
          </nav>
          {/* <!-- End Navbar --> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
