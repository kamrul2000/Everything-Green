const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active'); 
  navLinks.classList.toggle('active'); 

  const firstLine = document.querySelector('.first-line');
  const secondLine = document.querySelector('.second-line');

  if (navToggle.classList.contains('active')) {
    firstLine.style.display = 'none'; 
    secondLine.style.display = 'none'; 
    navLinks.style.display = 'flex'; 
  } else {
    firstLine.style.display = 'inline-block'; 
    secondLine.style.display = 'inline-block'; 
    navLinks.style.display = 'none'; 
  }
});
