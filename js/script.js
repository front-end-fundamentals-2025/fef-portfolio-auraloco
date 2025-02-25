//Dynamic theme toggle
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle"); //Get the theme toggle button

  //Check if user haves a preferred theme in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme); //Apply saved theme
    updateToggleButton(savedTheme); //Update button icon 
  }

  // Add an event listener to toggle the theme when the button is clicked
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme"); //Toggle the dark-theme class

    //Save the current theme preference in localStorage
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark-theme"); //Save dark theme
      updateToggleButton("dark-theme");
    } else {
      localStorage.removeItem("theme"); //Remove the preference, light mode is default
      updateToggleButton("light-theme");
    }
  });

  //Update the toggle button icon based on the current theme
  function updateToggleButton(theme) {
    themeToggle.textContent = theme === "dark-theme" ? "☀️" : "🌙";
  }
});

//Typewriter effect in introduction
document.addEventListener("DOMContentLoaded", function () {
  const typewriterText = "Hi! It's Aura"; //The text to be typed out 
  const typewriterElement = document.getElementById("typewriter"); //Get the element the text will appear
  let index = 0; //Keeps track of the current letter being typed out 

  function typeWriter() {
    if (index < typewriterText.length) {
      typewriterElement.textContent += typewriterText.charAt(index); //Add the next character 
      index++; //Move to the next character 
      setTimeout(typeWriter, 100); //Wait 100ms to type out next letter
    }
  }

  typewriterElement.textContent = ""; //Clear text content before starting
  typeWriter(); //Start typewriter effect
});
