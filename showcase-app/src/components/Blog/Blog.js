import React, { useState } from "react";
import "./Blog.css";
import Modal from "./Modal/Modal";
import Introduction from "./Parts/Introduction/Introduction";
import PowerBI from "./Parts/PowerBI/PowerBI";
import CO2Interface from "./Parts/CO2Interface/CO2Interface";
import { changeLanguage } from "../../js/changeLanguage";

const Blog = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleViewDetailsClick = () => {
    setModalOpen(true);
    setSelectedCard(null);

    const selectedFlag = document.getElementById("selectedFlag")?.alt;

    if (selectedFlag === "UK Flag") {
      changeLanguage("en", null);
    } else {
      changeLanguage("fr", null);
    }
  };

  const handleReadClick = (card) => {
    setSelectedCard(card);

    const selectedFlag = document.getElementById("selectedFlag")?.alt;

    if (selectedFlag === "UK Flag") {
      changeLanguage("en", null);
    } else {
      changeLanguage("fr", null);
    }
  };

  const handleGoBackClick = () => {
    setSelectedCard(null);
    const selectedFlag = document.getElementById("selectedFlag")?.alt;

    if (selectedFlag === "UK Flag") {
      changeLanguage("en", null);
    } else {
      changeLanguage("fr", null);
    }
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
  ];

  return (
    <section className="blog">
      <div className="container">
        <div className="section-title">
          <h2>Blog</h2>
        </div>

        <div className="row row-cols-1 row-cols-md-2">
          <div className="col mb-3">
            <div className="card shadow">
              <img
                src="https://consort-group.com/logo.png"
                className="card-img-top"
                alt="Consort Group"
              />
              <div className="card-body">
                <div className="card-header mb-2 h6">Consort Group</div>
                <p id="blog-1-description" className="card-text language-dependent">
                  My experience and things that I have worked on in my
                  internship at Consort Group.
                </p>
                <div className="text-center">
                  <button
                    id="blog-view-details"
                    className="btn btn-secondary m-1 w-100 language-dependent"
                    onClick={handleViewDetailsClick}
                  >
                    View details...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          {selectedCard ? (
            <div>
              <h3>{selectedCard.title}</h3>
              {selectedCard.content}
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
            <div className="row row-cols-1 row-cols-md-2">
              {cards.map((card) => (
                <div className="col mb-3" key={card.id}>
                  <div className="card shadow">
                    <div className="card-header mb-2 h6 text-center">
                      {card.title}
                    </div>
                    <img
                      src={card.src}
                      className="card-img-top"
                      alt={`Card ${card.id}`}
                    />
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
        </Modal>
      </div>
    </section>
  );
};

export default Blog;
