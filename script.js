// hamburger


 const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    let hamburger = document.querySelector('.ham-menu');

    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    //HERO - slidDE

   
  const images = document.querySelectorAll('.hero-show img');
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove('active');
      if (i === index) {
        img.classList.add('active');
      }
    });
  }

  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }

  // First show
  showImage(current);

  // Change image every 3 seconds
  setInterval(nextImage, 3000);


  //  slider
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

  let startX = 0;
let endX = 0;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
  if (startX - endX > 50) {
    // Swipe left
    currentSlide = (currentSlide + 1) % 3;
    updateSlider();
  } else if (endX - startX > 50) {
    // Swipe right
    currentSlide = (currentSlide - 1 + 3) % 3;
    updateSlider();
  }
});

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
  autoSlide = false;

  // Smooth scroll to slider (optional)
  document.querySelector('.about-container').scrollIntoView({ behavior: 'smooth' });
}


    

  // Scroll to Top Button
   window.addEventListener('scroll', () => {
  const btn = document.getElementById('scroll-Up');
  if (document.documentElement.scrollTop < 10) {
    btn.style.opacity = '1';
    btn.style.pointerEvents = 'auto';
  } else {
    btn.style.opacity = '0';
    btn.style.pointerEvents = 'none'; 
  }
});


document.getElementById('scroll-Up').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
