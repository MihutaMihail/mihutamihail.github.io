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
                  {/* CONTACT INFO */}
                  <strong id="contact-phone" className="language-dependent">
                    Phone:&nbsp;
                  </strong>
                  06 60 53 40 79
                  <br />
                  <strong>Email:</strong> mihutamihail95@gmail.com
                  <br />
                </p>
                {/* END CONTACT INFO */}

                {/* SOCIAL LINKS */}
                <div className="social-links mt-3">
                  {/* LINKEDIN */}
                  <a
                    href="https://www.linkedin.com/in/mihuta-mihail-51b690296"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  {/* END LINKEDIN */}

                  {/* GITHUB */}
                  <a
                    href="https://github.com/MihutaMihail"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-github"></i>
                  </a>
                  {/* END GITHUB */}
                </div>
                {/* END SOCIAL LINKS */}
              </div>
            </div>

            {/* DOWNLOAD CV */}
            <div className="col-lg-4 col-md-6 footer-links">
              <h5 id="download-cv" className="language-dependent">
                Download CV
              </h5>
              <a
                href="./pdf/CV_Alternance_Mihuta-Mihail.pdf"
                className="btn btn-secondary"
                download="CV_Alternance_Mihuta-Mihail.pdf"
              >
                CV_Alternance_Mihuta-Mihail.pdf
              </a>
            </div>
            {/* END DOWNLOAD CV */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
