
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

    //  contact
    function contact(){
      document.getElementById("contact")
    }


// FLOATING WHATSAPP BUTTON

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
      window.open('https://wa.me/2347049413802', '_blank'); // Replace with your number
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
 
