import React, { useEffect, useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {URL} from '../components_connection/'

export function VERejectingReason(props) {
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_admin/templates/rejecting-requests-reasons'; 
    navigate(path);
  }


  useEffect(()=>{
    _fetchReasonData();
  },[])

  const _fetchReasonData = () => {
    let reason_id=localStorage.getItem('selected_reason_id')
    axios.get(URL + "?tag=get_reasonsdata&reason_id="+reason_id).then(res=>{
      setReason(res.data[0]['reason']);
      setDescription(res.data[0]['reason_desc']);
    })
  }

  const _editReason = () => {
    if(reason != "") {
      let reason_id=localStorage.getItem('selected_reason_id')
      let f =  new FormData()
      f.append("tag","edit_reason")
      f.append("reason_id", reason_id)
      f.append("reason", reason)
      f.append("reason_desc", description)

      axios.post(URL,f).then(res2=>{
        var output = JSON.parse(res2.data);
        console.log(output['status']);
        switch(output['status']) {
          case 'updated':
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
          placeholder=""
          required 
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <label>Description</label>
        <textarea
            placeholder=""
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        
        <button onClick={_editReason}>Update Reason</button>
        <Link to='../pages_admin/templates/rejecting-requests-reasons'>
        <button className="cancel">Cancel</button></Link>
    </div>
  );
}
 
export default VERejectingReason;