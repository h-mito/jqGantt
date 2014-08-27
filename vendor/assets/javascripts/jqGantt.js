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
        }

    }

    return globals;
}


var ganttProject = function(options){
    var defaults = {
        id: -1 ,
        groupId: -1 ,
        name: "",
        startDate: new Date(),
        days: 1,
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
        getName : function(){
            return getName();
        },
        setName : function(name){
            return setName(name);
        },
        getStartDate : function(){
            return getStartDate();
        },
        setStartDate : function(date){
            return setStartDate(date);
        },
        getDays : function(){
            return getDays();
        },
        setDays : function(days){
            return setDays(days);
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
        days: 1
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
        getName : function(){
            return getName();
        },
        setName : function(name){
            return setName(name);
        },
        getStartDate : function(){
            return getStartDate();
        },
        setStartDate : function(date){
            return setStartDate(date);
        },
        getDays : function(){
            return getDays();
        },
        setDays : function(days){
            return setDays(days);
        },                        

    }

    return globals;

}





    $.fn.jqGantt = function(options){
        var target  = this;

        var defaults = {
            startDate : new Date,
            months: 2,
            groups: [],
            maxGid: 0,
            maxPid: 0,
            maxTid: 0
        };
        var settings = $.extend(defaults, options);
 

        var hello = function(name){
            alert ("hello " + name + " startDate=" + settings.startDate);
        }

        var addGroup = function(name){
            var gid = settings.maxGid + 1;
            settings.maxGid += 1;

            var grp = ganttGroup({id: gid, name: name} );
            settings.groups.push(grp);

            return grp;
        }

        var removeGroup = function(gid){
            for (var i = 0 ; i < settings.groups.length ; i++){
                if (settings.groups[i].getId() == gid){
                    settings.groups.splice(i, 1)
                    break;
                }
            }

        }

        var getGroup = function(gid){
            for (var i = 0 ; i < settings.groups.length ; i++){
                if (settings.groups[i].getId() == gid){
                    return settings.groups[i];
                }
            }
            return null;
        }

        var addProject = function(gid, name, startDate, days){
            var pid = settings.maxPid + 1;
            settings.maxPid += 1;

            var prj = ganttProject({groupId: gid, id: pid, name: name, startDate: startDate, days: days});
            
            var grp = getGroup(gid);

            grp.addProject(prj);

            return prj;
        }

        var removeProject = function(gid, pid){
            var grp = getGroup(gid);

            grp.removeProject(pid);
        }

        var getProject = function(gid, pid){
            var grp = getGroup(gid);

            return grp.getProject(pid);

        }

        var getProject2 = function(pid){

            for (var i = 0 ; i < settings.groups.length ; i++){

                var grp = settings.groups[i];
                var prj = grp.getProject(pid);

                if (prj != null){
                    return prj;
                }
            }

            return null;
        }

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


        var addTask = function(pid, name, startDate, days){
            var tid = settings.maxTid + 1;
            settings.maxTid += 1;

            var task = ganttTask({projectId: pid, id: tid, name: name, startDate: startDate, days: days});
            
            var prj = getProject2(pid);

            prj.addTask(task);

            return task;
        }

        var removeTask = function(pid, tid){
            var prj = getProject2(pid);

            prj.removeTask(tid);
        }

        var getTask = function(pid, tid){
            var prj = getProject2(pid);

            return prj.getTask(tid);

        }



        function clsAll(){
            for (var i = 1; i <= settings.maxGid; i++){
                $("ganttGroup-" + i).remove();
            }
            for (var i = 1; i <= settings.maxPid; i++){
                $("ganttProject-" + i).remove();
            }
            for (var i = 1; i <= settings.maxTid; i++){
                $("ganttTask-" + i).remove();
            }
        }


        var redraw = function(){
            var wkTop = 0;
            clsAll();

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
                $div1.css("width", "40%");
                $div1.css("height", "14px");
                $div1.css("background-color",GANTT_GROUP_COLOR);
                $div1.css("background-image", "url('/images/bar.png')");
                $div1.css("float", "left");

                $divGrp.append($div1);

                $div2 = $("<div />");
                $div2.css("position", "relative");
                $div2.css("width", "60%");
                $div2.css("height", "14px");
                $div2.css("background-color",GANTT_NOT_COLOR);
                $div2.css("background-image", "url('/images/bar.png')");
                $div2.css("float", "left");

                $divGrp.append($div2);


                $("#ganttMain").append($divGrp);
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
                    $div1.css("width", "40%");
                    $div1.css("height", "14px");
                    $div1.css("background-color",GANTT_PROJECT_COLOR);
                    $div1.css("background-image", "url('/images/bar.png')");
                    $div1.css("float", "left");

                    $divPrj.append($div1);

                    $div2 = $("<div />");
                    $div2.css("position", "relative");
                    $div2.css("width", "60%");
                    $div2.css("height", "14px");
                    $div2.css("background-color",GANTT_NOT_COLOR);
                    $div2.css("background-image", "url('/images/bar.png')");
                    $div2.css("float", "left");

                    $divPrj.append($div2);


                    $("#ganttMain").append($divPrj);
                    $divPrj.draggable({addClasses:false, axis: "x", containment:"#ganttMain", grid: [GANTT_DAY_WIDTH,24] })
                            .resizable({alsoResize: "#mirror" ,maxHeight: 16, minHeight: 16, minWidth: GANTT_DAY_WIDTH,
                                stop: function(e, ui){
                                    var wid = Math.round(ui.size.width / GANTT_DAY_WIDTH) * GANTT_DAY_WIDTH;
                                    $(this).css("width", wid);
                                }
                            });

                    wkTop += 24;


                    //=== Task
                    for (var k = 0 ; k < prj.getTasks().length; k++){
                        var task = prj.getTasks()[k];

                        $divTask = $("<div />");
                        $divTask.attr("id","ganttTask-" + task.getId());
                        $divTask.css("position", "absolute");

                        var lt = calcDateLeft(task.getStartDate());
                        $divTask.css("left", lt + "px");
                        $divTask.css("top", (wkTop + 4) + "px");
                        $divTask.css("width", GANTT_DAY_WIDTH * task.getDays() + "px");
                        $divTask.css("height", "16px" );
                        $divTask.css("border", "1px solid #deaa78");

                        $div1 = $("<div />");
                        $div1.css("position", "relative");
                        $div1.css("width", "40%");
                        $div1.css("height", "14px");
                        $div1.css("background-color",GANTT_TASK_COLOR);
                        $div1.css("background-image", "url('/images/bar.png')");
                        $div1.css("float", "left");

                        $divTask.append($div1);

                        $div2 = $("<div />");
                        $div2.css("position", "relative");
                        $div2.css("width", "60%");
                        $div2.css("height", "14px");
                        $div2.css("background-color",GANTT_NOT_COLOR);
                        $div2.css("background-image", "url('/images/bar.png')");
                        $div2.css("float", "left");

                        $divTask.append($div2);


                        $("#ganttMain").append($divTask);
                        wkTop += 24;
                    }

                }


            }
        }


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

            var sa = (rvt - stt) / (GANTT_DAY_MILSEC);
            sa = sa + GANTT_BACK_DAYS;

            return sa * GANTT_DAY_WIDTH ;
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

                var $corner = $("<div />");
                $corner.attr("id", "ganttCorner");
                $corner.css("position", "absolute");
                $corner.css("left", "0px");
                $corner.css("width", GANTT_TASKS_WIDTH + "px");
                $corner.css("height", "48px");

                $(elem).append($corner);


                var $gday = $("<table />");
                $gday.attr("id", "ganttDay");
                $gday.css("position", "absolute");
                $gday.css("left", GANTT_TASKS_WIDTH + "px");
                var sa = (end.getTime() - sta.getTime()) / (GANTT_DAY_MILSEC)
                $gday.css("width", String(GANTT_DAY_WIDTH * (sa +1)) + "px");
                $gday.css("height", "48px");

                $(elem).append($gday);


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


                var $gtask = $("<table />");
                $gtask.attr("id", "ganttTasks");
                $gtask.css("position", "absolute");
                $gtask.css("left", "0px");
                $gtask.css("top", "48px");
                $gtask.css("width", GANTT_TASKS_WIDTH + "px");
                $gtask.css("height", "0px");

                $(elem).append($gtask);

                var $gmain = $("<div />");
                $gmain.attr("id", "ganttMain");
                $gmain.css("position", "absolute");
                $gmain.css("left", (GANTT_TASKS_WIDTH + 1) + "px");
                $gmain.css("top", "48px");
                $gmain.css("width", String(GANTT_DAY_WIDTH * (sa +1)) + "px");
                $gmain.css("height", "200px");
                $gmain.css("background-image", "url('/images/week.png')");
                $gmain.css("background-repeat", "repeat");
                $gmain.css("background-posiion", "-48px 0px");


                $(elem).append($gmain);


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
            addGroup: function(name){
                return addGroup(name);
            },
            removeGroup: function(gid){
                return removeGroup(git);
            },
            getGroup: function(gid){
                return getGroup(gid);
            },
            addProject: function(gid, name, startDate, days){
                return addProject(gid, name, startDate, days);
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
            addTask: function(pid, name, startDate, days){
                return addTask(pid, name, startDate, days);
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



        }

        return globals;
    };





