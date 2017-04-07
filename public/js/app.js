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
	
	if ($(window).width() < 1000) {
		alert('hey');
//   $('.team-box').click(function() {
//		 $('.member-details').css('opacity', '1');
//	 });
	}

});

	

