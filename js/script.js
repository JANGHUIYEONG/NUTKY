$(function(){
    $(".board>li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
});
// .siblings은 on을 제외한 다른 형제들
// universr tap script

// Q&A
$(function(){
	$(".notice> ul> li").click(function(){
		$(this).children(".text_info").slideToggle();
		$(this).siblings().children(".text_info").slideUp();
	});
});
$(function(){
	$(".notice> ul> li").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
			
		}

	});
});
