

$(function(){

	if (location.href.indexOf("prototype3s/test") < 0){
		return;
	}

	$("#ganttPanel").scroll(function (ev){

		$("#ganttDay").scrollLeft($(this).scrollLeft());

		$("#ganttTasksParent").scrollTop($(this).scrollTop());
	});

	

});

