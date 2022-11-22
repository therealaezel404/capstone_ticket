import React, { useEffect, useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {URL} from '../components_connection/'


export function EditUserForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    let user_id=localStorage.getItem('selected_user_id');
    axios.get(URL + "?tag=get_userdatabyid&user_id="+user_id).then(res=>{
      setFirstName(res.data[0]['first_name'])
      setLastName(res.data[0]['last_name'])
      setMiddleName(res.data[0]['middle_name'])
      setEmail(res.data[0]['email'])
      console.log(res.data);
      setRole(res.data[0]['user_role'])
      setStatus(res.data[0]['user_status'])
    })
  },[])

  const _editUser = () => {
      let user_id = localStorage.getItem('selected_user_id'); 
      let f =  new FormData()
      f.append("tag","admin_edituserinfo")
      f.append("fname", firstName)
      f.append("lname", lastName)
      f.append("mname", middleName)
      f.append("email", email)
      f.append("role", role)
      f.append("status", status)
      f.append("user_id", user_id)

      axios.post(URL,f).then(res2=>{
        var output = JSON.parse(res2.data);
        console.log(output['status']);
        switch(output['status']) {
          case 'updated':
            alert("user info is updated!");
            window.location.reload();
          break;
          case 'error':
            alert("error");
          break;
        }
      }).catch(err=>{
        console.log(err.message);
      }) 
  }


  return (
    <div className="create">
        <div className="full-name">
          <label>First Name:</label>
          <input
            type="text"
            placeholder="User's Full Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="full-name">
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="User's Full Name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="full-name">
          <label>M.I:</label>
          <input
            type="text"
            placeholder="User's Full Name"
            required
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>

        <label>Email</label>
        <input
          type="email"
          placeholder="email1234@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <span>
          <div className="split-input-role">
            <label>User Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="1">Admin</option>
              <option value="2">Help Desk</option>
              <option value="3">IT Support</option>
            </select>
          </div>
        </span>

        <div className="split-input-status">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button onClick={_editUser}>Save Changes</button>
    </div>
  );
};

export default EditUserForm;
