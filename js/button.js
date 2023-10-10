document.addEventListener("DOMContentLoaded", function () {
    const scrolltotop = document.getElementById("Backtop");
  
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrolltotop.style.display = "block";
      } else {
        scrolltotop.style.display = "none";
      }
    });
  
    scrolltotop.addEventListener("click", () => {
      scrollToTop();
    });
  
    function scrollToTop() {
      const scrollDuration = 500;
      const scrollStep = -window.scrollY / (scrollDuration / 15);
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    }
  });