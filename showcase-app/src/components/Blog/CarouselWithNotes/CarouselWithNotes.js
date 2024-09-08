import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";

/**
 * CarouselWithNotes component displays a Bootstrap carousel with a set of images and captions.
 *
 * This component accepts an array of objects, where each object contains the images source (`src`)
 * and an optional captions (`caption`). The images are displayed as slides with their own respective
 * caption (if one is provided).
 *
 * @param {Object[]} items - Array of items to display in the carousel.
 * @param {string} items[].src - Image source URL for the carousel slide.
 * @param {string} items[].caption - Text caption for the carousel slide. If no text caption is provided, the image will be displayed without any text.
 *
 * @returns  {JSX.Element} A Bootstrap carousel component with images and captions
 *
 * @example
 * const items = [
 *   { src: 'https://example.com/image1.jpg', caption: 'Caption 1' },
 *   { src: 'https://example.com/image2.jpg', caption: 'Caption 2' },
 *   { src: 'https://example.com/image3.jpg' }
 * ];
 *
 * <CarouselWithNotes items={items} />
 *
 * This will render a carousel with three slides, each displaying an 
 * image and a caption except for the third item.
 */
const CarouselWithNotes = ({ items }) => {
  return (
    <Carousel aria-label="Image carousel with captions">
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.src}
            alt={item.caption ? item.caption : `Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <p style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)" }}>
              {item.caption}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

// PropTypes validation
CarouselWithNotes.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired, // Image source is required
      caption: PropTypes.string, // Caption is optional
    })
  ).isRequired,
};

export default CarouselWithNotes;
