import tasks from "tasks.json";
import CreateElement from "./CreateTaskElement.js";

tasks.map((task) => {
  document.getElementById("task-container-todo").innerHTML = "";
  document.getElementById("task-container-inprogress").innerHTML = "";
  document.getElementById("task-container-done").innerHTML = "";
  document.getElementById("task-container-blocked").innerHTML = "";

  //   let task = todos[i];
  let taskElement = createTaskElement(task);
  if (task.status == "todo") {
    document.getElementById("task-container-todo").appendChild(taskElement);
  } else if (task.status == "done") {
    document.getElementById("task-container-done").appendChild(taskElement);
  } else if (task.status == "in-progress") {
    document
      .getElementById("task-container-inprogress")
      .appendChild(taskElement);
  } else if (task.status == "blocked") {
    document.getElementById("task-container-blocked").appendChild(taskElement);
  }
});
