import React from "react";
import { useState } from "react";
import ResolveTicketForm from "./ResolveTicketForm";

const ResolvePopup = () => {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen} className="resolve">
        RESOLVE
      </button>
      {popup ? (
        <div className="form-popup">
          <div>
            <center>
              <div className="form-popup-title">RESOLVE TICKET</div>
            </center>

            <div className="resolve-ticket-form">
              <ResolveTicketForm />
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

export default ResolvePopup;
