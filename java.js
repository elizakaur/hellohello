document.addEventListener("DOMContentLoaded", function () {
  // Your existing code...

  // Hide the welcome overlay after the animation is complete
  
// Hide the welcome overlay after the animation is complete
  const welcomeOverlay = document.querySelector(".welcome-overlay");
  setTimeout(function () {
    welcomeOverlay.classList.add("hidden");
  }, 7000); // Adjust the time (in milliseconds) to match the duration of your animation
});
