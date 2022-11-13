import React from "react";
import { useState } from "react";
import VoidTicketForm from "./VoidTicketForm";

const VoidPopup = () => {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen} className="void">
        VOID
      </button>
      {popup ? (
        <div className="form-popup">
          <div>
            <center>
              <div className="form-popup-title">VOID TICKET</div>
            </center>

            <div className="void-ticket-form">
              <VoidTicketForm />
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

export default VoidPopup;
