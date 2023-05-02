$(document).ready(function () {
  var carouselContainer = $(".carousel-container");
  var carouselItems = $(".carousel-item");
  var carouselPrev = $(".carousel-prev");
  var carouselNext = $(".carousel-next");
  var carouselWidth = carouselContainer.width();
  var currentSlide = 0;

  //set the initial position of the carousel

  carouselItems.eq(currentSlide).addClass("active");
  carouselContainer.css(
    "transform",
    "translateX(" + -currentSlide * carouselWidth + "px)"
  );

  // Move to the previous Slide
  carouselPrev.on("click", function () {
    if (currentSlide > 0) {
      currentSlide--;
      carouselContainer.css(
        "transform",
        "translateX(" + -currentSlide * carouselWidth + "px)"
      );
      carouselItems.removeClass("active");
      carouselItems.eq(currentSlide).addClass("active");
    }
  });

  // Move to the next slide

  carouselNext.on("click", function () {
    if (currentSlide < carouselItems.length - 1) {
      currentSlide++;
      carouselContainer.css(
        "transform",
        "translateX(" + -currentSlide * carouselWidth + "px)"
      );
      carouselItems.removeClass("active");
      carouselItems.eq(currentSlide).addClass("active");
    }
  });

  //animate function
  function animateElement() {
    currentSlide.animate({ left: "+=50px" }, 300);
  }

  var interval = setInterval(animateElement, 2000);
  setTimeout(function () {
    clearInterval(interval);
  }, 3000);
});
