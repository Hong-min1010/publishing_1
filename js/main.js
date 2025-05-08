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

    // Tap
    $('#tab .circle_info').click(function() {
        // 1. 모든 탭에서 active 클래스 제거
        $('#tab .circle_info').removeClass('active');
        // 2. 클릭한 탭에 active 클래스 추가
        $(this).addClass('active');

        // 3. 모든 데이터(건물 목록) 숨김
        $('.main_content .buildings').hide();

        // 4. 클릭한 탭의 data-alt 값을 가져옴 (예: tab1, tab2, ...)
        var tabId = $(this).attr('data-alt');
        // 5. 해당 id를 가진 div만 보여줌 (id는 tab1, tab2, ...)
        $('#' + tabId).show();
    });

    // 페이지 로드시 default -> 1번 Tab
    $('#tab .circle_info').first().addClass('active');
    $('.main_content .buildings').hide();
    $('#tab1').show();

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