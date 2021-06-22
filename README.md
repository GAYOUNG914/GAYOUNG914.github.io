# 관세청(Customs) clone coding
관공서 관세청을 클론코딩한 프로젝트입니다.<br>
현재 추가, 수정 중에 있습니다.

## Link
* https://gayoung914.github.io/
* subpapge
  - https://gayoung914.github.io/info.html

## Tool
* HTML5
* CSS3
* SCSS
* Jquery
* swiper Plugin

## Skill
* Header Interaction<br>
  - **gnb 호버시 드롭**<br>
    👉 hover function과 slideToggle function을 사용하여 호버시 스르륵 올라갔다 내려가는 gnb를 구현해보았습니다.
```
$("#navigation").hover(function () {
    //호버 시 메뉴박스 드롭
    $(this).attr("style", "overflow:visible");
    $(this).find(".menubox").stop().slideToggle(500);
    $(this).find(".menubox").css({ display: "block", opacity: "1" });
  });
```
* Header & lnb in subpage Interaction<br>
  - **아코디언**<br>
    👉 on click method, slideDown, slideUP 그리고 if 문을 이용하여 아코디언을 구현해보았습니다.
```
$(".lnb dt").on("click", function () {
    if ($(this).hasClass("on")) {
      slideUp();
    } else {
      slideUp();
      $(this).addClass("on").next().slideDown();
    }
    function slideUp() {
      $(".lnb dt").removeClass("on").next().slideUp();
    }
  });
```

* Main Contents Interaction<br>
  - **탭메뉴**<br>
    👉 click function을 이용하여 클릭 시 class를 빼거나 부여하는 방식으로 탭메뉴를 구현해보았습니다.
```
$(".box1 h3").click(function () {
    //현재 선택되어있던 메뉴 초기화
    $(".box1 h3").removeClass("on");
    $(".link_item").removeClass("on");
    // 선택된 메뉴에 on클래스 표기
    $(this).addClass("on");
    //h3에 on이 추가되는지 확인(clss 가져오기)
    console.log($(this).attr("class"));
    //클래스가 title_1포함하면, 아이디con1에 클래스on 추가
    if ($(this).attr("class").includes("title_1")) {
      $("#con1").addClass("on");
      console.log("test");
      //아니면 클래스가 title_2 포함이면 아이디con2에 클래스on 추가
    } else if ($(this).attr("class").includes("title_2")) {
      $("#con2").addClass("on");
      console.log("test");
    }
  });
```

## License
* Copyright © Korea Customs Service All Rights Reserved.

