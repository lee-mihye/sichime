/// 버튼 클릭하면 원하는 위치로 이동 JS - linksys.js ///



$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!");

    //////// 상단 코멘트 클릭시 하단 리뷰로 이동/////////
    $(".comment").click(function (e) {
        e.preventDefault();
        var offset = $("#url_copy_2").offset();

        $("html,body").animate({
            scrollTop: offset.top
        }, 400);
    }); ////////comment click/////////////////


     // 1. 특정 위치에서 부터 버튼 나타고, 사라지게..효과는 fade로
    //  $(window).scroll(function () {
	// 	if ($(this).scrollTop() > 200) {
	// 		$('.tbtn').fadeIn(200);
	// 	} else {
	// 		$('.tbtn').fadeOut(200);
	// 	}
	// });

	// 2. 버튼 클릭하면 원하는 위치로 이동
	$('.tbtn').click(function (event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 400);
	});



}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////