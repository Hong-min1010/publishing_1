// HTML문서가 모두 로드 된 후 내부 코드 실행
$(document).ready(function () {
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
  });