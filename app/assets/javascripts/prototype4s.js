var gantt; 
var grpMain, grpSub1, grpSub2;
var currObj = null;



$(function(){

	if (location.href.indexOf("prototype4s/test") < 0){
		return;
	}


    function formatDate(rcvDt){
        var y = rcvDt.getFullYear();
        var m = rcvDt.getMonth() + 1;
        var d = rcvDt.getDate();

        var ys = y;
        var ms = m;
        if (m < 10){
            ms = "0" + m;
        }
        var ds = d;
        if (d < 10){
            ds = "0" + d;
        }

        return ys + "/" + ms + "/" + ds;
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
			currObj = ctltag;
			$("#dialog-form #taskid").text(ctltag.getId());
			$("#dialog-form #name").val(ctltag.getName());
			$("#dialog-form #startDate").text(formatDate(ctltag.getStartDate()));
			$("#dialog-form #days").text(ctltag.getDays());

			$("#dialog-form label[for='percent']").text("進捗(" + ctltag.getPercent() + ")");
			$("#dialog-form #percent").slider("value", ctltag.getPercent());

			dlg.dialog( "open" );
		}
	});
	//$("#ganttDiv").jqGantt({startDate: new Date(2014,8-1, 5), months: 3});
	//$("#ganttDiv").jqGantt({startDate: new Date(2014,7-1, 31), months: 3});

	//gantt.hello("karin");

	grpMain = gantt.addGroup("メイン")
	grpSub1 = gantt.addGroup("サブ１")
	grpSub2 = gantt.addGroup("サブ２")


	var prj = gantt.addProject(grpMain.getId(), "test", new Date(2014, 8-1, 10), 5);

	gantt.addTask(prj.getId(),"child1", new Date(2014, 8-1, 10), 2, 100);
	gantt.addTask(prj.getId(),"child2", new Date(2014, 8-1, 11), 1, 60);
	gantt.addTask(prj.getId(),"child3", new Date(2014, 8-1, 12), 2, 0);

	var prj2 = gantt.addProject(grpSub1.getId(), "test", new Date(2014, 8-1, 16), 5);

	gantt.addTask(prj2.getId(),"child1", new Date(2014, 8-1, 16), 2, 100);
	gantt.addTask(prj2.getId(),"child2", new Date(2014, 8-1, 17), 1, 100);
	gantt.addTask(prj2.getId(),"child3", new Date(2014, 8-1, 18), 2, 100);


	var prj3 = gantt.addProject(grpSub1.getId(), "test", new Date(2014, 8-1, 22), 5);

	gantt.addTask(prj3.getId(),"child1", new Date(2014, 8-1, 22), 2, 50);
	gantt.addTask(prj3.getId(),"child2", new Date(2014, 8-1, 23), 1, 50);
	gantt.addTask(prj3.getId(),"child3", new Date(2014, 8-1, 23), 2, 0);

	var prj4 = gantt.addProject(grpSub2.getId(), "test", new Date(2014, 8-1, 20), 5);

	gantt.addTask(prj4.getId(),"child1", new Date(2014, 8-1, 20), 2, 0 );
	gantt.addTask(prj4.getId(),"child2", new Date(2014, 8-1, 21), 1, 0);


	var prj5 = gantt.addProject(grpSub2.getId(), "test", new Date(2014, 8-1, 25), 8);

	gantt.addTask(prj5.getId(),"child1", new Date(2014, 8-1, 25), 2, 0);
	gantt.addTask(prj5.getId(),"child2", new Date(2014, 8-1, 26), 1, 0);
	gantt.addTask(prj5.getId(),"child3", new Date(2014, 8-1, 27), 2, 0);
	gantt.addTask(prj5.getId(),"child4", new Date(2014, 8-1, 28), 1, 0);
	gantt.addTask(prj5.getId(),"child5", new Date(2014, 8-1, 29), 2, 0);
	gantt.addTask(prj5.getId(),"child6", new Date(2014, 8-1, 31), 2, 0);

	gantt.redraw();



 	var dlg = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 300,
      width: 400,
      modal: true,
      buttons: {
        "O K ": changeTask,
        Cancel: function() {
    		dlg.dialog("close");
        }
      },
      close: function() {
        form[ 0 ].reset();
        //allFields.removeClass( "ui-state-error" );
      }
    });
 
    form = dlg.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      changeTask();
    });
 

    function changeTask(){
    		var tid = currObj.getId();
    		var pid = currObj.getParent().getId();

    		currObj.setName($("#dialog-form #name").val());
    		currObj.setPercent($("#dialog-form #percent").slider("value"));

    		gantt.redraw();
    		
    		dlg.dialog("close");
    }

    $("#percent").slider({step:10,
    		change: function(){
    			$("#dialog-form label[for='percent']").text("進捗(" + $("#percent").slider("value") + ")");
    		}
    	});

});

