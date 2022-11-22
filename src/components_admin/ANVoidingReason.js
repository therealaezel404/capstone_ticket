import React, { useEffect, useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {URL} from '../components_connection/'


const ANVoidingReasonForm = () => {
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_admin/templates/voiding-ticket-reasons'; 
    navigate(path);
  }

  const _addVoidReason = () => {
    if(reason != "") {
      let f =  new FormData()
      f.append("tag","add_voidreason")
      f.append("reason", reason)
      f.append("void_description", description)

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
          placeholder="Enter reason for voiding tickets..."
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
        
        <button onClick={_addVoidReason}>Save New Reason</button>
        <Link to='../pages_admin/templates/voiding-ticket-reasons'>
        <button className="cancel">Cancel</button></Link>
    </div>
  );
}
 
export default ANVoidingReasonForm;