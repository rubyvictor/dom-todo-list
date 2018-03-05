var tasks = ["buy milk", "eat dinner", "nail javascript"];

var toDoList = document.getElementById("todo-list");

console.log(toDoList);
for (let i = 0; i < tasks.length; i++) {
  createAddToDo(tasks[i]);
}

function createAddToDo(toDoItem) {
  var toDo = document.createElement("li");
  toDo.textContent = toDoItem;
  toDo.addEventListener("click", toDoMarkedDone);
  toDoList.appendChild(toDo);
}


var form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var userInput = document.querySelector("input").value;
  createAddToDo(userInput);
});

form.addEventListener("keypress", function(event) {
  if (event.charcode === 13) {
    event.preventDefault();
    var userInput = document.querySelector("input").value;
    createAddToDo(userInput);
  } else {
    console.log("You clicked and added to-do item");
  }
});

function toDoMarkedDone(event) {
  target = event.target.classList;
  if (target.contains("done")) {
    target.remove("done");
  } else {
    target.add("done");
  }
}


