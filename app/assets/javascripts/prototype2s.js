var gantt; 
var grpMain, grpSub1, grpSub2;


$(function(){
	gantt = $("#ganttDiv").jqGantt({startDate: new Date(2014,8-1, 5), months: 3});
	//$("#ganttDiv").jqGantt({startDate: new Date(2014,8-1, 5), months: 3});
	//$("#ganttDiv").jqGantt({startDate: new Date(2014,7-1, 31), months: 3});

	//gantt.hello("karin");

	grpMain = gantt.addGroup("メイン")
	grpSub1 = gantt.addGroup("サブ１")
	grpSub2 = gantt.addGroup("サブ２")


	var prj = gantt.addProject(grpMain.getId(), "test", new Date(2014, 8-1, 10), 5);

	gantt.addTask(prj.getId(),"child1", new Date(2014, 8-1, 10), 2);
	gantt.addTask(prj.getId(),"child2", new Date(2014, 8-1, 11), 1);
	gantt.addTask(prj.getId(),"child3", new Date(2014, 8-1, 12), 2);

	gantt.redraw();

});

