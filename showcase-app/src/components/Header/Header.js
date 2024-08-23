import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { changeLanguage } from "../../js/changeLanguage";

const Header = () => {
  return (
      <header id="header">
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
                      >
                        Blog
                      </NavLink>
                    </li>
                    {/* End Blog */}
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
                      />
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownLanguage"
                    >
                      {/* English */}
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(event) => changeLanguage("en", event, "cv")}
                        >
                          <img
                            src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg"
                            className="language-button"
                          />
                          English
                        </a>
                      </li>
                      {/* End English */}

                      {/* French */}
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(event) => changeLanguage("fr", event, "cv")}
                        >
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png"
                            className="language-button"
                          />
                          Français
                        </a>
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

export default Header;
