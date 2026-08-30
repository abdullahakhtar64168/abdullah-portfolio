document.addEventListener('DOMContentLoaded', () => {
  // Update footer year dynamically
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Scroll Progress Bar
  const scrollProgress = document.getElementById('scrollProgress');
  
  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${(totalScroll / windowHeight) * 100}%`;
    scrollProgress.style.width = scroll;
  });

  // Smooth scrolling for navigation links and active link highlighting
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section, header');

  // Highlight active nav link on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Navbar background change on scroll
  const navbar = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
      navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.85)';
      navbar.style.boxShadow = 'none';
    }
  });

  // Typewriter effect for Hero section role
  const textArray = ["Supply Chain & Operations", "Process Improvement", "Project Coordination"];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 2000; 
  let textArrayIndex = 0;
  let charIndex = 0;
  
  const typedRoleElement = document.getElementById("typedRole");

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedRoleElement.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedRoleElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  // Initial call for typewriter effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
