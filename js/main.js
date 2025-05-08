// HTML문서가 모두 로드 된 후 내부 코드 실행
$(document).ready(function () {
    //Menu Hover
    // .menu_main 클래스를 가진 요소 위에 마우스를 올리면 로직 실행
    $(".menu_main").hover(function(){
        // 마우스를 올리면 로직 실행(1) .mini_title slideDown
      $(this).find(".mini_title").stop().slideDown();
    },
    // 마우스를 빼면 로직 실행(2) 
    function(){
        // 반대로 모두 slideUp
      $(this).find(".mini_title").stop().slideUp();
    });

    //Banner Swipe
    $('.swiper').slick({
        // 한줄
        row: 1,
        // 1개씩
        slidesToShow: 1,
        // 자동 넘기기
        autoplay: true,
        // 자동 넘기기 속도 (1.5초)
        autoplaySpeed: 1500,
        // 마우스 올리면 정지
        pauseOnFocus: true,
        // 넘어가는 속도 (1.5초)
        speed: 1500,
        // 하단에 컨텐츠 갯수만큼 점 생김
        dots: true
    })
  });