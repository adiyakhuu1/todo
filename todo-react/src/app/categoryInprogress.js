import tasks from "./tasks.json";
import { useState } from "react";
import { EditPopup } from "./EditPopup";

const CategoryInprogress = () => {
  const [editPop, savePopState] = useState(false);
  const list = [];
  // let container = "";
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status === "in-progress") {
      list.push(
        <div className="task" key={i}>
          <input type="radio" />
          <p className="todo-name">{tasks[i].name}</p>
          <div className="task-options">
            <a
              onClick={() => {
                savePopState(true);
              }}
              href="#"
            >
              <img src="./edit.svg" />
            </a>
            <a href="#">
              <img src="./delete.svg" />
            </a>
          </div>
          {editPop && <EditPopup sendStatus={savePopState} />}
        </div>
      );
      // return container;
    }
  }
  console.log(list);
  return list;
};
export { CategoryInprogress };
