import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
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

  // Sidebar sections per page
  const sidebarSections = {
    "/": [
      {
        id: "nav-experiences",
        className: "language-dependent",
        onClick: handleOptionClick,
        href: "#experiences",
        text: "Experiences",
      },
      {
        id: "nav-projects",
        className: "language-dependent",
        onClick: handleOptionClick,
        href: "#projects",
        text: "Projects",
      },
      {
        id: "nav-skills",
        className: "language-dependent",
        onClick: handleOptionClick,
        href: "#skills",
        text: "Skills",
      },
    ],
    "/blog": [],
  };

  // Get current path (i.e. '/' or '/blog')
  const location = useLocation();
  const sections = sidebarSections[location.pathname] || [];

  return (
    <div>
      {!isOpen && sections.length > 0 && (
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
            {sections.map((section) => (
              <a
                key={section.id}
                id={section.id}
                className={section.className}
                onClick={section.onClick}
                href={section.href}
              >
                {section.text}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
