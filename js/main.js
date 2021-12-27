$(document).ready(function () {
    "use strict";

    $(".main").addClass("in-view");
    $(".header").addClass("in-view");

    var $animation_elements = [$('.services'), $('.ransom')];
    var $window = $(window);

    $window.on('scroll', check_if_in_view);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
      
        $.each($animation_elements, function() {
          var $element = $(this);
          var element_height = $element.outerHeight();
          var element_top_position = $element.offset().top;
          var element_bottom_position = (element_top_position + element_height);
      
          if ((element_bottom_position >= window_top_position) &&
              (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
          } else {
            $element.removeClass('in-view');
          }
        });
    }


    $('.main_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        prevArrow: $('.main_navigation_arrows_prev'),
        nextArrow: $('.main_navigation_arrows_next')
    });

    $('.main_slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        var CurrentSlideDom = $(slick.$slides.get(currentSlide));
        var numberOfSlide = $(CurrentSlideDom).attr("data-slick-index");
        var intnumberOfSlide = parseInt(numberOfSlide);
        var Increment = intnumberOfSlide + 1;
        var final = "0" + Increment;
        $(".main_navigation_text_current").html(final);
    });

    $(".header_mobile_burger").click(function() {
        $(".dropdown_mobile").toggleClass("active");
        $(".back_modal").toggleClass("active");
        $(this).toggleClass("active");
    });

    $(".back_modal").click(function() {
        $(this).removeClass("active");
        $(".header_mobile_burger").removeClass("active");
        $(".dropdown_mobile").removeClass("active");
        $(".dropdown_desktop").removeClass("active");
    });

    $(".header_desktop_left_btn").click(function() {
        $(this).toggleClass("active");
    });

    $(".header_desktop_left_btn").click(function() {
        $(".dropdown_desktop").addClass("active");
        $(".back_modal").addClass("active");
    });

    $(".dropdown_desktop_close").click(function() {
        $(".dropdown_desktop").removeClass("active");
        $(".back_modal").removeClass("active");
    });

});