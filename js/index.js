$(document).ready(function () {
  $(".menu_main").hover(function(){
    $(this).find(".mini_title").stop().slideDown();
  },
  function(){
    $(this).find(".mini_title").stop().slideUp();
  });

  $('#tab .circle_info').click(function() {
      $('#tab .circle_info').removeClass('active');
      $(this).addClass('active');

      $('.main_content .buildings').hide();

      var tabId = $(this).attr('data-alt');
      $('#' + tabId).show();
  });

  $('#tab .circle_info').first().addClass('active');
  $('.main_content .buildings').hide();
  $('#tab1').show();

  $('.swiper').slick({
      row: 1,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnFocus: true,
      speed: 1500,
      dots: true
  })
});