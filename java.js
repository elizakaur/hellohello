

  document.addEventListener("DOMContentLoaded", function () {
  // Your existing code...

  // Show the welcome overlay initially
  const welcomeOverlay = document.getElementById("welcomeOverlay");
  welcomeOverlay.classList.remove("hidden");

  // Hide the welcome overlay after 5 seconds
  setTimeout(function () {
    welcomeOverlay.classList.add("hidden");
  }, 5000);
});

