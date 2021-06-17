$(function() {
  //탭메뉴구현
  //box1 h3 클릭했을 때 동작
  $(".box1 h3").click(function() {
    //현재 선택되어있던 메뉴 초기화
    $(".box1 h3").removeClass('on');
    $(".link_item").removeClass('on');
    // 선택된 메뉴에 on클래스 표기
    $(this).addClass("on");
    //h3에 on이 추가되는지 확인(clss 가져오기)
    console.log($(this).attr('class'));
    //if 클래스가 title_1포함하면 아이디con1에 클래스on 추가
    if ($(this).attr('class').includes("title_1")) {
      $("#con1").addClass('on')
      console.log("test")
      //아니면 클래스가 title_2 포함이면 아이디con2에 클래스on 추2
    } else if ($(this).attr('class').includes("title_2")) {
      $("#con2").addClass('on')
      console.log("test")
    }
  });
  //box2 h2 탭 메뉴
  $(".box2 h2").click(function() {
    //현재 선택되어있던 메뉴 초기화
    $(".box2 h2").removeClass('on');
    $(".link_list").removeClass('on');
    // 선택된 메뉴에 on클래스 표기
    $(this).addClass("on");
    //h2에 on이 추가되는지 확인(clss 가져오기)
    console.log($(this).attr('class'));
    //if 클래스가 title_1포함하면 아이디con1에 클래스on 추가
    //!!반복문 돌리기!!
    if ($(this).attr('class').includes("h2_title_1")) {
      $("#list1").addClass('on')
      console.log("test")
      //아니면 클래스가 title_2 포함이면 아이디con2에 클래스on 추2
    } else if ($(this).attr('class').includes("h2_title_2")) {
      $("#list2").addClass('on')
      console.log("test")
    }else if ($(this).attr('class').includes("h2_title_3")) {
      $("#list3").addClass('on')
      console.log("test")
    }else if ($(this).attr('class').includes("h2_title_4")) {
      $("#list4").addClass('on')
      console.log("test")
    }else if ($(this).attr('class').includes("h2_title_5")) {
      $("#list5").addClass('on')
      console.log("test")
    }else if ($(this).attr('class').includes("h2_title_6")) {
      $("#list6").addClass('on')
      console.log("test")
    }
  });
  //box3 h2 탭 메뉴
  $(".box3 h2").click(function() {
    //현재 선택되어있던 메뉴 초기화
    $(".box3 h2").removeClass('on');
    $(".list_box").removeClass('on');
    // 선택된 메뉴에 on클래스 표기
    $(this).addClass("on");
    //h2에 on이 추가되는지 확인(clss 가져오기)
    console.log($(this).attr('class'));
    //if 클래스가 tit_1포함하면 .list_box1에 클래스on 추가
    if ($(this).attr('class').includes("tit_1")) {
      $(".list_box1").addClass('on')
      console.log("test")
      //아니면 클래스가 tit_2 포함이면 .list_box2에 클래스on 추가
    } else if ($(this).attr('class').includes("tit_2")) {
      $(".list_box2").addClass('on')
      console.log("test")
    }
  });

  //subpage lnb accordian 구현
  $('.lnb dt').on('click', function() {

    if ($(this).hasClass('on')) {
      slideUp();
    } else {
      slideUp();
      $(this).addClass('on').next().slideDown();
    }

    function slideUp() {
      $('.lnb dt').removeClass('on').next().slideUp();
    };
  })

//메뉴박스 하위요소들에 class 부여
  $('.menubox > li').addClass('menubox_li');
  $('.menubox > li > a').addClass('menubox_title');

  // $("#navigation").hover(function(){
  //   $(".menubox",this).css({"display":"block","opacity":"1"});
  //   $(this).css({"overflow","visible"});
  // });

  $("#navigation").hover(function() {
    //호버 시 메뉴박스 드롭
    $(this).attr('style', 'overflow:visible');
    $(this).find(".menubox").stop().slideToggle(500);
    $(this).find(".menubox").css({"display":"block","opacity":"1"});
    //메뉴박스 높이를 따라가는 #blind
    let boxHeight = $(this).find(".menubox").height();
    // console.log('boxHeight')
    $(this).find("#blind").css("height", boxHeight);
    // .menubox의 높이를 구해서 #blind의 높이 css를 같게만든다...가 안됨
  })

  //드롭메뉴 아코디언
  $('#navigation .menubox > li > a').on('click', function() {

    if ($(this).hasClass('on')) {
      slideUp();
    } else {
      slideUp();
      $(this).addClass('on').next().slideDown();
      $(this).parent().addClss('on'); //여기 안됨
    }

    function slideUp() {
      $('#navigation .menubox > li > a').removeClass('on').next().slideUp();
    };
  });


//스와이퍼 pause 버튼 구현...이 안됨

  $(".swiper-button-pause").click(function(){
    swiper.autoplay.stop();
  });

}); //document ready
