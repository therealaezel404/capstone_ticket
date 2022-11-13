import React from "react";
import { useState } from "react";



const DeleteFeedbackPopup = () => {
    const[popup, setPop]=useState(false);
    const handleClickOpen=()=>{
      setPop(!popup);
    }
    const closePopup=()=>{
      setPop(false);
    }

    return( <div>

        <button onClick={handleClickOpen} className="delete-button">DELETE FEEDBACK</button>
        {popup?<div className="delete-popup">
          <div className="form-popup">
            
                <div> 
                    <center><div className="form-popup-title">DELETE</div></center>

                    <div className="delete-popup-message">Are you sure you wish to delete this feedback?</div>

                    <button className="confirm-delete">Confirm</button>
                    <button onClick={closePopup} className="delete-cancel">Cancel</button>

                                                
                </div>                                  
                </div>
                </div>  :""}
            
      </div>
    );
 }

export default DeleteFeedbackPopup;