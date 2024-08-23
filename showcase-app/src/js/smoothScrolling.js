/**
 * Smooth scrolling and offset for navbar links
 */
export function smoothScrolling() {
  const handleScroll = (event) => {
    if (event.target.hash !== "") {
      event.preventDefault();

      const targetElement = document.querySelector(event.target.hash);

      if (targetElement) {
        const offsetPosition = targetElement.offsetTop - 50;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  // Add event listeners to all anchor elements in the sidebar
  const anchorElements = document.querySelectorAll("a");
  anchorElements.forEach((anchor) =>
    anchor.addEventListener("click", handleScroll)
  );

  // Return a cleanup function to remove the event listeners when the component unmounts
  return () => {
    anchorElements.forEach((anchor) =>
      anchor.removeEventListener("click", handleScroll)
    );
  };
}
