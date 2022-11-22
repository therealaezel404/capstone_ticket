import React, { useEffect, useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {URL} from '../components_connection/'


export function ANRejReasonForm(props) {
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_admin/templates/rejecting-requests-reasons'; 
    navigate(path);
  }

  const _addReason = () => {
    if(reason != "") {
      let f =  new FormData()
      f.append("tag","add_reason")
      f.append("reason", reason)
      f.append("reason_desc", description)

      axios.post(URL,f).then(res2=>{
        var output = JSON.parse(res2.data);
        console.log(output['status']);
        switch(output['status']) {
          case 'inserted':
            routeChange();
          break;
          case 'error':
            alert("error");
          break;
        }
      }).catch(err=>{
        console.log(err.message);
      })
    } else {
      alert("invalid reason");
    }
    
  }

  return (
    <div className="create">
        <label>Reason</label>
        <input 
          type="text" 
          placeholder="Enter reason for rejecting requests..."
          required 
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <label>Description</label>
        <textarea
            placeholder="Write a short description of the reason..."
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        
        <button onClick={_addReason}>Save New Reason</button>
        <Link to='../pages_admin/templates/rejecting-requests-reasons'>
        <button className="cancel">Cancel</button></Link>
    </div>
  );
}
 
export default ANRejReasonForm;