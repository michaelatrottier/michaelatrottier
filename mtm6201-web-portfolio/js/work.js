function openSlide() {
  "use strict";
  document.getElementById("myPhotos").style.display = "block";
}

function closeSlide() {
  "use strict";
  document.getElementById("myPhotos").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  "use strict";
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  "use strict";
  showSlides((slideIndex = n));
}

function showSlides(n) {
  "use strict";
  var i;
  var slides = document.getElementsByClassName("proj-1");
  var dots = document.getElementsByClassName("demo");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
