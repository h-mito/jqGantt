var gantt; 
var grpMain, grpSub1, grpSub2;



$(function(){

	if (location.href.indexOf("prototype2s/test") < 0){
		return;
	}


	gantt = $("#ganttDiv").jqGantt({startDate: new Date(2014,8-1, 1), months: 2,
		evProjectChanged: function(ctltag){
			//alert("Project Changed / ID= " + ctltag.getId() + " StartDate=" + ctltag.getStartDate());
		},
		evTaskChanged: function(ctltag){
			//alert("Task Changed / ID= " + ctltag.getId() + " StartDate=" + ctltag.getStartDate());
		},
		evProjectClick: function(ctltag){
			//alert("Project + id=" + ctltag.getId() + " / name = " + ctltag.getName());
		},
		evTaskClick: function(ctltag){
			//alert("Task + id=" + ctltag.getId() + " / name = " + ctltag.getName());
		}
	});
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

	var prj2 = gantt.addProject(grpSub1.getId(), "test", new Date(2014, 8-1, 16), 5);

	gantt.addTask(prj2.getId(),"child1", new Date(2014, 8-1, 16), 2);
	gantt.addTask(prj2.getId(),"child2", new Date(2014, 8-1, 17), 1);
	gantt.addTask(prj2.getId(),"child3", new Date(2014, 8-1, 18), 2);


	var prj3 = gantt.addProject(grpSub1.getId(), "test", new Date(2014, 8-1, 22), 5);

	gantt.addTask(prj3.getId(),"child1", new Date(2014, 8-1, 22), 2);
	gantt.addTask(prj3.getId(),"child2", new Date(2014, 8-1, 23), 1);
	gantt.addTask(prj3.getId(),"child3", new Date(2014, 8-1, 23), 2);

	var prj4 = gantt.addProject(grpSub2.getId(), "test", new Date(2014, 8-1, 20), 5);

	gantt.addTask(prj4.getId(),"child1", new Date(2014, 8-1, 20), 2);
	gantt.addTask(prj4.getId(),"child2", new Date(2014, 8-1, 21), 1);


	var prj5 = gantt.addProject(grpSub2.getId(), "test", new Date(2014, 8-1, 25), 8);

	gantt.addTask(prj5.getId(),"child1", new Date(2014, 8-1, 25), 2);
	gantt.addTask(prj5.getId(),"child2", new Date(2014, 8-1, 26), 1);
	gantt.addTask(prj5.getId(),"child3", new Date(2014, 8-1, 27), 2);
	gantt.addTask(prj5.getId(),"child4", new Date(2014, 8-1, 28), 1);
	gantt.addTask(prj5.getId(),"child5", new Date(2014, 8-1, 29), 2);
	gantt.addTask(prj5.getId(),"child6", new Date(2014, 8-1, 31), 2);

	gantt.redraw();



});

