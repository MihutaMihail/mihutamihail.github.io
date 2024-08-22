import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-6">
              <div class="footer-info mb-4">
                <p>
                  <strong id="contact-phone" class="language-dependent">
                    Phone:
                  </strong>
                  06 60 53 40 79
                  <br />
                  <strong>Email:</strong> mihutamihail95@gmail.com
                  <br />
                </p>
                <div class="social-links mt-3">
                  <a
                    href="https://www.linkedin.com/in/mihuta-mihail-51b690296"
                    class="twitter"
                    target="_blank"
                  >
                    <i class="bx bxl-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/MihutaMihail"
                    class="facebook"
                    target="_blank"
                  >
                    <i class="bx bxl-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a id="nav-skills" class="language-dependent" href="#skills">
                    Skills
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a
                    id="nav-projects"
                    class="language-dependent"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a
                    id="nav-experiences"
                    class="language-dependent"
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
