document.addEventListener('DOMContentLoaded', function () {
  const menuOpen = document.querySelector('.header-menu-open');
  const menuList = document.querySelector('.header-menu-list');
  const menuLinks = document.querySelectorAll('.header-menu-link');
  const mobileContainer = document.querySelector('.mobile-container');
  const openMenuButton = document.querySelector('.open-menu-button');
  const closeMenuButton = document.querySelector('.close-menu-button');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function toggleMenuDisplay() {
    if (menuList.style.display === 'flex') {
        menuList.style.opacity = '0';
        setTimeout(() => {
            menuList.style.display = 'none';
        }, 250); 
    } else {
        menuList.style.display = 'flex';
        setTimeout(() => {
            menuList.style.opacity = '1';
        }, 150); 
    }
}

  function closeMobileMenu() {
    mobileContainer.style.opacity = '0';
    mobileContainer.style.transform = 'translateX(100%)';
    setTimeout(() => {
      mobileContainer.style.display = 'none';
      mobileContainer.classList.remove('mobile-menu-container');
    }, 300);
  }

  menuOpen.addEventListener('click', toggleMenuDisplay);

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menuList.style.display = 'none';
    });
  });

  openMenuButton.addEventListener('click', function () {
    mobileContainer.classList.add('mobile-menu-container');
    mobileContainer.style.display = 'flex';
    setTimeout(() => {
      mobileContainer.style.opacity = '1';
      mobileContainer.style.transform = 'translateX(0)';
    }, 300);
  });

  closeMenuButton.addEventListener('click', closeMobileMenu);

  mobileMenuLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMobileMenu();
    }
  });
});