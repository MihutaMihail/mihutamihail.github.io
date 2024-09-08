import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import "./Sidebar.css";
import { smoothScrolling } from "../../../js/smoothScrolling";

const Sidebar = () => {
  useEffect(() => {
    /**
     * This effect runs only once after the component mounts, as indicated by the
     * empty dependency array. This ensures that smooth scrolling is set up only once
     * when the component is first rendered and avoids unnecessary re-renders.
     *
     * @returns {function} cleanup - The cleanup function to remove event listeners
     *                              when the component unmounts.
     */
    const cleanup = smoothScrolling();
    return cleanup;
  }, []); // Empty dependency array

  // State to manage if the sidebar is open
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar's open state
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close the sidebar when an option is clicked
  const handleOptionClick = () => {
    setIsOpen(false);
  };

  // Memoized sidebar sections based on the current route
  const sidebarSections = useMemo(
    () => ({
      /**
       * By memoizing this object, we ensure that it is
       * created only once during the component's lifecycle,
       * as indicated by the empty dependency array. This
       * prevents unnecessary recalculations and re-creations
       * of the object on everey render, improving performance.
       */
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
      "/about": [],
      "/contact": [],
    }),
    []
  );

  // Get current path (i.e. '/' or '/blog') from the React Routeur location
  const location = useLocation();
  const sections = sidebarSections[location.pathname] || [];

  // Open / Close sidebar toggle button
  const SidebarToggleButton = ({ isOpen, toggleSidebar }) => (
    <button
      className={isOpen ? "close-arrow" : "open-arrow"}
      onClick={toggleSidebar}
      aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
    >
      <i
        className={`fa-solid ${isOpen ? "fa-left-long" : "fa-right-long"}`}
      ></i>
    </button>
  );

  return (
    <div>
      {/* Render Open button when sidebar is closed and there are sections */}
      {!isOpen && sections.length > 0 && (
        <SidebarToggleButton isOpen={isOpen} toggleSidebar={toggleSidebar} />
      )}

      {/* Sidebar container */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Render Close button inside sidebar when it's open */}
        {isOpen && <SidebarToggleButton isOpen={isOpen} toggleSidebar={toggleSidebar} />} 

        {/* Sidebar Content */}
        <nav className="sidebar-content">
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  id={section.id}
                  className={section.className}
                  onClick={section.onClick}
                  href={section.href}
                >
                  {section.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default Sidebar;
