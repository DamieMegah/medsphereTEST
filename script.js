// hamburger


 const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    let hamburger = document.querySelector('.ham-menu');
    

    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    let control = document.querySelectorAll('.navs');
     control.forEach(nav => {
      nav.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });

     window.onscroll = function() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
     }


     
  //  PRODUCT
function product() {
  document.getElementById("product").scrollIntoView({ behavior: "smooth" });
}

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
  if (document.documentElement.scrollTop > 10) {
    btn.style.opacity = '0';
    btn.style.pointerEvents = 'none'; 
  } else {
    btn.style.opacity = '1';
    btn.style.pointerEvents = 'auto';
  }
});


document.getElementById('scroll-Up').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

 window.addEventListener('scroll', () => {{ behavior: 'smooth' }});
// Smooth scroll to sections
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });





// WhatsApp Chat Confirmation

  let chatReady = false;

  function toggleChatConfirm() {
    const confirmBox = document.getElementById('chatConfirm');

    if (!chatReady) {
      confirmBox.style.display = 'block';
      chatReady = true;

  // remove when on scroll
      
   window.addEventListener('scroll', () => {
    confirmBox.style.display = 'none';
        chatReady = false;
   });
 
      // Reset after 5 seconds
      setTimeout(() => {
        confirmBox.style.display = 'none';
        chatReady = false;
      }, 5000);
    } else {
      window.open('https://wa.me/2347049413802? text=Hello i want more information on "DEVICE NAME" ', '_blank'); 
    }
  }

  //contact form
   document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function(response) {
        alert('Message sent successfully!');
      }, function(error) {
        alert('FAILED...', error);
      });
  });

