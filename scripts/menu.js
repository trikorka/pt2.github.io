document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menuToggle');
  var nav = document.querySelector('.nav-block');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('nav-block--open');
    toggle.classList.toggle('is-active');
  });

  nav.addEventListener('click', function (event) {
    var clicked = event.target.closest('a, button');
    if (!clicked) return;
    if (clicked.id === 'menuToggle') return;

    nav.classList.remove('nav-block--open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
  });
});


const scrollTopButton = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
 if (window.scrollY > 300) {
 scrollTopButton.classList.add('visible');
 } else {
 scrollTopButton.classList.remove('visible');
 }
});

scrollTopButton.addEventListener('click', () => {
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
 });
});