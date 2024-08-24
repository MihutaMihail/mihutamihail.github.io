import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { smoothScrolling } from "../../../js/smoothScrolling";

const Sidebar = () => {
  // Smooth scrolling
  useEffect(() => {
    // Call the function to set up smooth scrolling and offset
    const cleanup = smoothScrolling();

    // Return the cleanup function to remove event listeners on unmount
    return cleanup;
  }, []);

  // Sidebar
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {!isOpen && (
        <button className="open-arrow" onClick={toggleSidebar}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      )}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <button className="close-arrow" onClick={toggleSidebar}>
            <i className="fa-solid fa-left-long"></i>
          </button>
        )}
        <div className="sidebar-content">
          <ul>
            <a
              id="nav-experiences"
              className="language-dependent"
              onClick={handleOptionClick}
              href="#experiences"
            >
              Experiences
            </a>
            <a
              id="nav-projects"
              className="language-dependent"
              onClick={handleOptionClick}
              href="#projects"
            >
              Projects
            </a>
            <a
              id="nav-skills"
              className="language-dependent"
              onClick={handleOptionClick}
              href="#skills"
            >
              Skills
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
