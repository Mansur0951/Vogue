const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  

  // burger menu

  const mobileBurgerOpen = document.getElementById('mobileBurgerOpen')
  const menuClose = document.getElementById('menuCLose')

  function mobileBurgerOpenn() {
    mobileMenu.classList.toggle('active')
  }

  function menuClosed() {
    mobileMenu.classList.remove('active')
  }