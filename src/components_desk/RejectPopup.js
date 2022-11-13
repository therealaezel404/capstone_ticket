import React from "react";
import { useState } from "react";
import RejectForm from "./RejectForm";

const RejectPopup = () => {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen} className="reject">
        REJECT REQUEST
      </button>
      {popup ? (
        <div className="form-popup">
          <div>
            <center>
              <div className="form-popup-title">REJECT SERVICE REQUEST</div>
            </center>

            <div className="void-ticket-form">
              <RejectForm />
            </div>

            <button onClick={closePopup} className="cancel">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RejectPopup;
