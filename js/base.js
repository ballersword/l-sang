$(function() {

	$(".cc").click(function(event) {
		$(".cc_main").slideDown();
		event.stopPropagation();
	});
	$("body").click(function(){
		$(".cc_main").slideUp();
	});
	

	$(".ad_display p").hover(function() {
		$(".ad_display p").stop().animate({
			width: "80px",
			opacity: "0.5"
		}, 500);
		$(this).stop().animate({
			width: "465px",
			opacity: "1"
		}, 500);
	}, function() {
		$(".ad_display p").stop().animate({
			width: "135px",
			opacity: "0.8"
		}, 500);
	});

	
	$(".package_font:eq(0)").css("top","104px").show();
	$(".package_font:eq(1)").css("top","155px");
	$(".package_font:eq(2)").css("top","206px");
	$(".package1").css("background","#252F86");
	$(".package1").mouseover(function() {
		$(".package_font:eq(0)").show();
		$(".package_font:eq(1),.package_font:eq(2)").hide();
		$(this).css("background","#252F86");
		$(".package2").css("background","#9195B0");
		$(".package3").css("background","#A0A3B2");
	});
	$(".package2").mouseover(function() {
		$(".package_font:eq(1)").show();
		$(".package_font:eq(0),.package_font:eq(2)").hide();
		$(this).css("background","#252F86");
		$(".package1").css("background","#7d81a5");
		$(".package3").css("background","#A0A3B2");
	});
	$(".package3").mouseover(function() {
		$(".package_font:eq(2)").show();
		$(".package_font:eq(0),.package_font:eq(1)").hide();
		$(this).css("background","#252F86");
		$(".package1").css("background","#7d81a5");
		$(".package2").css("background","#9195B0");
	});

// ==========================================  滚轮事件
// ==========================================  nav悬浮 
	$(window).scroll(function() {
		if ($(window).scrollTop() > 174) {
			$("header nav").css({
				position: "fixed",
				top: "0",
				left: "0",
				boxShadow: "0px 0px 5px #cccccc",
				zIndex: "29999"
			});
			$(".nav_list").fadeOut();
		} else {
			$("header nav").css({position:"static",boxShadow:"none"});
			$(".nav_list").fadeIn();
		}	
// ========================================== 下滚图片飞入
		if ($(window).scrollTop() > 350) {
			$(".2_1 .column2:eq(1) .tips").animate({
				right: "50px",
				opacity: "1"
			}, 1000);
			$(".2_1 .column2:eq(1) span").animate({
				top: "138px",
				opacity: "1"
			}, 1000);
			$(".2_1 .column2:eq(1) p").animate({
				left: "0",
				opacity: "1"
			}, 1000);
			$(".2_2 .column2:eq(1) .tips").animate({
				left: "50px",
				opacity: "1"
			}, 1000);
			$(".2_2 .column2:eq(1) span").animate({
				top: "138px",
				opacity: "1"
			}, 1000);
			$(".2_2 .column2:eq(1) p").animate({
				right: "0",
				opacity: "1"
			}, 1000);
		}
		if ($(window).scrollTop() > 800) {
			$(".2_1 .column2:eq(2) .tips").animate({
				left: "50px",
				opacity: "1"
			}, 1000);
			$(".2_1 .column2:eq(2) span").animate({
				top: "138px",
				opacity: "1"
			}, 1000);
			$(".2_1 .column2:eq(2) p").animate({
				right: "0",
				opacity: "1"
			}, 1000);
			$(".2_2 .column2:eq(2) .tips").animate({
				right: "50px",
				opacity: "1"
			}, 1000);
			$(".2_2 .column2:eq(2) span").animate({
				top: "138px",
				opacity: "1"
			}, 1000);
			$(".2_2 .column2:eq(2) p").animate({
				left: "0",
				opacity: "1"
			}, 1000);
		}
		if ($(window).scrollTop() > 1250) {
			$(".2_1 .column2:eq(3) .tips").animate({
				right: "50px",
				opacity: "1"
			}, 1000);
			$(".2_1 .column2:eq(3) span").animate({
				top: "138px",
				opacity: "1"
			}, 1000);
			$(".2_1 .column2:eq(3) p").animate({
				left: "0",
				opacity: "1"
			}, 1000);
			$(".2_2 .column2:eq(3) .tips").animate({
				left: "50px",
				opacity: "1"
			}, 1000);
			$(".2_2 .column2:eq(3) span").animate({
				top: "138px",
				opacity: "1"
			}, 1000);
			$(".2_2 .column2:eq(3) p").animate({
				right: "0",
				opacity: "1"
			}, 1000);
		}
		if ($(window).scrollTop() > 1700) {
			$(".2_1 .column2:eq(4) .tips").animate({
				left: "50px",
				opacity: "1"
			}, 1000);
			$(".2_1 .column2:eq(4) span").animate({
				top: "138px",
				opacity: "1"
			}, 1000);
			$(".2_1 .column2:eq(4) p").animate({
				right: "0",
				opacity: "1"
			}, 1000);
		}

	});
	
	
	$(".2_1 .column2:even .tips,.2_2 .column2:odd .tips").css({
		left: "-200px",
		opacity: "0"
	});
	$(".2_1 .column2:even p,.2_2 .column2:odd p").css({
		right: "-200px",
		opacity: "0"
	});
	$(".2_1 .column2:odd .tips,.2_2 .column2:even .tips").css({
		right: "-200px",
		opacity: "0"
	});
	$(".2_1 .column2:odd p,.2_2 .column2:even p").css({
		left: "-200px",
		opacity: "0"
	});
	$(".column2 span").css({
		top: "300px",
		opacity: "0"
	});
	$(".2_1 .column2:eq(0) .tips").animate({
		left: "50px",
		opacity: "1"
	}, 1000);
	$(".2_1 .column2:eq(0) span").animate({
		top: "138px",
		opacity: "1"
	}, 1000);
	$(".2_1 .column2:eq(0) p").animate({
		right: "0",
		opacity: "1"
	}, 1000);
	$(".2_2 .column2:eq(0) .tips").animate({
		right: "50px",
		opacity: "1"
	}, 1000);
	$(".2_2 .column2:eq(0) span").animate({
		top: "138px",
		opacity: "1"
	}, 1000);
	$(".2_2 .column2:eq(0) p").animate({
		left: "0",
		opacity: "1"
	}, 1000);

	$("#list_down").toggle(function() {
		$(".nav_list").slideUp();
	}, function() {
		$(".nav_list").slideDown();
	});

	$(".nav_list a").click(function() {
		$(".nav_list a").css("background", "rgba(255, 255, 255, 0)");
		$(this).css("background", "rgba(255, 255, 255, 0.5)");
	});


	$(".about_t img:gt(0)").hide();
	$(".about_main p:gt(0)").hide();
	$(".about_tt a").each(function(i) {
		$(".about_tt a:eq(" + i + ")").hover(function() {
			$(".about_t img").hide();
			$(".about_main p").hide();
			$(".about_t img:eq(" + i + ")").show();
			$(".about_main p:eq(" + i + ")").show();
			$(".about_tt a").css("color","#fff");
		}, function() {});
	});
		$(".about_tt a:eq(0)").hover(function(){$(this).css("color","#E00710");},function(){});
		$(".about_tt a:eq(1)").hover(function(){$(this).css("color","#439E3D");},function(){});
		$(".about_tt a:eq(2)").hover(function(){$(this).css("color","#E65F0C");},function(){});
		$(".about_tt a:eq(3)").hover(function(){$(this).css("color","#DDD608");},function(){});

	$(".close_cover").click(function() {
		$(".aboutZone").fadeOut();
	});
	$("#aboutUs").click(function() {
		$(".aboutZone").fadeIn();
	});

/* ==================== banner 切换  ======================= */
	$(".arrow_r").click(function() {
		$(".roll").stop().animate({
			left: "-1020px"
		}, 1000, function() {
			$(".roll a:eq(0)").insertAfter($(".roll a:last"));
			$(".roll").css("left", "0");
		});
	});
	$(".arrow_l").click(function() {
		var $left = $(".roll a:last").clone(true);
		$left.insertBefore($(".roll a:eq(0)"));
		$left.css({
			positon: "absolute",
			left: "50%",
			marginLeft: "-1020px"
		});
		$(".roll").stop().animate({
			left: "1020px"
		}, 1000, function() {
			$(".roll a:last").insertBefore($(".roll a:eq(0)"));
			$(".roll").css("left", "0");
			$left.remove();
		});
	});
/* ==================== 400 切换test  ======================= */
$(".tel400 a:eq(0)").css("zIndex","9999");
$(".tel400 a:eq(1)").css("zIndex","8888");
var oo=1;

$(".arrow_r").click(function(){
if(oo>3){oo=0;}
$(".tel400 a:eq(1) img").attr("src","img/400_dis_"+(oo+1)+".jpg");//为保证第二层400图层显示正确图片
oo++;
$(".tel400 a:eq(0)").animate({width:"0px"}, 1000,function(){
	 $(".tel400 a:eq(0)").css("width","430px");
	 $(".tel400 a:eq(0) img").attr("src","img/400_dis_"+oo+".jpg");
     $(".tel400 a:eq(1) img").attr("src","img/400_dis_"+(oo+1)+".jpg");
});

});

$(".arrow_l").click(function(){
if(oo<2){oo=5;}
$(".tel400 a:eq(1) img").attr("src","img/400_dis_"+(oo-1)+".jpg");
oo--;
$(".tel400 a:eq(0) ").css({right:"0px",left:"auto"});
$(".tel400 a:eq(0) span").css({right:"0px",left:"auto"});
$(".tel400 a:eq(0) ").animate({width:"0px"}, 1000,function(){
	 $(".tel400 a:eq(0)").css({width:"430px",right:"auto",left:"0px"});
	 $(".tel400 a:eq(0) span").css({right:"auto",left:"0px"});
     $(".tel400 a:eq(0) img").attr("src","img/400_dis_"+oo+".jpg");
     $(".tel400 a:eq(1) img").attr("src","img/400_dis_"+(oo-1)+".jpg");
});

});

if(oo==1){
	 $(".tel400 a:eq(0) img").attr("src","img/400_dis_1.jpg");
     $(".tel400 a:eq(1) img").attr("src","img/400_dis_2.jpg");
}





$(".printing a span:eq(0)").animate({opacity:1}, 300);
	$(".printing a").click(function() {
		$(".printing a").removeClass("now_step").addClass("other_step");
		$(this).removeClass("other_step").addClass("now_step");
		$(".printing a").not(this).find("span").animate({opacity:0,marginTop:"-60px"}, 300);
		$(this).find("span").animate({opacity:1,marginTop:"-30px"}, 500);
	});
	$(".printing_main:eq(0)").show();
	$(".printing a").each(function(i) {

		$(".printing a:eq(" + i + ")").click(function() {
			$(".printing_main").hide();
			$(".printing_main:eq(" + i + ")").show();
		});

	});

	$(".column3 ul li:odd").css("background", "#f3f3f3");

	$(".thx_user a").each(function(i) {
		$(".thx_user a:eq(" + i + ")").click(function() {
			$(".user_info:eq(" + i + ")").show();
			$(".user_cover,.all_mask").fadeIn(300);
		});
	});
	$(".close_cover").click(function() {
		$(".user_info,.type_info").hide();
		$(".user_cover,.all_mask,.type_cover,.li_cover,.index_cover").fadeOut(300);
		$(".t_l").animate({
			marginLeft: "-717px",
			opacity: "0"
		}, 500);
		$(".t_r").animate({
			marginLeft: "462px",
			opacity: "0"
		}, 500);
	});

	$(".type_a a").each(function(i) {
		$(".type_a a:eq(" + i + ")").click(function() {
			$(".type_info:eq(" + i + ")").show();
			$(".type_cover").fadeIn(300);
			$(".t_l").animate({
				marginLeft: "-517px",
				opacity: "1"
			}, 500);
			$(".t_r").animate({
				marginLeft: "262px",
				opacity: "1"
			}, 500);
		});
	});

	$(".column3 ul li").each(function(i) {
		$(".column3 ul li:eq(" + i + ") .made_step").click(function() {
			$(".column3 ul li .li_cover").hide();
			$(".column3 ul li:eq(" + i + ") .li_cover").fadeIn(300);
		});
	});


// ====================================== 小圆点过渡
$(".banner2_1 img,.banner2_2 img").css("opacity","0");
$(".banner2_1 img:eq(0),.banner2_2 img:eq(0)").css("opacity","1");
$(".switch_zone_1 a").each(function(i){
	$(".switch_zone_1 a:eq("+i+")").click(function(){
		$(this).animate({width:"9px",opacity:"1"},500);
		$(".switch_zone_1 a:eq("+(i+1)+"),.switch_zone_1 a:eq("+(i-1)+")").animate({width:"29px",opacity:"0.8"},500);
		$(".switch_zone_1 a:eq("+(i+2)+"),.switch_zone_1 a:eq("+(i-2)+")").animate({width:"29px",opacity:"0.6"},500);
		$(".switch_zone_1 a:eq("+(i+3)+"),.switch_zone_1 a:eq("+(i-3)+")").animate({width:"29px",opacity:"0.4"},500);
		$(".switch_zone_1 a:eq("+(i+4)+"),.switch_zone_1 a:eq("+(i-4)+")").animate({width:"29px",opacity:"0.2"},500);
		$(".switch_zone_1 a:eq("+(i+5)+"),.switch_zone_1 a:eq("+(i-5)+")").animate({width:"29px",opacity:"0.1"},500);
		$(".banner2_1 img:not(:eq("+i+"))").animate({opacity:"0"},500);
		$(".banner2_1 img:eq("+i+")").animate({opacity:"1"},500);
		$(".banner_detailed").attr("href","#a"+i+"");
	});
});
$(".switch_zone_2 a").each(function(i){
	$(".switch_zone_2 a:eq("+i+")").click(function(){
		$(this).animate({width:"9px",opacity:"1"},500);
		$(".switch_zone_2 a:eq("+(i+1)+"),.switch_zone_2 a:eq("+(i-1)+")").animate({width:"29px",opacity:"0.8"},500);
		$(".switch_zone_2 a:eq("+(i+2)+"),.switch_zone_2 a:eq("+(i-2)+")").animate({width:"29px",opacity:"0.6"},500);
		$(".switch_zone_2 a:eq("+(i+3)+"),.switch_zone_2 a:eq("+(i-3)+")").animate({width:"29px",opacity:"0.4"},500);
		$(".switch_zone_2 a:eq("+(i+4)+"),.switch_zone_2 a:eq("+(i-4)+")").animate({width:"29px",opacity:"0.2"},500);
		$(".switch_zone_2 a:eq("+(i+5)+"),.switch_zone_2 a:eq("+(i-5)+")").animate({width:"29px",opacity:"0.1"},500);
		$(".banner2_2 img:not(:eq("+i+"))").animate({opacity:"0"},500);
		$(".banner2_2 img:eq("+i+")").animate({opacity:"1"},500);
		$(".banner_detailed").attr("href","#a"+i+"");
	});	
});

/*  =============== 首页遮罩运动 与 下拉=====================  */
var zup = $(".zoneUp .column").length;
var zdown = $(".zoneDown .column").length;
var zdownPosition = 1063+(zup*310);
var zdownSize = 277+(zup*310);
$(".column_now2").css("top",zdownSize+"px");

$(window).scroll(function() {

for(var i=0;i<zup;i++){
	var isize = i*310;
	if ($(window).scrollTop() >(770 + isize)) 
{$(".column_now").stop().animate({top:-12+isize+"px"}, 500);}
}

for(var i=0;i<zdown;i++){
	var isize = i*310;
	if ($(window).scrollTop() >(zdownPosition + isize)) 
{$(".column_now2").stop().animate({top:(zdownSize+isize)+"px"}, 500);}
}

});


$(".column_now .size_ctrl").click(function(){
	$(".column_now .index_cover").fadeIn();
	$(".size_info").show();
	$(".index_cover_info_main").hide();
});

$(".column_now .index_cover_info").click(function(){
	$(".column_now .index_cover").fadeIn();
	$(".size_info").hide();
	$(".index_cover_info_main").show();
});
$(".column_now2 .size_ctrl").click(function(){
	$(".column_now2 .index_cover").fadeIn();
	$(".size_info").show();
	$(".index_cover_info_main").hide();
});

$(".column_now2 .index_cover_info").click(function(){
	$(".column_now2 .index_cover").fadeIn();
	$(".size_info").hide();
	$(".index_cover_info_main").show();
});

$(".column_now2 .size_info table tr:gt(0),.column_now .size_info table tr:gt(0)").hover(function(){
	$(this).css({background:"#e7e7e7",color:"#000"});
},function(){
	$(".column_now2 .size_info table tr:eq(1),.column_now2 .size_info table tr:eq(3),.column_now2 .size_info table tr:eq(5),.column_now .size_info table tr:eq(1),.column_now .size_info table tr:eq(3),.column_now .size_info table tr:eq(5)").css({background:"#242424",color:"#fff"});
	$(".column_now2 .size_info table tr:eq(2),.column_now2 .size_info table tr:eq(4),.column_now .size_info table tr:eq(2),.column_now .size_info table tr:eq(4)").css({background:"#2f2f2f",color:"#fff"});
});

//=========================== 非首页的关于我们窗口定位 
$(".aboutDiv_position").css("marginTop",($(window).height()/2)-238+"px");


$(".column3_info span img:eq(0)").css("opacity","1");
$(".pointer").toggle(function(){
		$(".column3_info span img:eq(0)").animate({opacity:"0"},500);
	$(".column3_info span img:eq(1)").animate({opacity:"1"},500);
	$(".column3_info span").animate({width:"310px",height:"330px"},500);
},function(){
		$(".column3_info span img:eq(1)").animate({opacity:"0"},500);
	$(".column3_info span img:eq(0)").animate({opacity:"1"},500);
	$(".column3_info span").animate({width:"160px",height:"180px"},500);
});


//=========================== 热转印花脚本 


$(".type_a a").each(function(i){
	$(".type_a a:eq("+i+") span").css("backgroundImage","url(img/type_"+(i+1)+".png)");
	var typeX = $(".type_a a:eq("+i+") samp").width()-$(".type_a a:eq("+i+") span").width()+20;
    var typeY = $(".type_a a:eq("+i+") samp").height()-$(".type_a a:eq("+i+") span").height()+20;
	
	var reTime = 1;
	var startTime = Math.round(Math.random()*9+1);
setInterval(function(){
	startTime = Math.round(Math.random()*9+1);
	if(reTime>4){reTime = 1;}
	if(reTime == 1){
		$(".type_a a:eq("+i+") span").animate({left:typeX,top:"0"},1000);
	}
	else if(reTime == 2){
		$(".type_a a:eq("+i+") span").animate({left:"0",top:"0"},1000);
	}
	if(reTime == 3){
		$(".type_a a:eq("+i+") span").animate({left:"0",top:typeY},1000);
	}
	else if(reTime == 4){
		$(".type_a a:eq("+i+") span").animate({left:typeX,top:typeY},1000);
	}
	reTime++;
},startTime*1000+1000);

});
	

//=========================== 4个logo脚本 


$(".about_ctrl span").hover(function(){
	
	$(".about_ctrl span").stop().animate({width:"65px",marginRight:"10px"},300);
	$(this).stop().animate({width:"235px",marginRight:"10px"},300);		
	$(this).find("b").stop().animate({width:"199px"},300,function(){
		$(this).find("font").animate({opacity:"1"},300);
	});
		
	
},function(){
	
	$(".about_ctrl span").stop().animate({width:"65px",marginRight:"53px"},300);
    $(".about_ctrl span b").stop().animate({width:"30px"},300,function(){
    	 $(this).find("font").css("opacity","0");
    });
   
     
});





//=============================== 新放大镜


$(".display_window img:gt(0)").hide();
$(".display_window_mirror img:gt(0)").hide();
$(".display_window_mirror").hide();
$(".display_window_small a").each(function(i){
	
	$(".display_window_small a:eq("+i+")").click(function(){
		$(".display_window img").hide();
        $(".display_window_mirror img").hide();
		$(".display_window img:eq("+i+")").show();
		$(".display_window_mirror img:eq("+i+")").show();
	});
	
});

$(".display_window").hover(
					function() {
						$(".display_window_mirror").show();
						$(".display_window_mirror").stop().animate({
							opacity: "1"
						});
						var $m = $(".display_window").offset();
						$(".display_window").mousemove(function(e) {
							var wx = e.pageX - $m.left;
							var wy = e.pageY - $m.top;
							var mirrorImgWidth = $(".display_window_mirror img").width() - $(".display_window_mirror").width();
							var mirrorImgHeight = $(".display_window_mirror img").height() - $(".display_window_mirror").height();
							var eoX = wx / $(".display_window").width();
							var eoY = wy / $(".display_window").height();
							var mx = eoX * mirrorImgWidth;
							var my = eoY * mirrorImgHeight;
							$(".display_window_mirror img").css({
								top: -my,
								left: -mx
							});
						});
					},
					function() {
						$(".display_window_mirror").stop().animate({
							opacity: "0"
						},function(){$(".display_window_mirror").hide();});
					});

//=============================== 首页新放大镜

$(".column_main a").each(function(i){
	
$(".column_main a:eq("+i+") img").css({width:"auto",height:"auto"});
var natureW = $(".column_main a:eq("+i+") img").width();
var natureH = $(".column_main a:eq("+i+") img").height();
$(".column_main a:eq("+i+") img").css({width:"233px",height:"290px"});

$(".column_main a:eq("+i+")").hover(function(){
	$(".column_main a:eq("+i+") img").stop().css({width:natureW,height:natureH});
		var $m = $(".column_main a:eq("+i+")").offset();
						$(".column_main a:eq("+i+")").mousemove(function(e) {
							var wx = e.pageX - $m.left;
							var wy = e.pageY - $m.top;
							var mirrorImgWidth = natureW - 233;
							var mirrorImgHeight = natureH - 290;
							var eoX = wx / 233;
							var eoY = wy / 290;
							var mx = eoX * mirrorImgWidth;
							var my = eoY * mirrorImgHeight;
							$(".column_main a:eq("+i+") img").css({
								top: -my,
								left: -mx
							});
						});
		
	var $m = $(".column_main a:eq("+i+")").offset();
						$(".column_main a:eq("+i+")").mousemove(function(e) {
							var wx = e.pageX - $m.left;
							var wy = e.pageY - $m.top;
							var mirrorImgWidth = natureW - 233;
							var mirrorImgHeight = natureH - 290;
							var eoX = wx / 233;
							var eoY = wy / 290;
							var mx = eoX * mirrorImgWidth;
							var my = eoY * mirrorImgHeight;
							$(".column_main a:eq("+i+") img").css({
								top: -my,
								left: -mx
							});
						});

},function(){
     $(".column_main a:eq("+i+") img").stop().animate({width:"233px",height:"290px",top:0,left:0},300);
});	
	
	
	
});


/* ===========================  判断不存在图片时候 隐藏外框 */

$(".display_window_small a ").each(function(i){
	
var findSRC = $(".display_window_small a:eq("+i+") img ").attr("src");

if(findSRC.indexOf(".")==-1){
	$(".display_window_small a:eq("+i+")").hide();
}


});

/* =========================== 自动触发函数  */


function aa(){
	$(".arrow_r").trigger("click");
}
setInterval(aa,5000);

/* ======================= 企业定制修改 ====================   */
$(".custom_btn_zone a").hide();
$(".custom_btn_zone a:eq(0)").show();
$(".custom_nav a").each(function(i){
	$(".custom_nav a:eq("+i+")").click(function(){
		$(".custom_nav a").removeClass("custom_nav_now");
		$(".custom_1,.custom_2,.custom_3,.custom_4,.custom_5,.custom_btn_zone a").hide();
		$(".custom_"+(i+1)+"").show();
		$(".custom_btn_zone a:eq("+i+")").show();
	    $(this).addClass("custom_nav_now"); 
	});
});


$(".custom_btn_zone a:eq(0)").click(function(){
	$(".custom_nav a").removeClass("custom_nav_now");
	$(".custom_1,.custom_2,.custom_3,.custom_4,.custom_5,.custom_btn_zone a").hide();
	$(".custom_2").show();
	$(".custom_btn_zone a:eq(1)").show();
	$(".custom_nav a:eq(1)").addClass("custom_nav_now");
});
$(".custom_btn_zone a:eq(1)").click(function(){
	$(".custom_nav a").removeClass("custom_nav_now");
	$(".custom_1,.custom_2,.custom_3,.custom_4,.custom_5,.custom_btn_zone a").hide();
	$(".custom_3").show();
	$(".custom_btn_zone a:eq(2)").show();
	$(".custom_nav a:eq(2)").addClass("custom_nav_now");
});
$(".custom_btn_zone a:eq(2)").click(function(){
	$(".custom_nav a").removeClass("custom_nav_now");
	$(".custom_1,.custom_2,.custom_3,.custom_4,.custom_5,.custom_btn_zone a").hide();
	$(".custom_4").show();
	$(".custom_btn_zone a:eq(3)").show();
	$(".custom_nav a:eq(3)").addClass("custom_nav_now");
});



























});