window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')

  });
  document.querySelector('#close').addEventListener('click', function () {
    document.querySelector('#menu').classList.remove('is-active')
  });

  //Accordeon

  document.querySelector('#accordion_1').addEventListener('click', function () {
    document.querySelector('#content_1').classList.toggle('is-active')
    document.querySelector('#accordion_1_btn').classList.toggle('is-active')
    document.querySelector('#accordion_1_svg').classList.toggle('is-active')

    document.querySelector('#content_2').classList.remove('is-active')
    document.querySelector('#accordion_2_btn').classList.remove('is-active')
    document.querySelector('#accordion_2_svg').classList.remove('is-active')
    document.querySelector('#content_3').classList.remove('is-active')
    document.querySelector('#accordion_3_btn').classList.remove('is-active')
    document.querySelector('#accordion_3_svg').classList.remove('is-active')
    document.querySelector('#content_4').classList.remove('is-active')
    document.querySelector('#accordion_4_btn').classList.remove('is-active')
    document.querySelector('#accordion_4_svg').classList.remove('is-active')
    document.querySelector('#content_5').classList.remove('is-active')
    document.querySelector('#accordion_5_btn').classList.remove('is-active')
    document.querySelector('#accordion_5_svg').classList.remove('is-active')
  });

  document.querySelector('#accordion_2').addEventListener('click', function () {
    document.querySelector('#content_2').classList.toggle('is-active')
    document.querySelector('#accordion_2_btn').classList.toggle('is-active')
    document.querySelector('#accordion_2_svg').classList.toggle('is-active')

    document.querySelector('#content_1').classList.remove('is-active')
    document.querySelector('#accordion_1_btn').classList.remove('is-active')
    document.querySelector('#accordion_1_svg').classList.remove('is-active')
    document.querySelector('#content_3').classList.remove('is-active')
    document.querySelector('#accordion_3_btn').classList.remove('is-active')
    document.querySelector('#accordion_3_svg').classList.remove('is-active')
    document.querySelector('#content_4').classList.remove('is-active')
    document.querySelector('#accordion_4_btn').classList.remove('is-active')
    document.querySelector('#accordion_4_svg').classList.remove('is-active')
    document.querySelector('#content_5').classList.remove('is-active')
    document.querySelector('#accordion_5_btn').classList.remove('is-active')
    document.querySelector('#accordion_5_svg').classList.remove('is-active')
  });
  
  document.querySelector('#accordion_3').addEventListener('click', function () {
    document.querySelector('#content_3').classList.toggle('is-active')
    document.querySelector('#accordion_3_btn').classList.toggle('is-active')
    document.querySelector('#accordion_3_svg').classList.toggle('is-active')

    document.querySelector('#content_1').classList.remove('is-active')
    document.querySelector('#accordion_1_btn').classList.remove('is-active')
    document.querySelector('#accordion_1_svg').classList.remove('is-active')
    document.querySelector('#content_2').classList.remove('is-active')
    document.querySelector('#accordion_2_btn').classList.remove('is-active')
    document.querySelector('#accordion_2_svg').classList.remove('is-active')
    document.querySelector('#content_4').classList.remove('is-active')
    document.querySelector('#accordion_4_btn').classList.remove('is-active')
    document.querySelector('#accordion_4_svg').classList.remove('is-active')
    document.querySelector('#content_5').classList.remove('is-active')
    document.querySelector('#accordion_5_btn').classList.remove('is-active')
    document.querySelector('#accordion_5_svg').classList.remove('is-active')
  });

  document.querySelector('#accordion_4').addEventListener('click', function () {
    document.querySelector('#content_4').classList.toggle('is-active')
    document.querySelector('#accordion_4_btn').classList.toggle('is-active')
    document.querySelector('#accordion_4_svg').classList.toggle('is-active')

    document.querySelector('#content_1').classList.remove('is-active')
    document.querySelector('#accordion_1_btn').classList.remove('is-active')
    document.querySelector('#accordion_1_svg').classList.remove('is-active')
    document.querySelector('#content_2').classList.remove('is-active')
    document.querySelector('#accordion_2_btn').classList.remove('is-active')
    document.querySelector('#accordion_2_svg').classList.remove('is-active')
    document.querySelector('#content_3').classList.remove('is-active')
    document.querySelector('#accordion_3_btn').classList.remove('is-active')
    document.querySelector('#accordion_3_svg').classList.remove('is-active')
    document.querySelector('#content_5').classList.remove('is-active')
    document.querySelector('#accordion_5_btn').classList.remove('is-active')
    document.querySelector('#accordion_5_svg').classList.remove('is-active')
  });

  document.querySelector('#accordion_5').addEventListener('click', function () {
    document.querySelector('#content_5').classList.toggle('is-active')
    document.querySelector('#accordion_5_btn').classList.toggle('is-active')
    document.querySelector('#accordion_5_svg').classList.toggle('is-active')

    document.querySelector('#content_1').classList.remove('is-active')
    document.querySelector('#accordion_1_btn').classList.remove('is-active')
    document.querySelector('#accordion_1_svg').classList.remove('is-active')
    document.querySelector('#content_2').classList.remove('is-active')
    document.querySelector('#accordion_2_btn').classList.remove('is-active')
    document.querySelector('#accordion_2_svg').classList.remove('is-active')
    document.querySelector('#content_3').classList.remove('is-active')
    document.querySelector('#accordion_3_btn').classList.remove('is-active')
    document.querySelector('#accordion_3_svg').classList.remove('is-active')
    document.querySelector('#content_4').classList.remove('is-active')
    document.querySelector('#accordion_4_btn').classList.remove('is-active')
    document.querySelector('#accordion_4_svg').classList.remove('is-active')
  });

});



const swiper = new swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
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
  effect: 'cards',

});
