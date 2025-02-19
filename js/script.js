//Dynamic theme toggle
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");

  //Check if user haves a preferred theme in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    updateToggleButton(savedTheme);
  }

  //Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    //Save the current theme to localStorage
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark-theme");
      updateToggleButton("dark-theme");
    } else {
      localStorage.removeItem("theme");
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
  const typewriterText = "Hi! It's Aura";
  const typewriterElement = document.getElementById("typewriter");
  let index = 0;

  function typeWriter() {
    if (index < typewriterText.length) {
      typewriterElement.textContent += typewriterText.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  typewriterElement.textContent = "";
  typeWriter();
});
