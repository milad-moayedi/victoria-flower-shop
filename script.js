let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function hover() {
  document.getElementById('butten').style.display = 'block'
}


window.onscroll = function () { scrollFunction() };

function scrollFunction() {

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("navbar").style.borderRadius = "0px";
    document.getElementById("navbar").style.background = "#3A98B9";
    document.getElementById("menu-1").style.borderRadius = "0px";
  } else {
    document.getElementById("navbar").style.width = "75%";
    document.getElementById("navbar").style.borderRadius = "10px";
    document.getElementById("menu-1").style.borderRadius = " 0px 10px 10px 0px";
    document.getElementById("navbar").style.background = "url(./photos/2.jpg)";
  }
}
function mousehover(number) {
  document.getElementById("butten"+number).style.display = "block";
  document.getElementById("menu-div"+number).style.height = "35%";
  document.getElementById("menu-div"+number).style.transform = " translate(0px,-40px)";
}
function mouseleave(number) {
  document.getElementById("butten"+number).style.display = "none";
  document.getElementById("menu-div"+number).style.height = "35%";
  document.getElementById("menu-div"+number).style.transform = " translate(0px,0px)";
}
