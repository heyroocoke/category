//전체 page양식 적용_________________________________________________________
let scroll = function () {

let $nav = null,
    $cnt = null,
    moveCnt = null,
    moveIndex = 0,
    moveCntTop = 0,
    winH = 0,
    time = false; // 새로 만든 변수

$(document).ready(function () {
    init();
    initEvent();

  });

  let init = function () {
    $cnt = $(".content");
    $nav = $(".header a");
  };
  
  let initEvent = function () {
    $("html ,body").scrollTop(0);
    winResize();
    $(window).resize(function () {
      winResize();
    });
    $nav.on("click", function () {
      moveIndex = $(this).parent("li").index();
      moving(moveIndex);
      return false;
    });
    $cnt.on("mousewheel", function (e) {
      if (time === false) { // time 변수가 펄스일때만 휠 이벤트 실행
        wheel(e);
      }
    });
  };

  let winResize = function () {
    winH = $(window).height();
    $cnt.children("div").height(winH);
    $("html ,body").scrollTop(moveIndex.scrollTop);
  };

  let wheel = function (e) {
    if (e.originalEvent.wheelDelta < 0) {
      if (moveIndex < 4) {
        moveIndex += 1;
        moving(moveIndex);
      };
    } else {
      if (moveIndex > 0) {
        moveIndex -= 1;
        moving(moveIndex);
      };
    };
  };

  let moving = function (index) {
    time = true // 휠 이벤트가 실행 동시에 true로 변경
    moveCnt = $cnt.children("div").eq(index);
    moveCntTop = moveCnt.offset().top;
    $("html ,body").stop(true,true).animate({
      scrollTop: moveCntTop
    }, 1000, function () {
      time = false; // 휠 이벤트가 끝나면 false로 변경
    });
    $nav.parent("li").eq(index).addClass("on").siblings().removeClass("on");
  };

};

scroll();
//참고사이트 ->https://codepen.io/recordboy/pen/JBmvpp
//____________________________________________________________________________


//1page 화면전환효과 삽입_______________________________________________
$(document).ready(function(){

	//이미지 전환효과 함수생성

  let showImg=0;
  let nextImg=0;

  function changeImg(){ /* 일반함수 */

    nextImg++;
    ImgCount=$(".mainvisual .visual li").length;

    if(nextImg==ImgCount){ //마지막이미지일때 다시 첫번째 이미지로
      nextImg=0;
    }

    $(".mainvisual .visual li").eq(showImg).removeClass("imgVisible"); //기존이미지효과준 클래스 제거(기존이미지)
    $(".mainvisual .visual li").eq(nextImg).addClass("imgVisible"); //이미지효과준 클래스 생성(새로나타나는 이미지)
    $(".mainvisual .btn>span").eq(showImg).removeClass("active"); //기존 버튼
    $(".mainvisual .btn>span").eq(nextImg).addClass("active"); //선택된 버튼

    showImg=nextImg;
  }

  timer1=setInterval(changeImg,5000);



});
//__________________________________________________________________________

//page2 좌우이동효과___________________________________________________________
$(document).ready(function(){

	//다음보기
  $(".ban_btn .ban_right").click(function(){

    $(".ban ul").stop(true,true).animate({marginLeft:"-=450px"},1000,function(){			
			$(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지 맨뒤로 이동
			$(this).css({marginLeft:"0px"}); //최종목적지
		});	

  });

  //이전보기
  $(".ban_btn .ban_left").click(function(){

    $(".ban ul").stop(true,true).animate({marginLeft:"+=450px"},1000,function(){			
			$(".ban ul li:last-child").prependTo(".ban ul"); //마지막 이미지 맨앞로 이동
			$(this).css({marginLeft:"0px"}); //최종목적지
		});

  });
	
});
//_____________________________________________________________________________

//page3 tap menu_______________________________________________________________

$(document).ready(function(){

	$(".panel>li:not(:first)").hide();
	//첫번째를 제외한 나머지 내용 숨기기
	
	$(".tab>li").click(function(){
		$(".tab>li").removeClass("selected");//기존선택된 selected 클래스삭제
		$(this).addClass("selected"); //새로 선택된 selected 클래스 생성
		$(".panel>li").hide();//기존의 보여진 내용 숨기기
		$($(this).find("a").attr("href")).show();//새로 선택된 내용 href 연결된내용 보여주기
	});


});



//page5 tap menu_______________________________________________________________

$(document).ready(function(){

  $("dd:not(:first)").css("display","none");
	$("dt:first").addClass("selected");

  $("dl dt").click(function(){
    
    $("dl dt").find("+dd").stop().hide("slow"); 
    $(this).find("+dd").show("slow");
    $("dt").removeClass("selected"); 
    $(this).addClass("selected"); 

  });


});