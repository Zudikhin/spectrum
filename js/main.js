$(document).ready(function () {
    "use strict";

    $(".main").addClass("in-view");
    $(".header").addClass("in-view");


    $(window).scroll(function() {

        if ($('.services_block').visible(true)) {
            $('.services').addClass("in-view");
        }

        if($('.offers_text_description').visible(true)) {
            $(".offers").addClass("in-view");
        }

        if($('.media_img').visible(true)) {
            $(".media").addClass("in-view");
        }

        if($('.ransom_title').visible(true)) {
            $(".ransom").addClass("in-view");
        }

        if($('.advantages_block').visible(true)) {
            $(".advantages").addClass("in-view");
        }
        

    });

    $(".catalog_top_mobile_categories_current").click(function() {
        $(this).parent().toggleClass("active");
    });
    
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

    $('.product_content_img_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        asNavFor: '.product_content_img_nav'
    });

    $('.product_content_img_nav').slick({
        slidesToShow: 6,
        slideToScroll: 1,
        asNavFor: '.product_content_img_for',
        centerMode: true,
        focusOnSelect: true
    });


    $('.catalog_block_list_item_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true
    });


});