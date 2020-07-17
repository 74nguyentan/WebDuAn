
$(document).ready(function () {
   var newPage = $('#new-page').offset().top;
   var menuTop = $('.navbar-menu').offset().top = 0;  
   var productPage = $('#caterory-pet').offset().top;
   var searchPage = $('#search-pet').offset().top;
   var loginPage = $('#login-page').offset().top;
   function scrollPage() {
      if(window.pageYOffset + 100  >= productPage ) {
         $('.wrapper-caterory').addClass('load');
         $('.container-product').addClass('load');
         $('.controls-product').addClass('load');
      }
      if(window.pageYOffset > menuTop) 
         $('.navbar-menu').addClass('fixed');
      else {
         $('.navbar-menu').removeClass('fixed');
      }

      if(window.pageYOffset + 100 >= newPage) {
         $('.new-page__img').addClass('load');
         $('.introduct__about').addClass('load');
         $('.new-page__name').addClass('load');
      }
      if(window.pageYOffset + 100 >= searchPage) {
        $('.search-catalog__list').addClass('load');
        $('.search-product').addClass('load');
        $('.container-rating').addClass('load');
      }
      if(window.pageYOffset >= loginPage) {
         $('.main-content-agile').addClass('load')
      }
   }
   $(document.body).on('touchmove', scrollPage());
   $(window).scroll(function () { 
      scrollPage();
   });
   var isClick = true;
   $('.new-page__heart-icon').click(function (e) { 
      if(isClick) {
         isClick = false;
         $(this).addClass('active-red').removeClass('active-white');
      }
      else {
         isClick = true;
         $(this).addClass('active-white').removeClass('active-red');
      }
   });
   var isClick2 = true;
   $('.new-page__heart-icon-2').click(function (e) { 
      if(isClick2) {
         isClick2 = false;
         $(this).addClass('active-red').removeClass('active-white');
      }
      else {
         isClick2 = true;
         $(this).addClass('active-white').removeClass('active-red');
      }
   });
   var isClick3 = true;
   $('.new-page__heart-icon-3').click(function (e) { 
      if(isClick3) {
         isClick3 = false;
         $(this).addClass('active-red').removeClass('active-white');
      }
      else {
         isClick3 = true;
         $(this).addClass('active-white').removeClass('active-red');
      }
   });
   var count = 1;
   $('.controls-pre').click(function (e) { 
      clearInterval(auto);
      var nextClass = $('.active').next('.slide');
      var lengthNext = $('.slide').next().length;
      if(count >= lengthNext) {
         count=1;
         $('.active').addClass('left-out').one('webkitAnimationEnd', function (e) {
             $('.left-out').removeClass('left-out');
      });
         $('#new-page .wrapper-content:first-child').addClass('in-right').one('webkitAnimationEnd', function(e) {
             $('.active').removeClass('active');
             $('.in-right').addClass('active').removeClass('in-right');
      });
      }
      else {
         count++;
         $('.active').addClass('left-out').one('webkitAnimationEnd', function (e) {
               $('.left-out').removeClass('left-out');
         });
         nextClass.addClass('in-right').one('webkitAnimationEnd', function(e) {
            $('.active').removeClass('active');
            $('.in-right').addClass('active').removeClass('in-right');
         });
      }
   });
   var nextSlide = $('.controls-next').click(function (e) { 
      clearInterval(auto);
      var preClass = $('.active').prev('.slide');
      var lengthNext = $('.slide').length;
      if(count == 1) {
         count = 3;
         $('.active').addClass('right-out').one('webkitAnimationEnd', function (e) {
            $('.right-out').removeClass('right-out');
         });
         $('.wrapper-content-3').addClass('in-left').one('webkitAnimationEnd', function(e) {
            $('.active').removeClass('active');
            $('.in-left').addClass('active').removeClass('in-left');
         });
      }
      else {
         count = count-1;
         $('.active').addClass('right-out').one('webkitAnimationEnd', function (e) {
            $('.right-out').removeClass('right-out');
         });
         preClass.addClass('in-left').one('webkitAnimationEnd', function(e) {
            $('.active').removeClass('active');
            $('.in-left').addClass('active').removeClass('in-left');
         });
      }
   });

   var auto = setInterval(function () { 
      nextSlide.trigger('click');
   },10000000);
   var text = $('.content-page');
   split = new SplitText(text);

   function random(min,max) {
      return (Math.random() * (max - min)) + min;
   };
   $(split.chars).each(function(e) {
       TweenMax.from($(this),2.5, {
          opacity:0,
            x: random(-500,500),
            y: random(-500,500),
            z: random(-500,500),
      });
  });
});

$(document).ready(function () {
   const indexControls = '.controls-product i';
   var controls = $('.controls-product span i');
   var containerProduct = $('.wrapper-product div');
   $('.controls-product span:nth-child(1) i').css('color','black');
   $('.outer').click(function (e) { 
      $('.outer').each(function() {
         $(this).removeClass('active-button')
      })
      $(this).addClass('active-button');
   });
   controls.click(function() {
      controls.each(function() {
         $(this).css('color','white');
      });
      $(this).css('color','black');
      if($(this).index(indexControls) == 0) {
         containerProduct.each(function() {
            $(this).removeClass('show');
            $(this).removeClass('hide');
         })
         $('.container-product').addClass('show');
         $('.container-product-2').addClass('hide');
         $('.container-product-3').addClass('hide');
      }
      if($(this).index(indexControls) == 1) {
         containerProduct.each(function() {
            $(this).removeClass('show');
            $(this).removeClass('hide');
         })
         $('.container-product').addClass('hide');
         $('.container-product-2').addClass('show');
         $('.container-product-3').addClass('hide');
      }
      if($(this).index(indexControls) == 2) {
         containerProduct.each(function() {
            $(this).removeClass('show');
            $(this).removeClass('hide');
         })
         $('.container-product').addClass('hide');
         $('.container-product-2').addClass('hide');
         $('.container-product-3').addClass('show');
      }      
   })
   var newPage = $('#new-page').offset().top;  
   var homePage = $('#home-page').offset().top;
   var productPage = $('#caterory-pet').offset().top;
   var searchPage = $('#search-pet').offset().top;
   var loginPage = $('#login-page').offset().top;
   $('.navbar-menu__item:nth-child(1) a').click(function() {
      $('html,body').animate({
         scrollTop:  homePage,
      },500,'easeInSine')
   })
   $('.navbar-menu__item:nth-child(2) a').click(function() {
      $('html,body').animate({
         scrollTop:  newPage,
      },500,'easeInSine')
   })
   $('.navbar-menu__item:nth-child(3) a').click(function() {
      $('html,body').animate({
         scrollTop:  productPage,
      },500,'easeInSine')
   });
   $('.navbar-menu__item:nth-child(4) a').click(function() {
      $('html,body').animate({
         scrollTop:  searchPage,
      },500,'easeInSine')
   });
   $('.navbar-menu__item:nth-child(5) a').click(function() {
      $('html,body').animate({
         scrollTop:  loginPage,
      },500,'easeInSine')
   });
   $('.navbar-menu__item:last-child').click(function() {
      alert('Hiện tại giỏ hàng chưa cập nhật')
   });
   $('.btn-pet').click(function() {
      $('html,body').animate({
         scrollTop:  productPage,
      },10000,'easeInSine')
   });
   $('.caterory-pet__item:nth-child(6)').click((e) => {
      e.preventDefault();
      alert('Tính năng này vẫn đang cập nhật!!!')
   })
   $('.caterory-pet__item:nth-child(7)').click((e) => {
      e.preventDefault();
      alert('Tính năng này vẫn đang cập nhật!!!')
   })
   $('.caterory-food__item:nth-child(4)').click((e) => {
      e.preventDefault();
      alert('Tính năng này vẫn đang cập nhật!!!')
   })
   $('.caterory-food__item:nth-child(5)').click((e) => {
      e.preventDefault();
      alert('Tính năng này vẫn đang cập nhật!!!')
   })
   $('.search-product__list').isotope({
      filter: ".all"
   })
   $('.outer button').click(function() {
      var cateroryList = $(this).data('caterory');
      var cateroryListBefore = '.' + cateroryList;
      $('.search-product__list').isotope({
         filter: cateroryListBefore
      })
      if($(this).hasClass('bird')) {
         $('#search-pet').css('background','url("https://thuthuatnhanh.com/wp-content/uploads/2019/04/hinh-anh-nhung-loai-chim-dep-nhat-the-gioi_chim_mong_bien.jpg")');
         $('#search-pet').css('background-repeat','no-repeat');
         $('#search-pet').css('background-size','cover');
         $('#search-pet').css('background-position','center');
      }
      if($(this).hasClass('cat')) {
         $('#search-pet').css('background','url("https://i.pinimg.com/originals/3c/e7/60/3ce760064e6e565c2360ae6557dd473f.jpg")');
         $('#search-pet').css('background-repeat','no-repeat');
         $('#search-pet').css('background-size','cover');
         $('#search-pet').css('background-position','center');
      }
      if($(this).hasClass('fish')) {
         $('#search-pet').css('background','url("https://wall.vn/wp-content/uploads/2020/02/hinh-anh-ca-heo-de-thuong-11.jpg")');
         $('#search-pet').css('background-repeat','no-repeat');
         $('#search-pet').css('background-size','cover');
         $('#search-pet').css('background-position','center');
      }
      if($(this).hasClass('dog')) {
         $('#search-pet').css('background','url("https://thuthuatnhanh.com/wp-content/uploads/2020/01/hinh-anh-nhung-chu-cho-de-thuong-nhat.jpg")');
         $('#search-pet').css('background-repeat','no-repeat');
         $('#search-pet').css('background-size','cover');
         $('#search-pet').css('background-position','center');
      }
   })
   function quickSearch() {
      var textSearch = $('.search-txt').val();
      if(textSearch == 'cá')
      $('.search-product__list').isotope({
         filter: '.fish'
      })
      if(textSearch == 'chó')
      $('.search-product__list').isotope({
         filter: '.dog'
      })
      if(textSearch == 'chim')
      $('.search-product__list').isotope({
         filter: '.bird'
      })
      if(textSearch == 'mèo')
      $('.search-product__list').isotope({
         filter: '.cat'
      })
   }
   setInterval(function() {
      quickSearch();
   },200)
   $('.main-content-agile').fadeIn();
   $('.main-content-agile-2').fadeOut();
   var isClickLogin = true;
   $('.login-register').click(function (e) { 
      e.preventDefault();
      if(isClickLogin) {
         isClickLogin = !isClickLogin;
         $('.main-content-agile-2').css('display','block');
         $('.main-content-agile').css('display','none');
      }
      else {
         isClickLogin = !isClickLogin;
         $('.main-content-agile').css('display','block');
         $('.main-content-agile-2').css('display','none');
      }
   });
   var isClickBars = true;
   $('.menu-moblie__navbar').slideUp();
   $('.menu-moblie__bars').click(function (e) { 
      e.preventDefault();
      console.log('hello')
         if(isClickBars) {
            isClickBars = !isClickBars;
            $('.menu-moblie__bars span:nth-child(1)').css({
               'transform': 'skewY(45deg)',
               'transform-origin' :'10% 0%'
            });
            $('.menu-moblie__bars span:nth-child(2)').css({
               'opacity': '0',
               'visibility':'hidden'
            });    
            $('.menu-moblie__bars span:nth-child(3)').css({
               'transform': 'skewY(-44deg)',
               'transform-origin' :'0% 0%'
            });
            $('.container-content').css('z-index','-1');  
            $(this).next('.menu-moblie__navbar').slideDown(500,'linear');
         }
         else {
            isClickBars = !isClickBars;
            $('.menu-moblie__bars span:nth-child(1)').css({
               'transform': 'none',
               'transform-origin' :'none'
            });
            $('.menu-moblie__bars span:nth-child(2)').css({
               'opacity': '1',
               'visibility':'visible'
            });    
            $('.menu-moblie__bars span:nth-child(3)').css({
               'transform': 'none',
               'transform-origin' :'none'
            });  
            $('.container-content').css('z-index','3');  
            $('.menu-moblie__navbar').slideUp(500,'linear')
         }
   });
});

