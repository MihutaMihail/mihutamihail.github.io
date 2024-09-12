import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.css"

/**
 * Modal component displays a modal dialog with a header, body and footer.
 * The modal is shown when `isOpen` is true and can be closed by clicking on the close button (X)
 * or the "Close" button in the footer.
 * 
 * 
 * @param {boolean} isOpen - Boolean flag to control the visibility of the modal.
 * @param {function} onClose - Callback function to close the modal when the close button is clicked.
 * @param {React.ReactNode} children - Content to be displayed inside the modal body.
 * 
 * @returns {JSX.Element|null} The modal element if `isOpen` is true; otherwise, returns null.
 * 
 */
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling of the background
    }
    return () => {
      document.body.style.overflow = ""; // Restores scrolling
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="modal show"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog" style={{ maxWidth: "75%" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 id="modal-details" className="modal-title language-dependent">
              Details
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close modal"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              id="modal-close"
              type="button"
              className="btn btn-secondary language-dependent"
              onClick={onClose}
              aria-label="Close button"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Whether the modal is open
  onClose: PropTypes.func.isRequired, // Function to call when the modal is closed
  children: PropTypes.node, // Content to display in the modal body
};

export default Modal;
