import React, { useEffect, useRef, useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'
import Form from "react-bootstrap/Form";

export function RequestDesignationForm(props) {
  const [rejectPopup, setRejectPopup] = useState(false);
  const [reason, setReason] = useState('');
  const [remarks, setRemarks] = useState('');
  const [reasonList, setReasonList] = useState('');
  const [assignTo, setAssign] = useState('');
  const [priority, setPriority] = useState('');
  const [tech_list, setTechList] = useState([]); // tech_array

  const _openRejectRequest=()=> {
    setRejectPopup(!rejectPopup);
  }
  const closePopup=()=> {
    setRejectPopup(false);
  }

  const _RejectRequest=()=> {
    let trc=localStorage.getItem('selected_ticketnumber')
    let f =  new FormData()
    f.append("tag","reject_request")
    f.append("reason", reason)
    f.append("remarks", remarks)
    f.append("user_id", assignTo)
    f.append("trc", trc)

    axios.post(URL,f).then(res2=>{
      var output = JSON.parse(res2.data);
      console.log(res2.data);
      switch(output['status']) {
        case 'updated':
          alert("sucessfully updated!");
        break;
        case 'error':
          alert("error");
        break;
      }
    }).catch(err=>{
      console.log(err.message);
    })
  }

  const _AcceptTicket=()=> {
    let trc=localStorage.getItem('selected_ticketnumber')
    let f =  new FormData()
    f.append("tag","assign_tech")
    f.append("trc", trc)
    f.append("user_id", assignTo)

    axios.post(URL,f).then(res2=>{
      var output = JSON.parse(res2.data);
      console.log(output['status']);
      switch(output['status']) {
        case 'updated':
          alert("sucessfully updated!")
        break;
        case 'error':
          alert("error");
        break;
      }
    }).catch(err=>{
      console.log(err.message);
    })
  }


   const _SelectReason = (data1,data2) => {
    setReason(data1);
  }


  const _SelectTech = (data1,data2) => {
    setAssign(data1);
  }

  useEffect(() => {
    let trc=localStorage.getItem('selected_ticketnumber')
    axios.get(URL + "?tag=get_activetechs").then(res=>{
      setTechList(res.data);
    })


    axios.get(URL + "?tag=get_reasons").then(res=>{
      setReasonList(res.data);
    })
  },[])

  return (
    <div className="create">

    <center>
      <div className="ticket-assignment-form">
        <Row>
          <Col>
              <label>Assign to:</label>
              <Form.Select
                    className="mb-3"
                    value={assignTo}
                    onChange={(item) => {
                      _SelectTech(item.target.value,item.target.options[item.target.selectedIndex].text)
                    }}
                  >
                    <option key={0} value={0}>Choose User</option>;
                    {tech_list.map((e, key) => {
                      return <option key={key} value={e['id']}>{e['first_name']}</option>;
                    })}
                  </Form.Select>
          </Col>
              <Col>
              <label>Set priority level:</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              </Col>
          </Row>
          <div>
            <div>
              <button onClick={_AcceptTicket} className="accept" type="button">ACCEPT AS TICKET</button>
              <button onClick={_openRejectRequest} className="reject">REJECT REQUEST</button>
              {rejectPopup?
                <div className="form-popup">
                  <div> 
                    <center><div className="form-popup-title">REJECT SERVICE REQUEST</div></center>
                      <div className="void-ticket-form">
                          <div>
                              <div className="create">
                              <label>Reason</label>
                               <Form.Select
                                  className="mb-3"
                                  value={reason}
                                  onChange={(item) => {
                                    _SelectReason(item.target.value,item.target.options[item.target.selectedIndex].text)
                                  }}
                                >
                                  {reasonList.map((e, key) => {
                                    return <option key={key} value={e['id']}>{e['reason']}</option>;
                                  })}
                                </Form.Select>
                                  <label>Remarks</label>
                                  <textarea
                                      placeholder="Write your remarks here..."
                                  required
                                  value={remarks}
                                  onChange={(e) => setRemarks(e.target.value)}
                                  ></textarea>
                                  <button type="button" onClick={_RejectRequest}>Confirm</button>
                              </div>
                          </div>




                      </div>
                        <button onClick={closePopup} className="cancel">Cancel</button>                             
                      </div>                                  
                      
                      </div>  :""}
          
            </div>
                        </div>
                            
        </div>
    </center>
    </div>
  );
}
 
export default RequestDesignationForm;