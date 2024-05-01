const scrollBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', function () {
  scrollBtn.classList.toggle('active', this.window.scrollY > 1000);
});

scrollBtn.addEventListener('click', function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
