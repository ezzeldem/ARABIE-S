$(document).ready(function () {
  if ($("html").attr("dir") == "rtl") {
    var dir_lang = true;
  } else {
    var dir_lang = false;
  }

  $("body").click(function () {
    $(".menu-content").removeClass("open");
  });

  $(".header-section .nav-box .menu-box i").click(function (e) {
    e.stopPropagation();
    $(".menu-content").addClass("open");
  });
  $(".menu-content ").click(function (e) {
    e.stopPropagation();
  });
  $(".menu-content .close-link h4").click(function () {
    $(".menu-content").removeClass("open");
  });

  $(".tutor-slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    rtl: dir_lang,
    dots: false,
    adaptiveHeight: true,
    autoplaySpeed: 1700,
    responsive: [
      {
        breakpoint: 772,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".event-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    rtl: dir_lang,
    dots: false,
    adaptiveHeight: true,
    autoplaySpeed: 1700,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 772,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
