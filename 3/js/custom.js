$(document).ready(function() {

// initial fade effect for the entire screen
	var $content = $('#wrapper');
	$content.css('opacity',0);
	$('#progress').fadeOut(500, function() {
		$content.animate({'opacity':1}, 500);
	});


// cowntdown function. Set the date by modifying the date in next line (June 1, 2012 00:00:00):
/*	var austDay = new Date("June 1, 2020 00:00:00");
		$('#countdown').countdown({until: austDay, layout: '<div class="item"><p>{dn}</p> {dl}<div class="lines"></div></div> <div class="item"><p>{hn}</p> {hl}<div class="lines"></div></div> <div class="item"><p>{mn}</p> {ml}<div class="lines"></div></div> <div class="item"><p>{sn}</p> {sl}</div>'});
		$('#year').text(austDay.getFullYear());
			
*/
	var austDay = new Date("June 1, 2020 00:00:00");
		$('#countdown').countdown({until: austDay, layout: '<div class="item"><p><a class="facebook" href="#"><img src="images/social/facebook.png" alt="" /></a></p><div class="lines"></div></div> <div class="item"><p><a class="google" href="#"><img src="images/social/google.png" alt="" /></a></p><div class="lines"></div></div> <div class="item"><p><a class="flickr" href="#"><img src="images/social/flickr.png" alt="" /></a></p><div class="lines"></div></div>'});
		$('#year').text(austDay.getFullYear());

// toggle function
	$('a.trigger').click(function(){
		if( ! $(this).hasClass('active')){
			$("#totoggle").slideToggle("slow");
			$(this).addClass('active');
			$('#container').append('<div class="text">Welcome to Ge, Haowu s Homepage!</div>').show('slow');
		} else {
		$("#totoggle").slideToggle("slow");
			$(this).removeClass('active');
			$('.text').remove();
		}
	});	
				
			
// hover effects for the functionality buttons inside the box 			
	$("ul.buttons li, ul.top-buttons li").hover(function() {
		$(this).children('a').animate({opacity:"1"},{queue:false,duration:300}) },
		function() {
			$(this).children('a').animate({opacity:"0.5"},{queue:false,duration:300})
			});			

			
// draggable function
	$( "#container" ).draggable({ handle: ".drag", containment: "#supersized", scroll: false });			


//functions for the info, contact and back home buttons

// from home to info
	function infopage() {
		if  ($("#infopage").is(":hidden")) {
			
				$("a.info").css({"background":"url(images/home.png) no-repeat scroll 0 0"});
				$("a.contact").css({"background":"url(images/home.png) no-repeat scroll 0 0"});
				$("#homepage").animate({height: "toggle", opacity: "toggle"}, "slow" );
				$("#infopage").animate({height: "toggle", opacity: "toggle"}, "slow" );
			}
			else {
				$("a.info").css({"background":"url(images/info.png) no-repeat scroll 0 0"});
				$("a.contact").css({"background":"url(images/contact.png) no-repeat scroll 0 0"});
				$("#infopage").animate({height: "toggle", opacity: "toggle"}, "slow" );
				$("#homepage").animate({height: "toggle", opacity: "toggle"}, "slow" );
			}
		}
		
//run from home to info
	$(".info").click(function(){infopage()});


// from home to contact
	function contactpage() {
		if ($("#contactpage").is(":hidden"))
		{
			$("a.contact").css({"background":"url(images/home.png) no-repeat scroll 0 0"});
			$("a.info").css({"background":"url(images/home.png) no-repeat scroll 0 0"});
			$("#homepage").animate({height: "toggle", opacity: "toggle"}, "slow" );
			$("#contactpage").animate({height: "toggle", opacity: "toggle"}, "slow" );
		}
		else{
			$("a.contact").css({"background":"url(images/contact.png) no-repeat scroll 0 0"});
			$("a.info").css({"background":"url(images/info.png) no-repeat scroll 0 0"});
			$("#contactpage").animate({height: "toggle", opacity: "toggle"}, "slow" );
			$("#homepage").animate({height: "toggle", opacity: "toggle"}, "slow" );
		}
	}

//run from home to contact
	$(".contact").click(function(){contactpage()});	


//from info to contact
	function infocontact() {
		if ($("#contactpage").is(":hidden"))
		{
			$("a.contact").css({"background":"url(images/home.png) no-repeat scroll 0 0"});
			$("#infopage").animate({height: "toggle", opacity: "toggle"}, "slow" );
			$("#contactpage").animate({height: "toggle", opacity: "toggle"}, "slow" );
		}
		else{
			$("a.contact").css({"background":"url(images/contact.png) no-repeat scroll 0 0"});
			$("#contactpage").animate({height: "toggle", opacity: "toggle"}, "slow" );
			$("#infopage").animate({height: "toggle", opacity: "toggle"}, "slow" );
		}
	}
	
// run from info to contact
	$(".infocontact").click(function(){infocontact()});	


// from contact to info
	function contactinfo() {
		if ($("#infopage").is(":hidden"))
		{
			$("#contactpage").animate({height: "toggle", opacity: "toggle"}, "slow" );
			$("#infopage").animate({height: "toggle", opacity: "toggle"}, "slow" );
		}
		else{
			$("#infopage").animate({height: "toggle", opacity: "toggle"}, "slow" );
			$("#contactpage").animate({height: "toggle", opacity: "toggle"}, "slow" );
		}
	}
	
// run from contact to info
	$(".contactinfo").click(function(){contactinfo()});	

});	


// full screen slider	
$(document).ready( function(){
	
	$.supersized({
	
		// Functionality
		slide_interval          :   8000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	1000,		// Speed of transition
												   
		// Components							
		slide_links				:	'false',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides 					:  	[			// Slideshow Images
											{image : 'images/gallery/slide1.jpg', thumb : 'images/gallery/thumb1.jpg', url : ''},
											{image : 'images/gallery/slide2.jpg', thumb : 'images/gallery/thumb2.jpg', url : ''},
											{image : 'images/gallery/slide3.jpg', thumb : 'images/gallery/thumb3.jpg', url : ''},
											{image : 'images/gallery/slide4.jpg', thumb : 'images/gallery/thumb4.jpg', url : ''},
											{image : 'images/gallery/slide5.jpg', thumb : 'images/gallery/thumb5.jpg', url : ''}	
									]
	});
});
