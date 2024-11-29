const EditPopup = ({ sendStatus }) => {
  function CloseThePopup() {
    sendStatus(false);
  }
  return (
    <div className="add-new-popup" id="edit-popup">
      <div className="little-window">
        <div id="popup-header">
          <p className="popup-top-text">Edit task</p>
          <a
            onClick={CloseThePopup}
            className="exit-button"
            id="exit-edit"
            href="#"
          >
            <img src="./close.svg" alt="" style={{ width: 30 }} />
          </a>
        </div>
        <div className="popup-forms">
          <input
            className="forms"
            id="select-status2-1"
            type="text"
            placeholder="Task "
          />
          <select className="forms" id="select-status2-2">
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
        <button id="edit-submit">Submit</button>
      </div>
    </div>
  );
};
export { EditPopup };
