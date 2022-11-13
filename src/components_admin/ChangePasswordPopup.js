
import React, { useState } from 'react';
import ChangePasswordForm from '../components_admin/ChangePasswordForm';



const ChangePasswordPopup = () => {

    const[popup, setPop]=useState(false);
    const handleClickOpen=()=>{
      setPop(!popup);
    }
    const closePopup=()=>{
      setPop(false);
    }


    return(
        <div>
            <div onClick={handleClickOpen} className='change-password'>
                                    Change Password
                                </div>
                                {popup?
                                <div className="change-pw-popup">
                                  <div> 
                                    <div className="change-pw-title">Change Password</div>
                                    <button onClick={closePopup} className="close-popup">x</button>
                                    <br></br>
                                    <div>
                                    <hr></hr> </div>
                                    
                                      <div className="pw-rules">
                                        <h6>Password must contain:</h6><i>
                                        <ul>
                                        <li>At least 8 characters</li>
                                        <li>At least 1 number</li>
                                        <li>Both upper and lowercase letters</li></ul></i>
                                      </div>

                                     <div className="change-pw-form"><ChangePasswordForm/></div>
                                     <button onClick={closePopup} className="cancel">Cancel</button>

                                                                 
                                  </div>                                  
                                
                                </div>  :""}
        </div>
    );
}

export default ChangePasswordPopup;