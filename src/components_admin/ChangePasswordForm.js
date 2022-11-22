import React, { useEffect, useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {URL} from '../components_connection/'

export function ChangePasswordForm(props) {
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");


  const _changePassword = () => {
    if(password == cPassword) {
      let user_id = localStorage.getItem('selected_user_id'); 
      let f =  new FormData()
      f.append("tag","admin_changepassword")
      f.append("password", password)
      f.append("user_id", user_id)

      axios.post(URL,f).then(res2=>{
        var output = JSON.parse(res2.data);
        console.log(output['status']);
        switch(output['status']) {
          case 'updated':
            alert("password is updated!");
            window.location.reload();
          break;
          case 'error':
            alert("error");
          break;
        }
      }).catch(err=>{
        console.log(err.message);
      })
    } else {
      alert("passwords do not match");
    }
    
  }

  

  return (
    <div className="create">
      <div className="create-popup">
        <label>Set Password</label>
        <input
          type="password"
          placeholder="Enter new password..."
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm new password..."
          required
          value={cPassword}
          onChange={(e) => setCPassword(e.target.value)}
        />

        <button onClick={_changePassword} className="save-pw">
          Save Password
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
