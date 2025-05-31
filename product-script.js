
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

    //  CONTACT
function contact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}


// FLOATING WHATSAPP BUTTON


  let chatReady = false;

  function toggleChatConfirm() {
    const confirmBox = document.getElementById('chatConfirm');

    if (!chatReady) {
      confirmBox.style.display = 'block';
      chatReady = true;

      // Hide on scroll
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
      // OPTIONAL: get user's name from input (if you have one)
      const nameInput = document.getElementById('userNameInput');
      const userName = nameInput ? nameInput.value.trim() : '';

      // OPTIONAL: get device name dynamically (if you have such an element)
      const deviceElement = document.getElementById('deviceName');
      const deviceName = deviceElement ? deviceElement.innerText.trim() : 'a device';

      const message = `Hello, my name is ${userName || 'a customer'}, I want more information on "${deviceName}"`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/2347049413802?text=${encodedMessage}`;

      window.open(whatsappURL, '_blank');
    }
  }


  
  // Scroll to Top Button
   window.addEventListener('scroll', () => {
  const btn = document.getElementById('scroll-Up');
  if (document.documentElement.scrollTop > 10) {
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
 
