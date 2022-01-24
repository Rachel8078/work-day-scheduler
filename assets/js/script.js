var task = $(".task");
var hour = $(".hour");
var saveBtn = $(".saveBtn");


// display current day 
$("#currentDay").html(moment().format('LL'));

// load saved tasks from localStorage
var loadTasks = function() {
    var storedTask8am = localStorage.getItem("task8am");
    $("#task8am").val(storedTask8am)
    var storedTask9am = localStorage.getItem("task9am");
    $("#task9am").val(storedTask9am)
    var storedTask10am = localStorage.getItem("task10am");
    $("#task10am").val(storedTask10am)
    var storedTask11am = localStorage.getItem("task11am");
    $("#task11am").val(storedTask11am)
    var storedTask12pm = localStorage.getItem("task12pm");
    $("#task12pm").val(storedTask12pm)
    var storedTask1pm = localStorage.getItem("task1pm");
    $("#task1pm").val(storedTask1pm)
    var storedTask2pm = localStorage.getItem("task2pm");
    $("#task2pm").val(storedTask2pm)
    var storedTask3pm = localStorage.getItem("task3pm");
    $("#task3pm").val(storedTask3pm)
    var storedTask4pm = localStorage.getItem("task4pm");
    $("#task4pm").val(storedTask4pm)
    var storedTask5pm = localStorage.getItem("task5pm");
    $("#task5pm").val(storedTask5pm)  
};

// save tasks to localStorage
var saveTasks = function() {
    localStorage.setItem($(this).siblings()[1].id, $(this).siblings()[1].value);
};

// check if task is in the past, present, or future
var checkTime = function() {
    var currentTime = moment();
    
    // 8am timeblock
    var time8am = moment("8am", "h:mma");
    var difference8am = moment.duration(currentTime.diff(time8am));
    var diffHours8am = difference8am.asHours();
    
    if(diffHours8am <= 1 && diffHours8am >= 0) {
        $(task8am).addClass("present"); 
    } else if (diffHours8am < 0) {
        $(task8am).addClass("future");
    } else if (diffHours8am > 1) {
        $(task8am).addClass("past");
    }

    // 9am timeblock
    var time9am = moment("9am", "h:mma");
    var difference9am = moment.duration(currentTime.diff(time9am));
    var diffHours9am = difference9am.asHours();
    
    if(diffHours9am <= 1 && diffHours9am >= 0) {
        $(task9am).addClass("present"); 
    } else if (diffHours9am < 0) {
        $(task9am).addClass("future");
    } else if (diffHours9am > 1) {
        $(task9am).addClass("past");
    }

    // 10am timeblock
    var time10am = moment("10am", "h:mma");
    var difference10am = moment.duration(currentTime.diff(time10am));
    var diffHours10am = difference10am.asHours();
    
    if(diffHours10am <= 1 && diffHours10am >= 0) {
        $(task10am).addClass("present"); 
    } else if (diffHours10am < 0) {
        $(task10am).addClass("future");
    } else if (diffHours10am > 1) {
        $(task10am).addClass("past");
    }

    // 11am timeblock
    var time11am = moment("11am", "h:mma");
    var difference11am = moment.duration(currentTime.diff(time11am));
    var diffHours11am = difference11am.asHours();
    
    if(diffHours11am <= 1 && diffHours11am >= 0) {
        $(task11am).addClass("present"); 
    } else if (diffHours11am < 0) {
        $(task11am).addClass("future");
    } else if (diffHours11am > 1) {
        $(task11am).addClass("past");
    }

    // 12pm timeblock
    var time12pm = moment("12pm", "h:mma");
    var difference12pm = moment.duration(currentTime.diff(time12pm));
    var diffHours12pm = difference12pm.asHours();
    
    if(diffHours12pm <= 1 && diffHours12pm >= 0) {
        $(task12pm).addClass("present"); 
    } else if (diffHours12pm < 0) {
        $(task12pm).addClass("future");
    } else if (diffHours12pm > 1) {
        $(task12pm).addClass("past");
    }
    // 1pm timeblock
    var time1pm = moment("1pm", "h:mma");
    var difference1pm = moment.duration(currentTime.diff(time1pm));
    var diffHours1pm = difference1pm.asHours();
    
    if(diffHours1pm <= 1 && diffHours1pm >= 0) {
        $(task1pm).addClass("present"); 
    } else if (diffHours1pm < 0) {
        $(task1pm).addClass("future");
    } else if (diffHours1pm > 1) {
        $(task1pm).addClass("past");
    }
    // 2pm timeblock
    var time2pm = moment("2pm", "h:mma");
    var difference2pm = moment.duration(currentTime.diff(time2pm));
    var diffHours2pm = difference2pm.asHours();
    
    if(diffHours2pm <= 1 && diffHours2pm >= 0) {
        $(task2pm).addClass("present"); 
    } else if (diffHours2pm < 0) {
        $(task2pm).addClass("future");
    } else if (diffHours2pm > 1) {
        $(task2pm).addClass("past");
    }
    // 3pm timeblock
    var time3pm = moment("3pm", "h:mma");
    var difference3pm = moment.duration(currentTime.diff(time3pm));
    var diffHours3pm = difference3pm.asHours();
    
    if(diffHours3pm <= 1 && diffHours3pm >= 0) {
        $(task3pm).addClass("present"); 
    } else if (diffHours3pm < 0) {
        $(task3pm).addClass("future");
    } else if (diffHours3pm > 1) {
        $(task3pm).addClass("past");
    }
    // 4pm timeblock
    var time4pm = moment("4pm", "h:mma");
    var difference4pm = moment.duration(currentTime.diff(time4pm));
    var diffHours4pm = difference4pm.asHours();
    
    if(diffHours4pm <= 1 && diffHours4pm >= 0) {
        $(task4pm).addClass("present"); 
    } else if (diffHours4pm < 0) {
        $(task4pm).addClass("future");
    } else if (diffHours4pm > 1) {
        $(task4pm).addClass("past");
    }
    // 5pm timeblock
    var time5pm = moment("5pm", "h:mma");
    var difference5pm = moment.duration(currentTime.diff(time5pm));
    var diffHours5pm = difference5pm.asHours();
    
    if(diffHours5pm <= 1 && diffHours5pm >= 0) {
        $(task5pm).addClass("present"); 
    } else if (diffHours5pm < 0) {
        $(task5pm).addClass("future");
    } else if (diffHours5pm > 1) {
        $(task5pm).addClass("past");
    }
}

checkTime();

loadTasks();

saveBtn.on("click", saveTasks);

setInterval(checkTime, 300000);