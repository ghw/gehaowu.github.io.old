$(function() {
	var forest = document.getElementById("forest");
	var dusk = document.getElementById("dusk");
	var water = document.getElementById("water");
	var storm = document.getElementById("storm");
	var playing = "";
	var muted = false;
	
	
	$('#mute').on('click', function(e) {
      $('.icon').toggleClass("off"); 
      e.preventDefault();
    });
	
	$("#mute").click(function() {
		if(!muted) {
			forest.volume = 0;
			dusk.volume = 0;
			water.volume = 0;
			storm.volume = 0;
			muted = true;
		} else {
			forest.volume = 1;
			dusk.volume = 1;
			water.volume = 1;
			storm.volume = 1;
			muted = false;
		}
	});
	
	$('.sound').click(function() {
        switch($(this).find("audio").prop("id")) {
			case "forest":
				if(playing == "forest") {
					fade(forest);
					return;
				}
				$('#panda').fadeTo('slow', 0.1, function() {
					$(this).css('background-image', 'url(images/forest.jpg)');
				}).fadeTo('slow', 1.4);
				playing = "forest";
				fade(forest);
				break;
			case "dusk":
				if(playing == "dusk") {
					fade(dusk);
					return;
				}
				$('#panda').fadeTo('slow', 0.1, function() {
					$(this).css('background-image', 'url(images/dusk.jpg)');
				}).fadeTo('slow', 1.4);
				playing = "dusk";
				fade(dusk);
				break;
			case "water":
				if(playing == "water") {
					fade(water);
					return;
				}
				$('#panda').fadeTo('slow', 0.1, function() {
					$(this).css('background-image', 'url(images/water.jpg)');
				}).fadeTo('slow', 1.4);
				playing = "water";
				fade(water);
				break;
			case "storm":
				if(playing == "storm") {
					fade(storm);
					return;
				}
				$('#panda').fadeTo('slow', 0.1, function() {
					$(this).css('background-image', 'url(images/rain.jpg)');
				}).fadeTo('slow', 1.4);
				playing = "storm";
				fade(storm);
				break;
		}
		console.log(playing);
    });
	
	$(".sound").first().find("a").click();
	
	function fadeOut(element) {
		$(element).animate({
			"volume": "0"
		}, 1000, function() {
			element.pause();
		});
	}
	
	function fade(element) {
		if(!forest.paused) fadeOut(forest);
		if(!storm.paused) fadeOut(storm);
		if(!dusk.paused) fadeOut(dusk);
		if(!water.paused) fadeOut(water);
		
		if(element.paused) {
			element.volume = 0;
			element.play();
			$(element).animate({
				"volume": "1"
			}, 1000);
        } else {
	        fadeOut(element);
        }
	}
	
	$(".sound").click(function(e) {
        if( $(this).hasClass("active") ) {
            $(this).removeClass("active").addClass("avail");
        } else {
            // if other menus are open remove open class and add closed
            $(this).siblings().removeClass("active").addClass("avail"); 
            $(this).removeClass("avail").addClass("active");
        }
	});
	
	$("body").queryLoader2({
		minimumTime: 2000,
		barColor:'#fff',
		barHeight: 0,
		percentage: true
	});
	
	$('#panda').delay(1500).fadeIn(2000);
	$('#intro').delay(2000).fadeIn(2000).delay(3000).fadeOut(2000);
	$('#nature').delay(8000).fadeIn(2000);
	
    $.get();
});


    




    
    