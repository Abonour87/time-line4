$(function(){
	$(window).load(function(){
		// $("#pageloader").fadeOut("2000");
		$(".loader").delay("2000").fadeOut("1000");
		$("#pageloader").delay("2000").fadeOut("1000");
	})

	$('.carousel').carousel({
		interval: 2000
	  })
	// $('.carousel').carousel("pause")
	$(window).on("scroll",function(){
		$(".navbar").css(
			"background", "#333"
		)
		if($(window).scrollTop() == 0) {
			console.log($(window).scrollTop())
			$(".navbar").css(
				"background", "transparent"
			)
		}
	})

	$(".main-contents .carousel").carousel({
		interval: 2000,
		pause : "none"
	})

	// start section tab content playing
	
	$(".nav .unit").click(function(e){
		e.preventDefault();
		$(".nav .unit").removeClass("active");
		// $(this).addClass("active").parent("li").siblings().find("a").removeClass("active");
		$(".main-contents .tab-content").find($(this).data("toggle")).addClass("selected").siblings().removeClass("selected");
		// $(data("toggle")).css(
		// 	display,"block"
		// );
		})

	})
	// start clicking on li 
	// 
		// console.log($(this).data("filter"));
		// $(".work-grid").each('$(this).data("filter")').fadeIn()     
	// })

	


	$(function(){
		$(".our-work .controls button").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		})
		
	})
	// $(function(){
		$('.our-work .work-grid').mixItUp();
	// })
	
	// mix it up
// $(function(){
	
// })
		
		
	
	// var mixer = mixitup('.container');

	// start owl carousel
	$('.owl-one').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		autoplay:true,
		autoplayTimeout:2000,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})

	// start easypie chart
	$(document).scroll(function(){
		var sc=$(document).scrollTop();
		var ccha =$(".cha").offset().top;
		if(sc>=ccha){
			$( function() {
				$('.chart').easyPieChart({
					barColor:"#25d6eb",
					trackColor:"#fff",
					lineCap:"round",
					lineWidth:10,
					animate:3000,
					easing: 'easeOutBounce',
							
				});
			});
		}
	})


	// start testimonials
	$('.owl-two').owlCarousel({
		rtl:false,
		loop:true,
		autoplay:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
// start choose section
$(function(){
	$(".tabs1 .nav1 li a").click(function(e){
		e.preventDefault();
		$(this).addClass("active").parent("li").siblings().find("a").removeClass("active");
		$(".tab1-content").find($(this).data("targ")).addClass("selected").siblings().removeClass("selected");
	})
})
$(function(){
	$(".part2 .coll").click(function(){
	
	if($(this).next().hasClass("active")){
		$(this).next().removeClass("active").slideUp()
		$(this).find(".icon>i").removeClass("fa-minus").addClass("fa-plus")
	} else {
		$(this).next().addClass("active").slideDown();
		$(this).find(".icon>i").removeClass("fa-plus").addClass("fa-minus")
		$(".part2 .coll").next(".coll1").not($(this).next()).removeClass("active").slideUp();
		$(".part2 .coll").not($(this)).find(".icon>i").removeClass("fa-minus").addClass("fa-plus")
	}
	// $(this).find($(".icon i")).addClass("active")
	// $(".part2 .coll1").not($(this).next()).slideUp();
	// $(".part2 .coll1").not($(this).next()).previous(".coll").find(".icon i").removeClass("fa-minus");
	// $(".part2 .coll").not($(this)).addClass("fa-plus fa-minus")
	
	})
})

// start section clients#################################################################################
$('.owl-three').owlCarousel({
	rtl:false,
	loop:true,
	autoplay:true,
	margin:10,
	nav:false,
	responsive:{
		0:{
			items:3
		},
		600:{
			items:4
		},
		1000:{
			items:6
		}
	}
})

// section home height 
$("window").on("load",function(){
	$(".about").css({"Top":$(".home").css('height')});
	
})
// $(".home").css('height',$(window).height())
$(".home .item").css('height',$(".home").height());
$(".home .item img").css('height',$(".home").height());

$(function(){
	$(window).resize(function(){
		$(".home").css('height',$(window).height());
		$(".home .item").css('height',$(".home").height());
		$(".home .item img").css('height',$(".item").height());
		$(".about").css({"Top":$(".home").css('height')});
		// $(".home .carousel-caption").css({"paddingTop":($(".home").height() - $(".home .carousel-caption").height())/2});

	})
})
	// console.log($(window).innerHeight())
	// console.log($(".home").height())
	// $(".carousel .carsouel-caption").css({maringTop:($(".home").height()-$(".carousel .carousel-caption").height())/2});
	// $(".carousel .carsouel-caption").css({maringBottom:($(".home").height()-$(".carousel .carousel-caption").height())/2});
	// var ss=$(window).height()-$(".carousel .carousel-caption").height();
	// console.log(ss/2);

// start section slider
$(function(){
	slide= setInterval(rotateslider,3000);
	function rotateslider(){
		$(".slider-wrap").animate({marginLeft:"-100%"},1000).delay(4000);
		$(".slider-wrap").animate({marginLeft:"-200%"},1000).delay(4000);
		if($(this).css("marginLeft","-200%")){
			$(".slider-wrap").animate({marginLeft:"0"},1000).delay(4000);	
		}
		// 
		// $(".slider-wrap").animate({marginLeft:"0"},1000).delay(4000);
	}
	// $(".slider-contain .balls li").click(function(){
	// 	if($(this).is(".onee")){
	// 		// clearInterval(slide);
	// 		$(".slider-wrap").animate({marginLeft:"0"},1000);	
	// 	}
	// 	else if($(this).is(".twoo")){
	// 		// clearInterval(slide);
	// 		$(".slider-wrap").animate({marginLeft:"-1216px"},1000);	
	// 	}
	// 	else{
	// 		// clearInterval(slide);
	// 		$(".slider-wrap").animate({marginLeft:"-2432px"},1000);
	// 	}
	// })
	// rotateslider()
})
// fixed button display
// var scr=document.querySelector(".scrol")
$(window).scroll(function(){
	if ($(this).scrollTop() > 500){
		$(".scrol").addClass("sho");
	} else {
		$(".scrol").removeClass("sho")
	}
// console.log($(window).scrollTop());
})
// scrolling to the top page on clicking on the arrow
$(".scrol a").click(function(){
	$("html,body").animate({
		scrollTop:0
	},"2000")
})
// toggle class navbar in small screen to meduim screen
$(".navbar .togg-sm span").click(function(){
	$("header #main-menu .nav").slideToggle("slow")
})

// on click to the link navigate to its section
$("header #main-menu .nav > li").click(function(){
	$("html,body").animate({
		scrollTop : $($(this).data("target")).offset().top
	},"1500")
})

// scrolling top to zero
$(".scrol a").click(function(){
	$("html,body").animate({
		scrollTop : 0
	},"1500")
})