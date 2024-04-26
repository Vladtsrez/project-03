document.addEventListener('DOMContentLoaded', function () {
  const menuOpen = document.querySelector('.header-menu-open');
  const menuList = document.querySelector('.header-menu-list');
  const menuLinks = document.querySelectorAll('.header-menu-link');

  menuOpen.addEventListener('click', function () {
    menuList.style.display =
      menuList.style.display === 'flex' ? 'none' : 'flex';
  });

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menuList.style.display = 'none';
    });
  });
});
