import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-title">
          <h2 id="nav-contact" className="language-dependent">Contact</h2>
        </div>

        <div class="row justify-content-center align-items-center">
          <div class="col-md-6 order-md-2">
            <div class="contact-info">
              <h2 id="contact-right-header" className="language-dependent">Get in Touch</h2>
              <p id="contact-right-text" className="language-dependent">
                If you have any questions or would like to reach out, feel free
                to fill out the form. (NOT WORKING CURRENTLY)
              </p>
            </div>
          </div>

          <div class="col-md-6 order-md-1">
            <form class="contact-form">
              <div class="form-group">
                <label id="contact-left-name" className="language-dependent" for="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  class="form-control"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button id="contact-left-button-text" className="btn btn-block language-dependent" type="submit">
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
