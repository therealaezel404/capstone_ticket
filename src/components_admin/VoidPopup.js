import React, { useEffect, useRef, useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import VoidTicketForm from "./VoidTicketForm";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'
import Form from "react-bootstrap/Form";


export function VoidPopup(props) {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };

  useEffect(() => {
    let trc=localStorage.getItem('selected_ticketnumber')
    axios.get(URL + "?tag=get_activetechs").then(res=>{
     
    })
  },[])



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
