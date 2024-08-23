import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="footer-info mb-4">
                <p>
                  <strong id="contact-phone" className="language-dependent">
                    Phone:
                  </strong>
                  06 60 53 40 79
                  <br />
                  <strong>Email:</strong> mihutamihail95@gmail.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a
                    href="https://www.linkedin.com/in/mihuta-mihail-51b690296"
                    className="twitter"
                    target="_blank"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/MihutaMihail"
                    className="facebook"
                    target="_blank"
                  >
                    <i className="bx bxl-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4 id="useful-links" className="language-dependent">Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a id="nav-skills" className="language-dependent" href="#skills">
                    Skills
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a
                    id="nav-projects"
                    className="language-dependent"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a
                    id="nav-experiences"
                    className="language-dependent"
                    href="#experiences"
                  >
                    Experiences
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
