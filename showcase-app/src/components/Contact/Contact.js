import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2 id="nav-contact" className="language-dependent">
            Contact
          </h2>
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 order-md-2">
            <div className="contact-info">
              <h2
                id="contact-right-phone-number"
                className="language-dependent"
              >
                Phone Number
              </h2>
              <p>06 60 53 40 79</p>
            </div>
          </div>

          <div className="col-md-6 order-md-1">
            <form className="contact-form">
              <div className="form-group">
                <label
                  id="contact-left-name"
                  className="language-dependent"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                id="contact-left-button-text"
                className="btn btn-block language-dependent"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
