window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav a');
  
    let currentSection = "";
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
  
      // Check if the section is in the viewport
      if (window.scrollY + window.innerHeight >= sectionTop && window.scrollY < sectionBottom) {
        currentSection = section.getAttribute('id');
      }
    });
  
    // Loop through links and add 'active' class based on scroll position
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });
  


  