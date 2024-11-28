const DeletePopup = () => {
  return (
    <div className="add-new-popup" id="delete-popup">
      <div id="little-window" className="delete-popup-little-window">
        <div id="popup-header">
          <p style={{ fontSize: 18, fontWeight: 400, lineHeight: 29.05 }}>
            ARE YOU SURE?
          </p>
          <a className="exit-button" id="exit-delete" href="#">
            <img src="./close.svg" alt="" style={{ width: 30 }} />
          </a>
        </div>
        <div>
          <button className="delete-popup-button" id="deleteNO">
            NO
          </button>
          <button className="delete-popup-button" id="deleteYes">
            YES
          </button>
        </div>
      </div>
    </div>
  );
};
export { DeletePopup };