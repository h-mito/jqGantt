$(function(){
	$("#project-1")
		.draggable({addClasses:false, axis: "x", containment:"#ganttMain", grid: [24,24] })
		.resizable({alsoResize: "#mirror" ,maxHeight: 16, minHeight: 16, minWidth: 24,
			stop: function(e, ui){
				var wid = Math.round(ui.size.width / 24) * 24;
				$(this).css("width", wid);
			}
	});

});

