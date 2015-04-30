$(document).ready(function () {  // waits for the page to load


// ---------------Sticky Nav at Top of Page on Desktop-----------------------------------

  var stickyNavTop = $('header').position().top;  // Gets position of "header"
  var stickyNav = function() {  // defines function "stickyNav"

  var scrollTop = $(window).scrollTop();  // defines the top at which to add the below class
  var windowWidth = $(window).width(); // Define window width variable

  if (scrollTop > stickyNavTop) {
      $('#sticker').addClass('sticky');  // adds the class of ".sticky" to "header"
    }
        else {
      $('#sticker').removeClass('sticky');   // removes class of "sticky" from "header"
    }
  };

  stickyNav();

  $(window).scroll(function() {
      stickyNav();
  });

// --------------- Sticky Nav at Top of Page on Desktop ----------------------------


// --------------- Slide to Section -----------------------------------


    $("#home-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 800);
    });


    $("#intro-work").click(function() {
    $('html, body').animate({
        scrollTop: $("#my-work").offset().top + 75
    }, 800);
    });


    $("#my-work-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#my-work").offset().top + 75
    }, 800);
    });


    $("#contact-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top + 75
    }, 800);
    });


    $("#back-to-top").click(function() {
      $('html, body').animate({
          scrollTop: $("html").offset().top
      }, 800);
    });


    $("#down-arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#my-work").offset().top + 75
    }, 800);
    });


// --------------- Slide to Section -----------------------------------


// --------------- Mobile Navigation  -----------------------------------

var windowWidth = $(window).width(); // Define window width variable

      $(function () {
            $('#menu-icon').click(function(e) {
            $('nav').slideToggle(200);
            e.stopPropagation();
          });
      });

// --------------- Mobile Navigation  -----------------------------------


// ---------------  HOME TEXT FADE  -----------------------------------

//var windowWidth = $(window).width(); // Define window width variable

//  if (windowWidth >= 1024) {
//  $(window).scroll(function(){
//    var top = ($(window).scrollTop() > 0) ? $(window).scrollTop() : 1;
//   $('.fade').stop(true, true).fadeTo(0, 7 / top);
//    $('.fade').css('top', top * 1.3);
// });
// };

// ---------------  HOME TEXT FADE  -----------------------------------




});






