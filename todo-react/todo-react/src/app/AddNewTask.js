import tasks from "./task.json";
function createTaskElement(task) {
  let innerTaskContainer = document.createElement("div");
  let checkbox = document.createElement("input");
  checkbox.type = "radio";
  innerTaskContainer.className = "task";
  let todoName = document.createElement("p");
  todoName.className = "todo-name";
  todoName.innerText = task.name;
  let todoOptions = document.createElement("div");
  todoOptions.className = "task-options";
  let editOption1 = document.createElement("a");
  checkbox.onclick = function () {
    takeOne(i);
    checkboxDone(selectedTask);
  };
  editOption1.onclick = function () {
    takeOne(i);
    showUp(selectedTask);
  };
  editOption1.href = "#";
  let editOption2 = document.createElement("a");
  editOption2.onclick = function () {
    takeOne(i);

    document.getElementById("delete-popup").style.display = "block";
    // deleteOne(selectedTask);
  };
  editOption2.href = "#";
  let editOptionImage1 = document.createElement("img");
  editOptionImage1.src = "./edit.svg";
  let editOptionImage2 = document.createElement("img");
  editOptionImage2.src = "./delete.svg";
  editOption1.appendChild(editOptionImage1);
  editOption2.appendChild(editOptionImage2);
  todoOptions.appendChild(editOption1);
  todoOptions.appendChild(editOption2);
  innerTaskContainer.appendChild(checkbox);
  innerTaskContainer.appendChild(todoName);
  innerTaskContainer.appendChild(todoOptions);

  return innerTaskContainer;
}
function refresh() {
  document.getElementById("task-container-todo").innerHTML = "";
  document.getElementById("task-container-inprogress").innerHTML = "";
  document.getElementById("task-container-done").innerHTML = "";
  document.getElementById("task-container-blocked").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    let task = todos[i];
    let taskElement = createTaskElement(task, i);
    if (task.status == "todo") {
      document.getElementById("task-container-todo").appendChild(taskElement);
    } else if (task.status == "done") {
      document.getElementById("task-container-done").appendChild(taskElement);
    } else if (task.status == "in-progress") {
      document
        .getElementById("task-container-inprogress")
        .appendChild(taskElement);
    } else if (task.status == "blocked") {
      document
        .getElementById("task-container-blocked")
        .appendChild(taskElement);
    }
  }
}

export { createTaskElement };
export { refresh };
