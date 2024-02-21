function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Reset the animation by removing and adding the class
function resetAnimation() {
  var container = document.getElementById('portfolio-container');
  container.classList.remove('logo-animation');
  void container.offsetWidth; // Trigger reflow
  container.classList.add('logo-animation');
}

// Call resetAnimation function every time the animation ends
document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('portfolio-container');
  container.addEventListener('animationend', resetAnimation);
});
