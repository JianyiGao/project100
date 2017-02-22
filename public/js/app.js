(function() {

  angular.module('Project100', []);

}());


/* SHOW/HIDE TAGS*/
$(document).ready(function(){
	$('#accounts').click(function() {
    $(".account-tags").toggle(this.checked);
	});

	$('#research').click(function() {
    $(".research-tags").toggle(this.checked);
	});

	$('#creative').click(function() {
    $(".creative-tags").toggle(this.checked);
	});

	$('#digital').click(function() {
    $(".digital-tags").toggle(this.checked);
	});

	$('#media').click(function() {
    $(".media-tags").toggle(this.checked);
	});

	$('#admin').click(function() {
    $(".admin-tags").toggle(this.checked);
	});
});
