let lastScroll = 0;

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 50) {
    navbar.style.top = '-80px';
    navbar.style.boxShadow = 'none';
  } else {
    navbar.style.top = '0';
    navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
  }

  lastScroll = currentScroll;
});