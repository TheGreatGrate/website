var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
})

let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Show the first slide
showSlide(slideIndex);

// Change slide with button click
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Show slide function
function showSlide(n) {
  // Loop back to the first slide if we've reached the end
  if (n >= slides.length) {
    slideIndex = 0;
  }
  // Loop to the last slide if we've reached the beginning
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Show the current slide
  slides[slideIndex].style.display = "block";
}

// Automatic slide change after 3.5 seconds
setInterval(() => {
  changeSlide(1);
}, 3500);

const nav2Links = document.querySelectorAll('.nav2 a');
nav2Links.forEach(link => {
  link.addEventListener('click', function() {
    nav2Links.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});
