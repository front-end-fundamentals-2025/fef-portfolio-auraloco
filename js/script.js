document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const popups = document.querySelectorAll(".popup");
  const closeButtons = document.querySelectorAll(".close");

  //Open popup when a gallery item is clicked
  galleryItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      popups[index].style.opacity = "1";
      popups[index].style.pointerEvents = "auto";
    });
  });

  //Close popup when the close button is clicked
  closeButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      popups[index].style.opacity = "0";
      popups[index].style.pointerEvents = "none";
    });
  });
});

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
