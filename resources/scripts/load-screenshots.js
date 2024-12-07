const screenshotFolder = "./screenshots/";
const gallery = document.getElementById("screenshotGallery");

// Function to dynamically load images from the JSON file
async function loadScreenshots() {
  try {
    // Fetch the JSON file containing screenshot data
    const response = await fetch("./resources/screenshots.json");
    if (!response.ok) throw new Error("Failed to load screenshots data.");

    const data = await response.json();

    // Extract image filenames from the JSON data
    const images = data.screenshots;

    // Loop through the images and add them to the gallery
    images.forEach((fileName) => {
      const decodedFileName = decodeURIComponent(fileName);
      // Extract the title from the file name (removing number and extension)
      const title = decodedFileName
        .replace(/^\d+-/, "") // Remove leading numbers and dash
        .replace(/\.\w+$/, ""); // Remove file extension

      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figcaption = document.createElement("figcaption");

      img.src = `${screenshotFolder}${fileName}`;
      img.alt = title;
      figcaption.textContent = title;

      figure.appendChild(img);
      figure.appendChild(figcaption);
      gallery.appendChild(figure);
    });
  } catch (error) {
    console.error("Error loading screenshots:", error);
  }
}

// Call the function to load screenshots
loadScreenshots();
