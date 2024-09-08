/**
 * Smooth scrolling and offset for navbar links
 * This function attaches a smooth scrolling behavior to anchor links (internal links)
 * and applise an offset to account for fixed headers or navbars.
 *
 * How it works:
 * - It listens for click events on anchor tags ('<a>')
 * - If the clicked link has a has (like #about), it will prevent the default behavior
 *   and smoothly scroll to the corresponding section
 * - The scroll position is offset by 50px to account for fixed elements
 * - It returns a cleanup function that removes event listeners when no longer needed
 *   to prevent memory leaks.
 *
 * @returns {function} - A cleanup function to remove the event listeners
 */
export function smoothScrolling() {
  /**
   * Handles the click event on anchor links
   * If the link has a hash, it smooth scrolls to the corresponding section
   *
   * @param {Event} event - The click event object.
   */
  const handleScroll = (event) => {
    // Check if the anchor link has a hash
    if (event.target.hash !== "") {
      event.preventDefault(); // Prevent the default anchor link scroll behavior

      // Find the element with the ID that matches the link's hash
      const targetElement = document.querySelector(event.target.hash);

      // If the target element exists, scroll to its position with an offset
      if (targetElement) {
        const offsetPosition = targetElement.offsetTop - 50;

        // Scroll the window to the target position smoothly
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth", // Smooth scrolling effect
        });
      }
    }
  };

  // Select all anchor ('<a>') elements on the page
  const anchorElements = document.querySelectorAll(".sidebar-content a");

  // Add the click event listeners to each anchor element
  anchorElements.forEach((anchor) =>
    anchor.addEventListener("click", handleScroll)
  );

  /**
   * Cleanup function that removes the event listeners.
   * This function should be called when the component unmounts or
   * when the event listeners are no longer needed.
   */
  return () => {
    anchorElements.forEach((anchor) =>
      anchor.removeEventListener("click", handleScroll)
    );
  };
}
