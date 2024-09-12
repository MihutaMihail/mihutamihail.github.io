import React, { useState } from "react";
import "./Blog.css";
import Modal from "./Modal/Modal";
import Introduction from "./Parts/Introduction/Introduction";
import PowerBI from "./Parts/PowerBI/PowerBI";
import CO2Interface from "./Parts/CO2Interface/CO2Interface";
import Conclusion from "./Parts/Conclusion/Conclusion";
import { changeLanguage } from "../../js/changeLanguage";

/**
 * Blog component displays a list of blog cards and a modal with detailed content.
 * It handles opening and closing of the modal, as well as switching between different blog cards.
 *
 * @returns {JSX.Element} The Blog component with a list of blog cards and a modal for detailed content.
 */
const Blog = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Handles language change based on the selected flag
  const changeLanguageBasedOnFlag = () => {
    const selectedFlag = document.getElementById("selectedFlag")?.alt;
    const language = selectedFlag === "UK Flag" ? "en" : "fr";
    changeLanguage(language, null);
  };

  // Opens modal and resets selected card
  const handleViewDetailsClick = () => {
    setModalOpen(true);
    setSelectedCard(null);
    changeLanguageBasedOnFlag();
  };

  // Handles selection of a blog card and scrolls to the top of modal content
  const handleReadClick = (card) => {
    setSelectedCard(card);
    setTimeout(() => {
      const modalContent = document.querySelector(".modal-content-container");
      modalContent?.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
    changeLanguageBasedOnFlag();
  };

  // Closes the modal and resets the selected card
  const handleGoBackClick = () => {
    setSelectedCard(null);
    changeLanguageBasedOnFlag();
  };

  const cards = [
    {
      id: 1,
      title: "Introduction",
      src: "https://consort-group.com/logo.png",
      content: <Introduction />,
    },
    {
      id: 2,
      title: "Power BI",
      src: "./img/powerbi_accueil.JPG",
      content: <PowerBI />,
    },
    {
      id: 3,
      title: "CO2 Interface",
      src: "./img/index.JPG",
      content: <CO2Interface />,
    },
    {
      id: 4,
      title: "Conclusion",
      src: "https://consort-group.com/logo.png",
      content: <Conclusion />,
    },
  ];

  return (
    <section className="blog">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="section-title">
          <h2>Blog</h2>
        </div>
        {/* END - SECTION TITLE */}

        <div className="row row-cols-1 row-cols-md-2">
          <div className="col mb-3">
            <div className="card shadow">
              {/* CARD THUMBNAIL */}
              <img
                src="https://consort-group.com/logo.png"
                className="card-img-top"
                alt="Consort Group"
              />
              {/* END - CARD THUMBNAIL */}
              <div className="card-body">
                {/* CARD BODY */}
                <div className="card-header mb-2 h6">Consort Group</div>
                <p
                  id="blog-1-description"
                  className="card-text language-dependent"
                >
                  My experience and things that I have worked on in my
                  internship at Consort Group.
                </p>
                {/* END - CARD BODY */}

                {/* VIEW DETAILS */}
                <div className="text-center">
                  <button
                    id="blog-view-details"
                    className="btn btn-secondary m-1 w-100 language-dependent"
                    onClick={handleViewDetailsClick}
                  >
                    View details...
                  </button>
                </div>
                {/* END - VIEW DETAILS */}
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          {/* Modal container with conditional rendering */}
          <div className="modal-content-container">
            {/* Check if a card is selected */}
            {selectedCard ? (
              <div>
                {/* Display the selected card's title and content */}
                <h3>{selectedCard.title}</h3>
                {selectedCard.content}

                {/* Button to go back to the card list */}
                <div className="text-center mt-3">
                  <button
                    id="inner-modal-go-back"
                    className="btn btn-secondary language-dependent"
                    onClick={handleGoBackClick}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            ) : (
              // Render card list if no card is selected
              <div className="row">
                {cards.map((card) => (
                  <div className="col-12 mb-3" key={card.id}>
                    <div className="card shadow">
                      {/* Card header with the card title */}
                      <div className="card-header mb-2 h6 text-center">
                        {card.id}. {card.title}
                      </div>

                      {/* Card image */}
                      <img
                        src={card.src}
                        className="card-img-bottom"
                        alt={`Card ${card.id}`}
                      />

                      {/* Button to read more details about the card */}
                      <div className="card-body text-center">
                        <button
                          id="modal-read"
                          className="btn btn-primary m-1 w-100 language-dependent"
                          onClick={() => handleReadClick(card)}
                        >
                          Read
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Blog;
