document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  
  burger.addEventListener('click', function() {
    // Toggle active class on burger and nav
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close menu when clicking on links
  const navLinks = document.querySelectorAll('.header__nav--item a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});