// Product Section

  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("productSlider");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    function scrollSlider(direction) {
      const scrollAmount = 280;
      if (!slider) return;

      slider.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }

    // 🔁 Auto-scroll every 4 seconds (optional)
    setInterval(() => {
      scrollSlider("right");
    }, 4000);

    // 👈 Add manual scroll on button clicks
    leftBtn.addEventListener("click", () => scrollSlider("left"));
    rightBtn.addEventListener("click", () => scrollSlider("right"));
  });



// Testimonials Section

  const container = document.getElementById('testimonialSlider');

  // Step 1: Clone all cards (for seamless loop)
  const originalCards = Array.from(container.children);
  originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    container.appendChild(clone);
  });

  // Step 2: Auto Scroll
  let scrollSpeed = 0.5; // Adjust speed
  let autoScroll = setInterval(() => {
    container.scrollLeft += scrollSpeed;

    // Step 3: If reached end of original cards, reset scrollLeft smoothly
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }
  }, 10);


