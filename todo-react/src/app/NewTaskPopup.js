import { useState } from "react";
// import { Cards } from "./Cards";

function NewPop({sendStatus}) {
  // const [isOpen, setIsOpen2] = useState(false);
  // theStatus = props.setIsOpen
  function CloseThePopup(){
    sendStatus(false);
  }

  return sendStatus ? (
    <div className="add-new-popup" id="add-new-popup">
      <div className="little-window">
        <div id="popup-header">
          <p className="popup-top-text">
            Enter task
          </p>
          <a className="exit-button" id="exit-add" href="#">
            <img src="./close.svg" onClick={CloseThePopup} alt="" style={{ width: 30 }} />
          </a>
        </div>
        <div className="popup-forms" >
          <input
            className="forms"
            id="select-status1"
            type="text"
            placeholder="Task Name"
          />
          <select className="forms" id="select-status2">
            <option id="" value="">
              Select status
            </option>
            <option id="todo-option" value="todo">
              Todo
            </option>
            <option id="done-option" value="done">
              Done
            </option>
            <option id="in progress" value="in-progress">
              In Progress
            </option>
            <option id="blocked-option" value="blocked">
              Blocked
            </option>
          </select>
        </div>
        <button id="add-new-submit">Submit</button>
      </div>
    </div>
  ) : null;
}
export { NewPop };
