import { useState } from "react";
import { NewPop } from "./NewTaskPopup";

const Cards = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cards" id="cards">
      <div className="card-container" id="cards-container">
        <div className="card" id="todo">
          <div className="status-container">
            <div className="status-main">
              <div className="indicator" id="white"></div>
              <p>To do</p>
            </div>
          </div>
          <div className="task-container" id="task-container-todo"></div>
        </div>
        <div className="card" id="in-progress">
          <div className="status-container">
            <div className="status-main">
              <div className="indicator" id="yellow"></div>
              <p>In Progress</p>
            </div>
          </div>
          <div className="task-container" id="task-container-inprogress"></div>
        </div>
        <div className="card" id="done">
          <div className="status-container">
            <div className="status-main">
              <div className="indicator" id="green"></div>
              <p>Done</p>
            </div>
          </div>
          <div className="task-container" id="task-container-done"></div>
        </div>
        <div className="card" id="blocked">
          <div className="status-container">
            <div className="status-main">
              <div className="indicator" id="red"></div>
              <p>Blocked</p>
            </div>
          </div>
          <div className="task-container" id="task-container-blocked"></div>
        </div>
      </div>
      <button id="add-new-button" onClick={() => setIsOpen(true)}>
        Add new task
      </button>
      <button id="refresh-button">Refresh</button>
      {isOpen && <NewPop />}
      {/* <button id="test-button" onclick="editTask()">edit task(for test)</button> 
       <div className="add-new-popup" id="add-new-popup"></div>  */}
    </div>
  );
};
export { Cards };
