/*
Reserved element IDs

id = ganttCorner
id = ganttDay
id = ganttTasks
id = ganttMain
GANTT_DAY_WIDTH = 24
GANTT_BACK_DAYS = 2
GANTT_TASKS_WIDTH = 200

GANTT_PROJECT_COLOR = "#f1c67a"
*/

GANTT_DAY_WIDTH = 24;
GANTT_BACK_DAYS = 2;
GANTT_TASKS_WIDTH = 200;
GANTT_DAY_MILSEC = 86400000; 


GANTT_GROUP_COLOR = "#f1c67a"
GANTT_PROJECT_COLOR = "#9d8064"
GANTT_TASK_COLOR = "#ea95ad"
GANTT_NOT_COLOR = "#ffffff"



var ganttGroup = function(options){
    var defaults = {
        id: -1,
        name: "",
        percent: 0,
        tag: null,
        projects: []
    };
    var settings = $.extend(defaults, options);

    var getId = function(){
        return settings.id;
    }

    var setId = function(id){
        settings.id = id;
    }

    var getName = function(){
        return settings.name;
    }

    var setName = function(name){
        settings.name = name;
    }

    var getPercent = function(){
        return settings.percent;
    }

    var setPercent = function(per){
        settings.percent = per;
    }

    var getTag = function(){
        return settings.tag;
    }

    var setTag = function(tag){
        settings.tag = tag;
    }


    var addProject = function(prj){
        settings.projects.push(prj);
    }

    var removeProject = function(pid){
        for (var i = 0 ; i < settings.projects.length ; i++){
            if (settings.projects[i].getId() == pid){
                settings.projects.splice(i);
                break;
            }
        }
    }

    var getProject = function(pid){
        for (var i = 0 ; i < settings.projects.length ; i++){
            if (settings.projects[i].getId() == pid){
                return settings.projects[i];
            }
        }
        return null;
    }

    var recalcPercent = function(){
        var sumDays = 0 , sumDays2 = 0;

        for (var i = 0 ; i < settings.projects.length ; i++){
            sumDays += settings.projects[i].getDays();
            sumDays2 += settings.projects[i].getDays() * (settings.projects[i].getPercent() / 100);
        }

        setPercent(sumDays2 * 100 / sumDays);
    }


    var globals = {
        getId : function(){
            return getId();
        },
        setId : function(id){
            setId(id);
        },
        getName : function(){
            return getName();
        },
        setName : function(name){
            return setName(name);
        },
        getPercent : function(){
            return getPercent();
        },
        setPercent : function(per){
            setPercent(per);
        },
        getTag : function(){
            return getTag();
        },
        setTag : function(tag){
            setTag(tag);
        },                        
        addProject : function(prj){
            addProject(prj);
        },
        removeProject: function(pid){
            removeProject(pid);
        },
        getProject: function(pid){
            return getProject(pid);
        },
        getProjects : function(){
            return settings.projects;
        },
        recalcPercent: function(){
            recalcPercent();
        }

    }

    return globals;
}


var ganttProject = function(options){
    var defaults = {
        id: -1 ,
        groupId: -1 ,
        parent: null,
        percent: 0,
        name: "",
        startDate: new Date(),
        days: 1,
        expand: true, 
        percent: 0,
        tag: null,
        tasks: []
    };


    var settings = $.extend(defaults, options);

    var getId = function(){
        return settings.id;
    }

    var setId = function(id){
        settings.id = id;
    }

    var getGroupId = function(){
        return settings.groupId;
    }

    var setGroupId = function(gid){
        settings.groupId = gid;
    }

    var getParent = function(){
        return settings.parent;
    }

    var setParent = function(grp){
        settings.parent = grp;
    }

    var getPercent = function(){
        return settings.percent;
    }

    var setPercent = function(per){
        settings.percent = per;
    }

    var getName = function(){
        return settings.name;
    }

    var setName = function(name){
        settings.name = name;
    }

    var getStartDate = function(){
        return settings.startDate;
    }

    var setStartDate = function(date){
        settings.startDate = date;
    }

    var getDays = function(){
        return settings.days;
    }

    var setDays = function(days){
        settings.days = days;
    }

    var getExpand = function(){
        return settings.expand;
    }

    var setExpand = function(expand){
        settings.expand = expand;
    }

    var getPercent = function(){
        return settings.percent;
    }

    var setPercent = function(per){
        settings.percent = per;
    }

    var getTag = function(){
        return settings.tag;
    }

    var setTag = function(tag){
        settings.tag = tag;
    }

    var addTask = function(task){
        settings.tasks.push(task);
    }

    var removeTask = function(tid){
        for (var i = 0 ; i < settings.tasks.length ; i++){
            if (settings.tasks[i].getId() == tid){
                settings.tasks.splice(i);
                break;
            }
        }
    }

    var getTask = function(tid){
        for (var i = 0 ; i < settings.tasks.length ; i++){
            if (settings.tasks[i].getId() == tid){
                return settings.tasks[i];
            }
        }
        return null;
    }

    var recalcPercent = function(){
        var sumDays = 0 , sumDays2 = 0;

        for (var i = 0 ; i < settings.tasks.length ; i++){
            sumDays += settings.tasks[i].getDays();
            sumDays2 += settings.tasks[i].getDays() * (settings.tasks[i].getPercent() / 100);
        }

        setPercent(sumDays2 * 100 / sumDays);

        settings.parent.recalcPercent();
    }


    var globals = {
        getId : function(){
            return getId();
        },
        setId : function(id){
            setId(id);
        },
        getGroupId : function(){
            return getGroupId();
        },
        setGroupId : function(gid){
            setGroupId(gid);
        },
        getParent : function(){
            return getParent();
        },
        setParent : function(pt){
            setParent(pt);
        },
        getPercent : function(){
            return getPercent();
        },
        setPercent : function(per){
            setPercent(per);
        },
        getName : function(){
            return getName();
        },
        setName : function(name){
            setName(name);
        },
        getStartDate : function(){
            return getStartDate();
        },
        setStartDate : function(date){
            setStartDate(date);
        },
        getDays : function(){
            return getDays();
        },
        setDays : function(days){
            setDays(days);
        },                        
        getExpand : function(){
            return getExpand();
        },
        setExpand : function(expand){
            setExpand(expand);
        },                        
        getPercent : function(){
            return getPercent();
        },
        setPercent : function(per){
            setPercent(per);
        },
        getTag : function(){
            return getTag();
        },
        setTag : function(tag){
            setTag(tag);
        },                        
        addTask : function(task){
            addTask(task);
        },
        removeTask: function(tid){
            removeTask(tid);
        },
        getTask: function(tid){
            return getTask(tid);
        },
        getTasks : function(){
            return settings.tasks;
        },
        recalcPercent : function(){
            recalcPercent();
        }

    }

    return globals;

}


var ganttTask = function(options){
    var defaults = {
        id: -1 ,
        projectId: -1 ,
        name: "",
        startDate: new Date(),
        days: 1,
        percent: 0,
        tag: null
    };


    var settings = $.extend(defaults, options);

    var getId = function(){
        return settings.id;
    }

    var setId = function(id){
        settings.id = id;
    }

    var getProjectId = function(){
        return settings.projectId;
    }

    var setProjectId = function(pid){
        settings.projectId = pid;
    }

    var getParent = function(){
        return settings.parent;
    }

    var setParent = function(prj){
        settings.parent = prj;
    }

    var getName = function(){
        return settings.name;
    }

    var setName = function(name){
        settings.name = name;
    }

    var getStartDate = function(){
        return settings.startDate;
    }

    var setStartDate = function(date){
        settings.startDate = date;
    }

    var getDays = function(){
        return settings.days;
    }

    var setDays = function(days){
        settings.days = days;
    }

    var getPercent = function(){
        return settings.percent;
    }

    var setPercent = function(per){
        settings.percent = per;
        settings.parent.recalcPercent();
    }

    var getTag = function(){
        return settings.tag;
    }

    var setTag = function(tag){
        settings.tag = tag;
    }


    var globals = {
        getId : function(){
            return getId();
        },
        setId : function(id){
            setId(id);
        },
        getProjectId : function(){
            return getProjectId();
        },
        setProjectId : function(gid){
            setProjectId(gid);
        },
        getParent : function(){
            return getParent();
        },
        setParent : function(prj){
            setParent(prj);
        },
        getPercent : function(){
            return getPercent();
        },
        setPercent : function(per){
            setPercent(per);
        },
        getName : function(){
            return getName();
        },
        setName : function(name){
             setName(name);
        },
        getStartDate : function(){
            return getStartDate();
        },
        setStartDate : function(date){
            setStartDate(date);
        },
        getDays : function(){
            return getDays();
        },
        setDays : function(days){
             setDays(days);
        },                        
        getTag : function(){
            return getTag();
        },
        setTag : function(tag){
             setTag(tag);
        },                        

    }

    return globals;

}


    jQuery.fn.jqGantt = function(options){
        var target  = this;

        var defaults = {
            startDate : new Date,
            months: 2,
            lines: 20,
            groups: [],
            maxGid: 0,
            maxPid: 0,
            maxTid: 0,
            evGroupChanged: null,
            evProjectChanged: null,
            evTaskChanged: null,
            evGroupClick: null,
            evProjectClick: null,
            evTaskClick: null

        };
        var settings = $.extend(defaults, options);
 

        var hello = function(name){
            alert ("hello " + name + " startDate=" + settings.startDate);
        };

        var addGroup = function(name, tag){
            var gid = settings.maxGid + 1;
            settings.maxGid += 1;

            var grp = ganttGroup({id: gid, name: name, tag: tag} );
            settings.groups.push(grp);

            return grp;
        };

        var removeGroup = function(gid){
            for (var i = 0 ; i < settings.groups.length ; i++){
                if (settings.groups[i].getId() == gid){
                    settings.groups.splice(i, 1)
                    break;
                }
            }

        };

        var getGroups = function(){
            return settings.groups;
        };

        var getGroup = function(gid){
            for (var i = 0 ; i < settings.groups.length ; i++){
                if (settings.groups[i].getId() == gid){
                    return settings.groups[i];
                }
            }
            return null;
        };

        var addProject = function(gid, name, startDate, days, tag){
            var pid = settings.maxPid + 1;
            settings.maxPid += 1;

            var prj = ganttProject({groupId: gid, id: pid, name: name, startDate: startDate, days: days, tag: tag});
            
            var grp = getGroup(gid);

            grp.addProject(prj);

            prj.setParent(grp);

            return prj;
        };

        var removeProject = function(gid, pid){
            var grp = getGroup(gid);

            grp.removeProject(pid);
        };

        var getProject = function(gid, pid){
            var grp = getGroup(gid);

            return grp.getProject(pid);

        };

        var getProject2 = function(pid){

            for (var i = 0 ; i < settings.groups.length ; i++){

                var grp = settings.groups[i];
                var prj = grp.getProject(pid);

                if (prj != null){
                    return prj;
                }
            }

            return null;
        };

        function getProjInfo(grp){
            var rtn = [];
            var minDt = null, maxTime = null;

            for (var i = 0 ; i < grp.getProjects().length ; i++){
                var prj = grp.getProjects()[i];
                if (minDt == null || prj.getStartDate() < minDt){
                    minDt = prj.getStartDate();
                }

                var wkT = prj.getStartDate().getTime() + (prj.getDays() * GANTT_DAY_MILSEC);
                if (maxTime == null || maxTime < wkT){
                    maxTime = wkT;
                }
            }

            rtn[0] = minDt;

            if (minDt != null){
                var sa = (maxTime - minDt.getTime()) /GANTT_DAY_MILSEC;
                rtn[1] = sa;
            }

            return rtn;

        }


        var addTask = function(pid, name, startDate, days, percent, tag){
            var tid = settings.maxTid + 1;
            settings.maxTid += 1;

            var task = ganttTask({projectId: pid, id: tid, name: name, startDate: startDate, days: days, percent: percent, tag: tag});
            
            var prj = getProject2(pid);

            prj.addTask(task);

            task.setParent(prj);

            return task;
        };

        var removeTask = function(pid, tid){
            var prj = getProject2(pid);

            prj.removeTask(tid);
        };

        var getTask = function(pid, tid){
            var prj = getProject2(pid);

            return prj.getTask(tid);

        };



        function clsAll(){
            for (var i = 1; i <= settings.maxGid; i++){
                $("#ganttGroup-" + i).remove();
                $("#ganttLabel-Group-" + i).remove();
            }
            for (var i = 1; i <= settings.maxPid; i++){
                $("#ganttProject-" + i).remove();
                $("#ganttProjectSet-" + i).remove();
                $("#ganttLabel-Project-" + i).remove();
                $("#ganttProject-Label-" + i).remove();
            }
            for (var i = 1; i <= settings.maxTid; i++){
                $("#ganttTask-" + i).remove();
                $("#ganttLabel-Task-" + i).remove();
                $("#ganttTask-Label-" + i).remove();
            }

            $("#ganttTasks").children().remove();
        }

        function redrawCaption($elem, obj){
            var txt = "【ID】" + obj.getId() + " " + obj.getName()
                + " 【開始】 " + formatDate(obj.getStartDate())
                + " 【日数】 " + obj.getDays();
                $elem.text(txt);
        }

        function recalcAll(){
            for (var i = 0 ; i < settings.groups.length ; i++){
                var grp = settings.groups[i];
                for (var j = 0; j < grp.getProjects().length ; j++){
                    var prj = grp.getProjects()[j];
                    prj.recalcPercent();
                }
            }            
        }

        var redraw = function(){
            var wkTop = 0;
            clsAll();
            recalcAll();

            for (var i = 0 ; i < settings.groups.length ; i++){
                //=== Group
                var grp = settings.groups[i];

                var info = getProjInfo(grp);

                if (info[0] == null){
                    continue;
                }

                $divGrp = $("<div />");
                $divGrp.attr("id","ganttGroup-" + grp.getId());
                $divGrp.css("position", "absolute");

                var lt = calcDateLeft(info[0]);
                $divGrp.css("left", lt + "px");
                $divGrp.css("top", (wkTop + 4) + "px");
                $divGrp.css("width", GANTT_DAY_WIDTH * info[1] + "px");
                $divGrp.css("height", "16px" );
                $divGrp.css("border", "1px solid #deaa78");

                $div1 = $("<div />");
                $div1.css("position", "relative");
                $div1.css("width", grp.getPercent() + "%");
                $div1.css("height", "14px");
                $div1.css("background-color",GANTT_GROUP_COLOR);
                $div1.css("background-image", "url('/images/bar.png')");
                $div1.css("float", "left");

                $divGrp.append($div1);

                $div2 = $("<div />");
                $div2.css("position", "relative");
                $div2.css("width", (100 - grp.getPercent()) + "%");
                $div2.css("height", "14px");
                $div2.css("background-color",GANTT_NOT_COLOR);
                $div2.css("background-image", "url('/images/bar.png')");
                $div2.css("float", "left");

                $divGrp.append($div2);


                $("#ganttMain").append($divGrp);

                $divTr = $("<tr />");
                $divLabel = $("<td />");
                $divTr.append($divLabel);

                $divLabel.attr("id", "ganttLabel-Group-" + grp.getId());
                $divLabel.text(grp.getName());
                $divLabel.css("border-width", "0px 1px 1px 0px");
                $divLabel.css("border-style", "solid");
                $divLabel.css("border-color", "#f1f3f1");
                $divLabel.css("height", "24px");
                $divLabel.attr("class", "ganttLabel-Group");

                $("#ganttTasks").append($divTr);

                $divGrp.data("ctltag", grp);


                if (settings.evGroupClick != null){
                    $divGrp.click(
                        function(){ 
                            var ctltag = $(this).data("ctltag");
                            settings.evGroupClick(ctltag); 
                        } 
                    );
                }


                wkTop += 24;


                //=== Project
                for (var j = 0 ; j < grp.getProjects().length; j++){
                    var prj = grp.getProjects()[j];

                    $divPrj = $("<div />");
                    $divPrj.attr("id","ganttProject-" + prj.getId());
                    $divPrj.css("position", "absolute");

                    var lt = calcDateLeft(prj.getStartDate());
                    $divPrj.css("left", lt + "px");
                    $divPrj.css("top", (wkTop + 4) + "px");
                    $divPrj.css("width", GANTT_DAY_WIDTH * prj.getDays() + "px");
                    $divPrj.css("height", "16px" );
                    $divPrj.css("border", "1px solid #deaa78");

                    $div1 = $("<div />");
                    $div1.css("position", "relative");
                    $div1.css("width", prj.getPercent() + "%");
                    $div1.css("height", "14px");
                    $div1.css("background-color",GANTT_PROJECT_COLOR);
                    $div1.css("background-image", "url('/images/bar.png')");
                    $div1.css("float", "left");

                    $divPrj.append($div1);

                    $div2 = $("<div />");
                    $div2.css("position", "relative");
                    $div2.css("width", (100 - prj.getPercent()) + "%");
                    $div2.css("height", "14px");
                    $div2.css("background-color",GANTT_NOT_COLOR);
                    $div2.css("background-image", "url('/images/bar.png')");
                    $div2.css("float", "left");

                    $divPrj.append($div2);


                    $divPrjLabel = $("<div />");
                    $divPrjLabel.attr("id","ganttProject-Label-" + prj.getId());
                    $divPrjLabel.attr("class", "ganttProject-Label");
                    $divPrjLabel.css("position", "absolute");
                    $divPrjLabel.css("left", (lt + prj.getDays() * GANTT_DAY_WIDTH) + "px");
                    $divPrjLabel.css("top", (wkTop + 4) + "px");

                    redrawCaption($divPrjLabel, prj);


                    $("#ganttMain").append($divPrj);
                    $("#ganttMain").append($divPrjLabel);


                    $divPrj.draggable({addClasses:false, axis: "x", containment:"#ganttMain", grid: [GANTT_DAY_WIDTH,24] })
                            .resizable({alsoResize: "#mirror", handles: "e" ,maxHeight: 16, minHeight: 16, minWidth: GANTT_DAY_WIDTH});

                    
                    $divPrj.on("dragstop", function(event , ui){
                        
                        var ret = calcDateFromLeft(ui.position.left);
                        var ctltag = $(this).data("ctltag");
                        var preDt = ctltag.getStartDate();
                        var id = ctltag.getId();
                        
                        ctltag.setStartDate(ret);

                        $("#ganttProjectSet-" + id).css("left", ui.position.left);

                        for (var tc = 0; tc < ctltag.getTasks().length; tc++){
                            var wkTask = ctltag.getTasks()[tc];
                            var wkT = wkTask.getStartDate().getTime();
                            var sa = ret - preDt.getTime();

                            var wkD = wkTask.getStartDate();
                            wkD.setTime(wkD.getTime() + sa);
                            wkTask.setStartDate(wkD);

                            var wkLeft = calcDateLeft(wkTask.getStartDate());
                            wkLeft += wkTask.getDays() * GANTT_DAY_WIDTH;
                            $("#ganttTask-Label-" + wkTask.getId()).css("left", wkLeft)
                            redrawCaption($("#ganttTask-Label-" + wkTask.getId()), wkTask);                            
                        }


                        redrawCaption($("#ganttProject-Label-" + ctltag.getId()), ctltag);
                        wkLeft = calcDateLeft(ctltag.getStartDate());
                        wkLeft += ctltag.getDays() * GANTT_DAY_WIDTH;
                        $("#ganttProject-Label-" + ctltag.getId()).css("left", wkLeft)


                        var info = getProjInfo(ctltag.getParent());

                        $divGrp = $("#ganttGroup-" + ctltag.getParent().getId());

                        var lt = calcDateLeft(info[0]);
                        $divGrp.css("left", lt + "px");
                        $divGrp.css("width", GANTT_DAY_WIDTH * info[1] + "px");

                        //event
                        if (settings.evProjectChanged != null){
                            settings.evProjectChanged(ctltag);
                        }

                    });
                    

                    $divPrj.resizable("option", "minWidth" ,calcMinWidthPrj(prj));


                    $divPrj.on("resizestop", function(event , ui){
                        var wid = Math.round(ui.size.width / GANTT_DAY_WIDTH) * GANTT_DAY_WIDTH;
                        $(this).css("width", wid);

                        var ctltag = $(this).data("ctltag");
                        ctltag.setDays(wid / GANTT_DAY_WIDTH);
                        var id = ctltag.getId();

                        $("#ganttProjectSet-" + id).css("width", wid);
                        ctltag.setDays(wid / GANTT_DAY_WIDTH);



                        for (var tc = 0 ; tc < ctltag.getTasks().length ; tc++){
                            var wkTask = ctltag.getTasks()[tc]
                            $("#ganttTask-" + wkTask.getId())
                                .resizable("option", "maxWidth", calcMaxWidth(ctltag, wkTask));

                        }

                        /*
                        var wkLeft = calcDateLeft(ctltag.getStartDate());
                        wkLeft += ctltag.getDays() * GANTT_DAY_WIDTH;
                        $("#ganttProject-Label-" + ctltag.getId()).css("left", wkLeft)
                        redrawCaption($("#ganttProject-Label-" + ctltag.getId()), ctltag);  
                        */
                        redraw();

                        //event
                        if (settings.evProjectChanged != null){
                            settings.evProjectChanged(ctltag);
                        }
                    });
                    


                    $divTr = $("<tr />");
                    $divLabel = $("<td />");
                    $divTr.append($divLabel);

                    var $img = $("<img />");
                    if (prj.getExpand() == true){
                        $img.attr("src", "/images/minus.png");
                    }
                    else{
                        $img.attr("src", "/images/plus.png");   
                    }

                    var $lbl = $("<span />");
                    $lbl.text(prj.getName());

                    $divLabel.append($img);
                    $divLabel.append($lbl);
                    $divLabel.attr("id", "ganttLabel-Project-" + prj.getId());
                    $divLabel.css("border-width", "0px 1px 1px 0px");
                    $divLabel.css("border-style", "solid");
                    $divLabel.css("border-color", "#f1f3f1");
                    $divLabel.css("height", "24px");
                    $divLabel.css("width", GANTT_TASKS_WIDTH);
                    $divLabel.attr("class", "ganttLabel-Project");

                    $img.click(function(){
                        var wkPid = $(this).parent().attr("id");
                        var wkPid = wkPid.replace("ganttLabel-Project-","");
                        var wkPrj = getProject2(wkPid);
                        wkPrj.setExpand(!wkPrj.getExpand());
                        redraw();
                    });


                    $("#ganttTasks").append($divTr);


                    $divPrj.data("ctltag", prj)

                    if (settings.evProjectClick != null){
                        $divPrj.click(
                            function(){
                                var ctltag = $(this).data("ctltag");
                                settings.evProjectClick(ctltag); 
                            } 
                        );
                    }

                    wkTop += 24;



                    $divPrjSet = $("<div />");
                    $divPrjSet.attr("id","ganttProjectSet-" + prj.getId());
                    $divPrjSet.css("position", "absolute");

                    var lt = calcDateLeft(prj.getStartDate());
                    $divPrjSet.css("left", lt + "px");
                    $divPrjSet.css("top", wkTop + "px");
                    $divPrjSet.css("width", GANTT_DAY_WIDTH * prj.getDays() + "px");
                    $divPrjSet.css("height", prj.getTasks().length * 24 + "px" );
                    //$divPrjSet.css("border", "1px solid #deaa78");

                    $("#ganttMain").append($divPrjSet);



                    //=== Task
                    if (prj.getExpand() == false){
                        continue;
                    }

                    var wktaskTop = 0;
                    for (var k = 0 ; k < prj.getTasks().length; k++){
                        var task = prj.getTasks()[k];

                        $divTask = $("<div />");
                        $divTask.attr("id","ganttTask-" + task.getId());
                        $divTask.css("position", "absolute");

                        var lt = calcDateLeft2(prj.getStartDate(), task.getStartDate());
                        $divTask.css("left", lt + "px");
                        $divTask.css("top", (wktaskTop + 4) + "px");
                        $divTask.css("width", GANTT_DAY_WIDTH * task.getDays() + "px");
                        $divTask.css("height", "16px" );
                        $divTask.css("border", "1px solid #deaa78");

                        $div1 = $("<div />");
                        $div1.css("position", "relative");
                        $div1.css("width", task.getPercent() + "%");
                        $div1.css("height", "14px");
                        $div1.css("background-color",GANTT_TASK_COLOR);
                        $div1.css("background-image", "url('/images/bar.png')");
                        $div1.css("float", "left");

                        $divTask.append($div1);

                        $div2 = $("<div />");
                        $div2.css("position", "relative");
                        $div2.css("width", (100 - task.getPercent()) + "%");
                        $div2.css("height", "14px");
                        $div2.css("background-color",GANTT_NOT_COLOR);
                        $div2.css("background-image", "url('/images/bar.png')");
                        $div2.css("float", "left");

                        $divTask.append($div2);


                        var lt2 = calcDateLeft(task.getStartDate());

                        $divTaskLabel = $("<div />");
                        $divTaskLabel.attr("id","ganttTask-Label-" + task.getId());
                        $divTaskLabel.attr("class", "ganttTask-Label");
                        $divTaskLabel.css("position", "absolute");
                        $divTaskLabel.css("left", (lt2 + task.getDays() * GANTT_DAY_WIDTH ) + "px");
                        $divTaskLabel.css("top", (wkTop + 4) + "px");

                        redrawCaption($divTaskLabel, task);
                       
                        $("#ganttMain").append($divTaskLabel);



                        $divPrjSet.append($divTask);


                        $divTask.draggable({addClasses:false, axis: "x", containment:"#ganttProjectSet-" + prj.getId(),  grid: [GANTT_DAY_WIDTH,24] })
                            .resizable({alsoResize: "#mirror" ,handles: "e", maxHeight: 16, minHeight: 16, minWidth: GANTT_DAY_WIDTH
                                , maxWidth: calcMaxWidth(prj, task)
                            });


                        $divTask.on("dragstop", function(event , ui){
                            
                            
                            var ctltag = $(this).data("ctltag");
                            var ptPrj = ctltag.getParent();

                            var wkT = ptPrj.getStartDate().getTime() + (ui.position.left / GANTT_DAY_WIDTH) * GANTT_DAY_MILSEC;
                            
                            var wkDt = new Date();
                            wkDt.setTime(wkT);

                            ctltag.setStartDate(wkDt);


                            $("#ganttProject-" + ptPrj.getId()).resizable("option", "minWidth" ,calcMinWidthPrj(ptPrj));

                            var wkLeft = calcDateLeft(ctltag.getStartDate());
                            wkLeft += ctltag.getDays() * GANTT_DAY_WIDTH;
                            $("#ganttTask-Label-" + ctltag.getId()).css("left", wkLeft)
                            redrawCaption($("#ganttTask-Label-" + ctltag.getId()), ctltag);  


                            //event
                            if (settings.evTaskChanged != null){
                                settings.evTaskChanged(ctltag);
                            }

                        });

                        $divTask.on("resizestop", function(e, ui){
                            var wid = Math.round(ui.size.width / GANTT_DAY_WIDTH) * GANTT_DAY_WIDTH;
                            $(this).css("width", wid);

                            var ctltag = $(this).data("ctltag");
                            ctltag.setDays(wid / GANTT_DAY_WIDTH);

                            var ptPrj = ctltag.getParent();

                            $("#ganttProject-" + ptPrj.getId()).resizable("option", "minWidth" ,calcMinWidthPrj(ptPrj));

                            /*    
                            var wkLeft = calcDateLeft(ctltag.getStartDate());
                            wkLeft += ctltag.getDays() * GANTT_DAY_WIDTH;
                            $("#ganttTask-Label-" + ctltag.getId()).css("left", wkLeft)
                            redrawCaption($("#ganttTask-Label-" + ctltag.getId()), ctltag);  
                            */

                            redraw();


                            //event
                            if (settings.evTaskChanged != null){
                                settings.evTaskChanged(ctltag);
                            }
                        });


                        $divTr = $("<tr />");
                        $divLabel = $("<td />");
                        $divTr.append($divLabel);
                        $divLabel.attr("id", "ganttLabel-Task-" + task.getId());
                        $divLabel.text(task.getName());
                        $divLabel.css("border-width", "0px 1px 1px 0px");
                        $divLabel.css("border-style", "solid");
                        $divLabel.css("border-color", "#f1f3f1");
                        $divLabel.css("height", "24px");
                        $divLabel.attr("class", "ganttLabel-Task");

                        $("#ganttTasks").append($divTr);


                        $divTask.data("ctltag", task);

                        if (settings.evTaskClick != null){
                            $divTask.click(function(){ 
                                var ctltag = $(this).data("ctltag");
                                settings.evTaskClick(ctltag); 
                            } );
                        }



                        wktaskTop += 24
                        wkTop += 24;
                    }

                }
            }

            var DUMMY_COUNT = 5;
            for (var xx = 0; xx < DUMMY_COUNT ; xx++){
                $divTr = $("<tr />");
                $divLabel = $("<td />");
                $divLabel.css("height", "24px");
                $divTr.append($divLabel);
                $("#ganttTasks").append($divTr);
            }

            $("#ganttMain").css("height", wkTop + 24 * DUMMY_COUNT -16);

            $line = $("#ganttBaseDay");
            $line.css("height", wkTop + 24 * DUMMY_COUNT -16)


        };


        function calcDate(rcvDt, rcvMonth){
            var dt = new Date(rcvDt.getFullYear(), rcvDt.getMonth() + rcvMonth, rcvDt.getDate());

            return dt;
        }

        function calcDate2(rcvDt, saDate){
            var dt = new Date(rcvDt.getFullYear(), rcvDt.getMonth() , rcvDt.getDate());
            var newTime = dt.getTime() + saDate * GANTT_DAY_MILSEC;
            dt.setTime(newTime);

            return dt;
        }

        function calcDateLeft(rcvDt){
            var stt = settings.startDate.getTime() ;
            var rvt = rcvDt.getTime();

            var sa = (rvt - stt) / GANTT_DAY_MILSEC;
            sa = sa + GANTT_BACK_DAYS;

            return sa * GANTT_DAY_WIDTH ;
        }

        function calcDateLeft2(rcvParentDt, rcvDt){
            var ptt = rcvParentDt.getTime();
            var rvt = rcvDt.getTime();

            var sa = (rvt - ptt) / GANTT_DAY_MILSEC;

            return sa * GANTT_DAY_WIDTH ;
        }


        function calcDateFromLeft(rcvLeft){

            var sa = rcvLeft / GANTT_DAY_WIDTH;
            sa = sa - GANTT_BACK_DAYS;
            var wk = settings.startDate.getTime() + sa * GANTT_DAY_MILSEC
            var rtnDt = new Date();
            rtnDt.setTime(wk);

            return rtnDt;
        }


        function calcMaxWidth(rcvP, rcvT){

            var ptt = rcvP.getStartDate().getTime();
            var rvt = rcvT.getStartDate().getTime();
            var days = rcvP.getDays();

            var sa = (rvt - ptt) / (GANTT_DAY_MILSEC);


            return (days - sa) * GANTT_DAY_WIDTH ;
        }


        function calcMinWidthPrj(rcvP){
            var  maxT = null;


            for (var i = 0 ; i < rcvP.getTasks().length ; i++){
                var task = rcvP.getTasks()[i];
                

                var wkT = task.getStartDate().getTime() + task.getDays() * GANTT_DAY_MILSEC;
                if (maxT == null || maxT < wkT){
                    maxT = wkT;
                }
            }

            var sa = (maxT - rcvP.getStartDate().getTime()) / GANTT_DAY_MILSEC;

            return  sa * GANTT_DAY_WIDTH ;
        }


        function calcSpan(rcvDt1, rcvDt2){
            var wk1 = rcvDt1.getTime();
            var wk2 = rcvDt2.getTime();
            var span = (wk2 - wk1) / (GANTT_DAY_MILSEC)

            return span;
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

        function getMonthStr(rcvDt){
            if (rcvDt.getMonth() == 0){
                return "Jan";
            }
            else if (rcvDt.getMonth() == 1){
                return "Feb";
            }
            else if (rcvDt.getMonth() == 2){
                return "Mar";
            }
            else if (rcvDt.getMonth() == 3){
                return "Apr";
            }
            else if (rcvDt.getMonth() == 4){
                return "May";
            }
            else if (rcvDt.getMonth() == 5){
                return "Jun";
            }
            else if (rcvDt.getMonth() == 6){
                return "Jul";
            }
            else if (rcvDt.getMonth() == 7){
                return "Aug";
            }
            else if (rcvDt.getMonth() == 8){
                return "Sep";
            }
            else if (rcvDt.getMonth() == 9){
                return "Oct";
            }
            else if (rcvDt.getMonth() == 10){
                return "Nov";
            }
            else if (rcvDt.getMonth() == 11){
                return "Dec";
            }
        }
 
        var elementFunc = function(elem){
        //init


            var init = function (){

                var sta = calcDate2(settings.startDate, -1 * GANTT_BACK_DAYS);
                var end = new Date(settings.startDate.getFullYear()
                    , settings.startDate.getMonth() + settings.months, settings.startDate.getDate() -1);


                var mons = new Array();
                var monspans = new Array();


                mons.push(getMonthStr(sta) + "'" + String(sta.getFullYear()).substr(2,2));
                monspans.push(calcSpan(sta, new Date(sta.getFullYear(),sta.getMonth() + 1, 1)));
                
                if (sta.getMonth() == settings.startDate.getMonth()){
                    for (var i = 1 ; i < settings.months ; i++){
                        var wkDt = new Date(settings.startDate.getFullYear(),
                            settings.startDate.getMonth() + i , 1);
                        var wkDt2 = new Date(settings.startDate.getFullYear(),
                            settings.startDate.getMonth() + i +1, 1);
                        mons.push(getMonthStr(wkDt) + "'" + String(wkDt.getFullYear()).substr(2,2));
                        monspans.push(calcSpan(wkDt, wkDt2));
                    }
                }
                else{
                    for (var i = 1 ; i < settings.months ; i++){
                        var wkDt = new Date(settings.startDate.getFullYear(),
                            settings.startDate.getMonth() + i -1, 1);
                        var wkDt2 = new Date(settings.startDate.getFullYear(),
                            settings.startDate.getMonth() + i , 1);
                        mons.push(getMonthStr(wkDt) + "'" + String(wkDt.getFullYear()).substr(2,2));
                        monspans.push(calcSpan(wkDt, wkDt2));
                    }
                }


                mons.push(getMonthStr(end) + "'" + String(end.getFullYear()).substr(2,2));
                monspans.push(calcSpan(new Date(end.getFullYear(),end.getMonth() , 0), end));

                $(elem).click(function(){
                });


                /*
                var wk = "";
                for (var i = 0 ; i < mons.length ; i++){
                    wk += mons[i] + "\n";
                    wk += monspans[i] + "\n";
                } 
                alert(wk);
                */

                var $tbl = $("<table />");
                $tbl.attr("id", "ganttTable");

                $(elem).append($tbl);

                var $tbody = $("<tbody />");
                $tbl.append($tbody)

                var $tr = $("<tr />");
                $tbody.append($tr);

                //TD element for ganttLeftPane (Task)
                var $tdLeft = $("<td />");
                $tdLeft.attr("valign", "top");
                $tr.append($tdLeft);

                var $div = $("<div />");
                $div.attr("id", "ganttTasksPane");
                $div.css("position", "relative");
                $div.css("top", "48px");
                $div.css("width", "200px");
                $div.css("height", settings.lines * 24 + "px");
                $div.css("overflow", "hidden");

                $tdLeft.append($div);

                var $div2 = $("<div />");
                $div2.attr("id", "ganttTasksParent");
                $div2.css("position", "relative");
                $div2.css("width", "200px");
                $div2.css("height", settings.lines * 24 + "px");

                $div.append($div2);

                var $tbl2 = $("<table />");
                $tbl2.attr("id", "ganttTasks");

                $div2.append($tbl2);


                //TD element for ganttRightPane
                $tdRight = $("<td />");
                $tr.append($tdRight);

                var $div3 = $("<div />");
                $div3.attr("id", "ganttDayPane");
                $div3.css("width", GANTT_DAY_WIDTH * (31 + GANTT_BACK_DAYS));
                $div3.css("overflow", "hidden")

                $tdRight.append($div3);

                var $div4 = $("<div />");
                $div4.css("position", "relative");

                var sa = (end.getTime() - sta.getTime()) / (GANTT_DAY_MILSEC)
                $div4.css("width", String(GANTT_DAY_WIDTH * (sa +1)) + "px");

                $div3.append($div4);

                var $gday = $("<table />");
                $gday.attr("id", "ganttDay");
                $gday.css("position", "relative");
                $gday.css("left", "0px");
                $gday.css("width", String(GANTT_DAY_WIDTH * (sa +1)) + "px");
                $gday.css("height", "48px");

                $div4.append($gday);


                $tr = $("<tr />");
                $gday.append($tr);

                for (var i = 0 ; i < mons.length; i++){
                    $td = $("<td />");
                    $td.attr("colspan", monspans[i]);
                    $td.attr("width", monspans[i] * GANTT_DAY_WIDTH + "px");
                    $td.text(mons[i]);

                    $tr.append($td)
                }

                $tr = $("<tr />");
                $gday.append($tr);

                var pt = sta;

                for (var i = 0 ; i <= sa; i++){
                    $td = $("<td />");
                    $td.css("width", GANTT_DAY_WIDTH + "px");
                    $td.css("height", "24px");
                    $td.css("text-align", "center");
                    $td.css("border-right", "1px solid #cccccc");
                    $td.text(pt.getDate());

                    $tr.append($td)

                    pt = calcDate2(pt , 1);
                }


                var $div5 = $("<div />");
                $div5.attr("id", "ganttMainParent");
                $div5.css("width", GANTT_DAY_WIDTH * (31 + GANTT_BACK_DAYS + 1) + "px");
                $div5.css("height", settings.lines * 24 + "px");
                $div5.css("overflow", "scroll");

                $tdRight.append($div5);


                var $gmain = $("<div />");
                $gmain.attr("id", "ganttMain");
                $gmain.css("position", "relative");
                $gmain.css("left", "0px");
                $gmain.css("top", "0px");
                $gmain.css("width", String(GANTT_DAY_WIDTH * (sa +1)) + "px");
                $gmain.css("height", settings.lines * 24 + "px");
                $gmain.css("background-image", "url('/images/week.png')");
                $gmain.css("background-repeat", "repeat");

                var youbi = sta.getDay();
                $gmain.css("background-position", (-1 * (youbi -1) * GANTT_DAY_WIDTH) + "px 0px");


                $div5.append($gmain);



                //Scroll
                $("#ganttMainParent").scroll(function (ev){

                    $("#ganttDayPane").scrollLeft($(this).scrollLeft());

                    $("#ganttTasksPane").scrollTop($(this).scrollTop());
                });

                //canvas
                /*
                var $cav = $("<canvas />");
                $cav.attr("id", "ganttCanvas");
                $cav.css("position", "absolute");
                $cav.css("left", "0px");
                $cav.css("top", "0px");
                $cav.css("width", String(GANTT_DAY_WIDTH * (sa +1)) + "px");
                $cav.css("height", settings.lines * 24 + "px");
                //$cav.attr("z-index", "100");

                $div5.append($cav);


                var ctx = $cav[0].getContext('2d');
                ctx.beginPath();
                ctx.fillRect(20, 20, 80, 40);
                */

                $line = $("<div />");
                $line.attr("id", "ganttBaseDay");
                $line.css("position", "absolute");
                $line.css("width", "2px");
                $line.css("left", (GANTT_DAY_WIDTH *7) + "px");
                $line.css("top", "0px");
                $line.css("height", settings.lines * 24 + "px");
                $line.css("border","1px solid #fb5252");

                $gmain.append($line);
            };

            init();

        };


        var ret =  $(this).each(function(){

            elementFunc(this);
        });

        //return ret;

        var globals = {
            hello: function(name){
                return hello(name);
            },
            getGroups: function(){
                return getGroups();
            },
            addGroup: function(name){
                return addGroup(name);
            },
            removeGroup: function(gid){
                return removeGroup(git);
            },
            getGroup: function(gid, tag){
                return getGroup(gid, tag);
            },
            addProject: function(gid, name, startDate, days, tag){
                return addProject(gid, name, startDate, days, tag);
            },
            removeProject: function(gid, pid){
                return removeProject(git, pid);
            },
            getProject: function(gid, pid){
                return getProject(gid, pid);
            },
            getProject2: function(pid){
                return getProject2(pid);
            },
            addTask: function(pid, name, startDate, days, percent, tag){
                return addTask(pid, name, startDate, days, percent, tag);
            },
            removeTask: function(pid, tid){
                return removeTask(pit, tid);
            },
            getTask: function(pid, tid){
                return getTask(pid, tid);
            },
            redraw: function(){
                return redraw();
            },



        };

        return globals;
    };


