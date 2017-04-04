(function() {

  angular.module('Project100', []);

}());


/* SHOW/HIDE TAGS*/
$(document).ready(function(){
	
	$('#accounts').click(function() {
    $(".account-tags").fadeToggle(this.checked);
	});

	$('#research').click(function() {
    $(".research-tags").fadeToggle(this.checked);
	});

	$('#creative').click(function() {
    $(".creative-tags").fadeToggle(this.checked);
	});

	$('#digital').click(function() {
    $(".digital-tags").fadeToggle(this.checked);
	});

	$('#media').click(function() {
    $(".media-tags").fadeToggle(this.checked);
	});


});

	//Make height change more smooth
	var boxHeight = $('filter').innerHeight();  // get element height

	$('.card-view').css({top:boxHeight}); // push 'curtain' down

	$('#filter').hover(function(){
		$(this).find('.card-view').stop().animate({top: 0});  // animate to desired top distance
	},function(){
		$(this).find('.card-view').stop().animate({top: boxHeight}); // and on mouseout - back down
	});

