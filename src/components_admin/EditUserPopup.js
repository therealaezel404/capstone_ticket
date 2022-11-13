import React from "react";
import { useState } from "react";
import EditUserForm from "./EditUserForm";



const EditUserPopup = () => {
    const[popup, setPop]=useState(false);
    const handleClickOpen=()=>{
      setPop(!popup);
    }
    const closePopup=()=>{
      setPop(false);
    }

    return( <div>

        <button onClick={handleClickOpen} className="edit-account">Edit Account</button>
        {popup?
          <div className="form-popup">
                <div> 
                    <center><div className="form-popup-title">EDIT PROFILE</div></center>

                    <div className="edit-user-form"><EditUserForm/></div>

                    <button style={{margin: "5px"}} onClick={closePopup} className="cancel">Cancel</button>

                                                
                </div>                                  
                
                </div>  :""}
    
      </div>
    );
 }

export default EditUserPopup;