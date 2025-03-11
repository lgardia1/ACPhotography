jQuery(document).ready(function () {
  // Variables
  let idInterval = null;
  const Direction = {
    LEFT: -1,
    RIGHT: 1,
  };

  const sliderWrapper = $(".testimonials__grid");
  let observer = new IntersectionObserver(observe, { threshold: 0.2 });
  observer.observe(sliderWrapper[0]);

  // Listener
  $("#testimonial__prev").click(() => {
    slide(Direction.LEFT);
    clearSlideInterval();
    slideInterval();
  });

  $("#testimonial__next").click(() => {
    slide(Direction.RIGHT);
    clearSlideInterval();
    slideInterval();
  });

  // Funciones

  function slide(direction) {
    const scrollLeft = sliderWrapper.scrollLeft();
    const scrollWidth = sliderWrapper[0].scrollWidth;
    const width = sliderWrapper.width();

    if (scrollWidth - width <= scrollLeft && direction === Direction.RIGHT) {
      sliderWrapper.scrollLeft(0);
      return;
    }

    if (scrollLeft === 0 && direction === Direction.LEFT) {
      sliderWrapper.scrollLeft(scrollWidth);
      return;
    }

    sliderWrapper.scrollLeft(scrollLeft + sliderWrapper.width() * direction);
  }

  function observe(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!idInterval) {
            slideInterval();
        }
      } else {
        if (idInterval) {
            clearSlideInterval();
        }
      }
    });
  }

  function slideInterval() {
    idInterval = setInterval(() => {
      slide(Direction.RIGHT);
    }, 5000);
  }

  function clearSlideInterval() {
    clearInterval(idInterval);
    idInterval = null;
  }
});
