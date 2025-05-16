// hamburger


 const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    let hamburger = document.querySelector('.ham-menu');

    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    // ABOUT SLIDE
    
  const slider = document.getElementById('slider');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let autoSlide = true;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    autoSlide = false;
  }

  setInterval(() => {
    if (autoSlide) {
      currentSlide = (currentSlide + 1) % 3;
      updateSlider();
    }
  }, 5000);
