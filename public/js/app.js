(function() {

  angular.module('Project100', []);

}());


/* SHOW/HIDE TAGS*/
$(document).ready(function(){
	$("#accounts").click(function(){
    $("account-tags").show();
	});
	
	$("#research").click(function(){
    $("p").show();
	});
	
	$("#creative").click(function(){
    $("p").show();
	});
	
	$("#digital").click(function(){
    $("p").show();
	});
	
	$("#media").click(function(){
    $("p").show();
	});
});