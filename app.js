let carousel = document.getElementById("carousel"),
  slides = carousel.getElementsByTagName("li"),
  counter = 0,
  liList = Array.prototype.slice.call(slides);

setInterval(function () {
  slides[counter].style.opacity = 0; // Hide the previous image
  counter = (counter + 1) % slides.length; // Increment counter
  slides[counter].style.opacity = 1; // Show the next image
}, 3000); // setInterval




