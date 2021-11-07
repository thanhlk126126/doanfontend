// Job
var Job=function(){
	$('.job').click(function(){
		$(this).parent('.toggle-post').children('.info').slideToggle( "slow", function() {
		    $(this).parent().children('.job').children('i').toggleClass('fa-minus').toggleClass('fa-plus');
		});
	});
		
};
// Backtotop
var Backtotop = function(){
	$('.back-to-top').click(function(){
		$("html, body").animate({scrollTop: 0}, 500);
	});
};


$(function(){
	Job();
	Backtotop();
});