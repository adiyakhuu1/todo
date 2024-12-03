import { useState } from "react";
import { NewPop } from "./NewTaskPopup";
import { RenderTodo } from "./refresh";
import { CategoryBlocked } from "./categoryBlocked";
import { CategoryDone } from "./categoryDone";
import { CategoryInprogress } from "./categoryInprogress";
import { CategoryTodo } from "./categoryTodo";
import { EditPopup } from "./EditPopup";
import tasks from "./tasks.json";

const Cards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, saveState] = useState(false);
  const [editPop, savePopState] = useState(false);

  return (
    <div className="cards" id="cards">
      <div className="card-container" id="cards-container">
        <div className="card" id="todo">
          <div className="status-container">
            <div className="status-main">
              <div className="indicator" id="white"></div>
              <p>To do</p>
            </div>
            <div className="task-container" id="task-container-todo">
              {/* here */}
              {state && <CategoryTodo />}
            </div>
          </div>
        </div>
        <div className="card" id="in-progress">
          <div className="status-container">
            <div className="status-main">
              <div className="indicator" id="yellow"></div>
              <p>In Progress</p>
            </div>
            <div className="task-container" id="task-container-inprogress">
              {state && <CategoryInprogress />}
            </div>
          </div>
        </div>
        <div className="card" id="done">
          <div className="status-container">
            <div className="status-main">
              <div className="indicator" id="green"></div>
              <p>Done</p>
            </div>
            <div className="task-container" id="task-container-done">
              {state && <CategoryDone />}
            </div>
          </div>
        </div>
        <div className="card" id="blocked">
          <div className="status-container">
            <div className="status-main">
              <div className="indicator" id="red"></div>
              <p>Blocked</p>
            </div>
            <div className="task-container" id="task-container-blocked">
              {state && <CategoryBlocked />}
            </div>
          </div>
        </div>
      </div>
      <button id="add-new-button" onClick={() => setIsOpen(true)}>
        Add new task
      </button>
      <button id="refresh-button" onClick={() => saveState(true)}>
        Refresh
      </button>
      {isOpen && <NewPop sendStatus={setIsOpen} />}
      {editPop && <EditPopup sendStatus={savePopState} />}
      {/* <button id="test-button" onclick="editTask()">edit task(for test)</button> 
       <div className="add-new-popup" id="add-new-popup"></div>  */}
    </div>
  );
};
export { Cards };
