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
  const [voidReasonsList, setVoidReasonsList] = useState([]);
  const [voidreason, setVoidReason] = useState(false);
  const [description, setDescription] = useState('');

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_it/mytickets/view-assigned-ticket'; 
    navigate(path);
  }

  const handleClickOpen = () => {
    setPop(!popup);
  };
  
  const closePopup = () => {
    setPop(false);
  };

  const _submitVoid = () => {
    let trc=localStorage.getItem('selected_ticketnumber')
    let f =  new FormData()
    f.append("tag","submitvoidmessage")
    f.append("trc", trc)
    f.append("voidreason", voidreason)
    f.append("remarks", description)

    axios.post(URL,f).then(res2=>{
    console.log(res2.data);
      var output = JSON.parse(res2.data);
      console.log(output['status']);
      switch(output['status']) {
        case 'updated':
          alert("updated!");
          setPop(false);
        break;
        case 'error':
          alert("error");
        break;
      }
    }).catch(err=>{
      console.log(err.message);
    })
  }


  useEffect(() => {
    let trc=localStorage.getItem('selected_ticketnumber')
    axios.get(URL + "?tag=get_voidreasons").then(res=>{
      setVoidReasonsList(res.data);
    })
  },[])

  const _SelectVoidReason = (data1,data2) => {
    console.log(data1);
    setVoidReason(data1);
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
              <div className="create">
                <label>Reason</label>
                  <Form.Select
                      className="mb-3"
                      name="role"
                      value={voidreason}
                      onChange={(item) => {
                          _SelectVoidReason(item.target.value,item.target.options[item.target.selectedIndex].text)
                      }}
                  >
                  <option key={0} value={0}>Choose Reason..</option>;
                  {voidReasonsList.map((e, key) => {
                    return <option key={key} value={e['id']}>{e['reason']}</option>;
                  })}
                  </Form.Select>
                 
                  <label>Remarks</label>
                  <textarea
                      placeholder="Write your remarks here..." required value={description} onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <button onClick={_submitVoid}>
                      Confirm
                  </button>
                </div>
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
