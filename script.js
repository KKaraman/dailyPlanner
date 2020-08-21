$(document).ready(function () {
  var todo = [
    { index: 0, time: "08:00", action: "NONE", status: "STATUS" },
    { index: 1, time: "09:00", action: "NONE", status: "STATUS" },
    { index: 2, time: "10:00", action: "NONE", status: "STATUS" },
    { index: 3, time: "11:00", action: "NONE", status: "STATUS" },
    { index: 4, time: "12:00", action: "LUNCH", status: "STATUS" },
    { index: 5, time: "13:00", action: "NONE", status: "STATUS" },
    { index: 6, time: "14:00", action: "NONE", status: "STATUS" },
    { index: 7, time: "15:00", action: "NONE", status: "STATUS" },
    { index: 8, time: "16:00", action: "NONE", status: "STATUS" },
    { index: 9, time: "17:00", action: "NONE", status: "STATUS" },
    // { time: "18:00", action: "NONE", status: "STATUS" },
  ];

  if (localStorage.getItem("todoList")) {
    todo = JSON.parse(localStorage.getItem("todoList"));
  }

  console.log(moment().format("LL"));
  $("#day").attr("id", "date");
  $("#date").html(moment().format("LL"));

  console.log("this is the time on the todo: " + todo);
  // console.log(moment().format("LT"));
  $("#now").attr("id", "time");
  $("#time").html(moment().format("LT"));

  var presentTime = timeNow();

  $("input").focus(function () {
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function () {
    $(this).css("background-color", "green");
    $(this).css("font", "white");
  });

  for (var i = 0; i < todo.length; i++) {
    $("#action" + i).attr("placeholder", todo[i].action);
  }

  $(document).on("click", "#status0", function () {
    event.preventDefault();
    todo[0].action = $("#action0").val();
    console.log(todo[0].action + " is now stored in todo[0].action");
    saveTodoList();
  });

  $(document).on("click", "#status1", function () {
    event.preventDefault();
    todo[1].action = $("#action1").val();
    console.log(todo[1].action + " is now stored in todo[1].action");
    saveTodoList();
  });

  $(document).on("click", "#status2", function () {
    event.preventDefault();
    todo[2].action = $("#action2").val();
    console.log(todo[2].action + " is now stored in todo[2].action");
    saveTodoList();
  });

  $(document).on("click", "#status3", function () {
    event.preventDefault();
    todo[3].action = $("#action3").val();
    console.log(todo[3].action + " is now stored in todo[3].action");
    saveTodoList();
  });

  $(document).on("click", "#status4", function () {
    event.preventDefault();
    todo[4].action = $("#action4").val();
    console.log(todo[4].action + " is now stored in todo[4].action");
    saveTodoList();
  });

  $(document).on("click", "#status5", function () {
    event.preventDefault();
    todo[5].action = $("#action5").val();
    console.log(todo[5].action + " is now stored in todo[5].action");
    saveTodoList();
  });

  $(document).on("click", "#status6", function () {
    event.preventDefault();
    todo[6].action = $("#action6").val();
    console.log(todo[6].action + " is now stored in todo[6].action");
    saveTodoList();
  });

  $(document).on("click", "#status7", function () {
    event.preventDefault();
    todo[7].action = $("#action7").val();
    console.log(todo[7].action + " is now stored in todo[7].action");
    saveTodoList();
  });

  $(document).on("click", "#status8", function () {
    event.preventDefault();
    todo[8].action = $("#action8").val();
    console.log(todo[8].action + " is now stored in todo[8].action");
    saveTodoList();
  });

  $(document).on("click", "#status9", function () {
    event.preventDefault();
    todo[9].action = $("#action9").val();
    console.log(todo[9].action + " is now stored in todo[9].action");
    saveTodoList();
  });

  $(document).on("click", "#resetBtn", function () {
    todo = todo = [
      { index: 0, time: "08:00", action: "NONE", status: "STATUS" },
      { index: 1, time: "09:00", action: "NONE", status: "STATUS" },
      { index: 2, time: "10:00", action: "NONE", status: "STATUS" },
      { index: 3, time: "11:00", action: "NONE", status: "STATUS" },
      { index: 4, time: "12:00", action: "LUNCH", status: "STATUS" },
      { index: 5, time: "13:00", action: "NONE", status: "STATUS" },
      { index: 6, time: "14:00", action: "NONE", status: "STATUS" },
      { index: 7, time: "15:00", action: "NONE", status: "STATUS" },
      { index: 8, time: "16:00", action: "NONE", status: "STATUS" },
      { index: 9, time: "17:00", action: "NONE", status: "STATUS" },
      // { time: "18:00", action: "NONE", status: "STATUS" },
    ];

    todoList = [];

    saveTodoList();
    for (var i = 0; i < todo.length; i++) {
      $("#action" + i).attr("placeholder", todo[i].action);
    }
  });

  var todoList = [];

  function saveTodoList() {
    for (let t = 0; t < todo.length; t++) {
      todoList[t] = todo[t];
    }
    console.log(todoList);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    console.log(JSON.stringify(todoList));
  }

  function timeNow(){
          var d = new Date();
      var n = d.getHours();
      console.log(n);
      return n;
    }

  function displayPresent(){
    for (let x=0; x<todo.length;x++){
      if(parseInt(todo[x].time) < presentTime){
        console.log(todo[x].time + " is in the past");
        $("#action"+x).css("background-color", "lightcoral");
      }else if (parseInt(todo[x].time) === presentTime){
        console.log(todo[x].time + " is happening now");
        $("#action"+x).css("background-color", "lightyellow");
      }else{
        console.log(todo[x].time + " is not yet happened.");
        $("#action"+x).css("background-color", "lightgreen");
      }
    }
  }

  displayPresent();
  



});
