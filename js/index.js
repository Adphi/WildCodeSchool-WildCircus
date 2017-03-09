$(document).ready(function() {
	// Menu Alpha Change
	$(window).bind('scroll', function() {
		var menu = $('#menu');
		if ($(window).scrollTop() > 50) {
			menu.css("background", "rgba(0,0,0,0.95)");
			menu.css("border-bottom", "1px solid rgba(255,255,255,0.2)");
		} else{
			menu.css("background", "rgba(0,0,0,0.1)");
			menu.css("border-bottom", "1px solid rgba(255,255,255,0)");
		}
	}
);

// Smooth Scroll
$(document).on("scroll", onScroll);

$('.link').on('click', function() {
	var page = $(this).attr('href');
	var speed = 750;
	$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
	});
});

// Section Indicator
function onScroll(event){
	var scrollPos = $(document).scrollTop();
	var link = $('.link');
	link.each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			link.removeClass("active");
			currLink.addClass("active");
		}
		else{
			currLink.removeClass("active");
		}
	});
};

// Youtube Mute Loop Background
var player;
var start_time = 10;
var loop_length = 13500;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('background-looping-video', {
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
};

function onPlayerReady(event) {
	loopStart();
	player.playVideo();
	event.target.mute();
};

function loopStart() {
	player.seekTo(start_time);
};

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING) {
		setTimeout(loopStart, loop_length);
	}
};