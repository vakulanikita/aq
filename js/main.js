$(document).ready(function () {
  $('.header__slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    prevArrow: $('.header__prev'),
    nextArrow: $('.header__next'),

  });
});

$(document).ready(function () {
  $('.partners__slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    // prevArrow: $('.partner__prev'),
    // nextArrow: $('.partner__next'),
    arrows: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,

    responsive: [{
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        }
      }
    ],

  });
});

$(document).ready(function () {
  $('.article__slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    // adaptiveHeight: true,
    prevArrow: $('.article__prev'),
    nextArrow: $('.article__next'),
    variableWidth: false,
  });
});

// LIGHT GALLERY

$(document).ready(function() {
  $("#lightgalleryBig").lightGallery({
    mode: 'lg-slide',
    speed: 400,
    counter: false,
    thumbnail: false,
    closable: true,
    zoom: false,
    preload: 2,
  }); 
});

$(document).ready(function() {
  $("#lightgalleryLittle").lightGallery({
    mode: 'lg-slide',
    speed: 400,
    counter: false,
    thumbnail: false,
    closable: true,
    zoom: false,
    preload: 2,
  }); 
});

// OPEN LIGHT GALLERY FROM HEADER

$('.header__gallery-btn').on('click', function() {
 
  $(this).lightGallery({
    mode: 'lg-slide',
    speed: 400,
    dynamic: true,
    counter: false,
    thumbnail: false,
    closable: true,
    zoom: false,
    preload: 2,
    dynamicEl: [{
      "src": '../img/gallery/1.jpg',
    }, {
      'src': '../img/gallery/2.jpg',
    }, {
      'src': '../img/gallery/3.jpg',
    }, {
      'src': '../img/gallery/4.jpg',
    }, {
      'src': '../img/gallery/5.jpg',
    }, {
      'src': '../img/gallery/6.JPG',
    }, {
      'src': '../img/gallery/7.JPG',
    }, {
      'src': '../img/gallery/8.JPG',
    }, {
      'src': '../img/gallery/9.JPG',
    }, {
      'src': '../img/gallery/10.JPG',
    }, {
      'src': '../img/gallery/11.JPG',
    }, {
      'src': '../img/gallery/12.JPG',
    }, {
      'src': '../img/gallery/13.JPG',
    }, {
      'src': '../img/gallery/14.JPG',
    }, {
      'src': '../img/gallery/15.JPG',
    }, {
      'src': '../img/gallery/16.JPG',
    }, {
      'src': '../img/gallery/17.jpg',
    }, {
      'src': '../img/gallery/18.JPG',
    }, {
      'src': '../img/gallery/19.JPG',
    }, {
      'src': '../img/gallery/20.JPG',
    }, {
      'src': '../img/gallery/21.JPG',
    }, {
      'src': '../img/gallery/22.JPG',
    }, {
      'src': '../img/gallery/23.jpg',
    }]
  });

});

// upload file input

(function() {
   
  'use strict';
 
  $('.input-file').each(function() {
    var $input = $(this),
        $label = $input.next('.js-labelFile'),
        labelVal = $label.html();
     
   $input.on('change', function(element) {
      var fileName = '';
      if (element.target.value) fileName = element.target.value.split('\\').pop();
      fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
   });
  });
 
})();

// счётчик чисел

$(document).ready(function () {

  $('.count').each(function () {
     $(this).prop('Counter',0).animate({
      Counter: $(this).text()
      }, {
       duration: 1500,
       easing: 'swing',
       step: function (now) {
          $(this).text(Math.ceil(now));
       }
      });
  });
  
});

