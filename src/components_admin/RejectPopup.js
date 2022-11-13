import React, { useEffect, useRef, useState } from "react";
import RejectForm from "./RejectForm";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'
import Form from "react-bootstrap/Form";


export function RejectPopup(props) {
    const[popup, setPop]=useState(false);


    const handleClickOpen=()=>{
      setPop(!popup);
    }
    const closePopup=()=>{
      setPop(false);
    }
    const _AcceptTicket=()=>{
      let trc=localStorage.getItem('selected_ticketnumber')
      alert(trc);
    }


    return( 
      <div>
        <button onClick={_AcceptTicket} className="accept" type="button">ACCEPT AS TICKET</button>
        <button onClick={handleClickOpen} className="reject">REJECT REQUEST</button>
        {popup?
          <div className="form-popup">
            <div> 
              <center><div className="form-popup-title">REJECT SERVICE REQUEST</div></center>
                <div className="void-ticket-form"><RejectForm/></div>
                  <button onClick={closePopup} className="cancel">Cancel</button>                             
                </div>                                  
                
                </div>  :""}
    
      </div>
    );
 }

export default RejectPopup;