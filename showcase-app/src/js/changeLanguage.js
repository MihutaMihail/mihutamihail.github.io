/**
 * Update text based on the chosen language.
 *
 * This function dynamically changes the content of the website by fetching text data
 * from a specified JSON file based on the selected language. It updates all elements
 * with the class `language-dependent` to display the corresponding translated text
 * from the JSON file. Additionally, it changes the displayed flag icon to match the selected language.
 *
 * @param {string} lang - The selected language code, either "en" for English or "fr" for French.
 * @param {Event} event - The event object triggered by the language selection, used to prevent the default action.
 * @param {string} pageType - Specifies the type of content being loaded, such as "cv" or "blog".
 *                            This determines the path to the appropriate JSON file for the selected language.
 *
 *
 * @throws Will log an error message to the console if fetching or parsing the JSON fails.
 */
export function changeLanguage(lang, event) {
  const contentPath =
    lang === "en"
      ? `./json/english-content.json`
      : `./json/french-content.json`;

  /**
   * Chaining methods with the dot notation is a way to handle asynchronous operations.
   * This approach works because we're using functions specifically designed to handle async
   * operations and return promises.
   *
   * When we call such a function, it initiates an asynchronous operation. While this operation may
   * not produce a result immediately, it will eventually resolve and return a value. This is what
   * a promise means.
   *
   * Each sequential code will use the result that was returned from the previous code.
   */

  // Request and fetch resource and return Response object
  fetch(contentPath)
    // Turn Reponse object into JSON
    .then((response) => response.json())
    .then((data) => {
      // Get all elements that need to be translated
      const elementsToTranslate = document.querySelectorAll(
        ".language-dependent"
      );

      // For each element, replace their text with the text from the JSON file
      elementsToTranslate.forEach((element) => {
        element.innerText = data[element.id];
      });
    })
    .catch((error) => console.error("Error fetching content :", error));

  // Change icon
  var flagImage = document.getElementById("selectedFlag");
  flagImage.src =
    lang === "en"
      ? "https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg"
      : "https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png";
  flagImage.alt = lang === "en" ? "UK Flag" : "Drapeau Francee";

  if (event !== null) {
    event.preventDefault();
  }
}
