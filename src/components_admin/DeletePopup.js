import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'


export function DeletePopup(props) {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen} className="delete-icon">
        <i className="bi bi-trash3-fill" title="DELETE"></i>
      </button>
      {popup ? (
        <div className="delete-popup">
          <div className="form-popup">
            <div>
              <center>
                <div className="form-popup-title">DELETE</div>
              </center>

              <div className="delete-popup-message">
                Are you sure you wish to delete?
              </div>

              <button className="confirm-delete">Confirm</button>
              <button onClick={closePopup} className="delete-cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DeletePopup;
