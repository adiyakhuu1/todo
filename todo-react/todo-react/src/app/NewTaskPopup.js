function NewPop() {
  return (
    <div className="add-new-popup" id="add-new-popup">
      <div className="little-window">
        <div id="popup-header">
          <p style={{ fontSize: 24, fontWeight: 700, lineHeight: 29.05 }}>
            Enter task
          </p>
          <a className="exit-button" id="exit-add" href="#">
            <img src="./close.svg" alt="" style={{ width: 30 }} />
          </a>
        </div>
        <div style={{ position: "absolute", top: "0" }}>
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
  );
}
export { NewPop };
