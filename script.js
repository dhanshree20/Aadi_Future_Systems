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

    // Clone for infinite loop effect
    const originalCards = Array.from(container.children);
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      container.appendChild(clone);
    });

    // Auto Scroll
    let scrollSpeed = 0.5; // Adjust for faster/slower scroll
    function autoScroll() {
      container.scrollLeft += scrollSpeed;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      requestAnimationFrame(autoScroll);
    }

    autoScroll(); // Start scrolling automatically
