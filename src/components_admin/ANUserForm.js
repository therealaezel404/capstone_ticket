import React, { useEffect, useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import {URL} from '../components_connection/'
import Form from "react-bootstrap/Form";

export function ANUserForm(props) {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [middleInitial, setMiddleInitial] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [hasLoaded, setHasLoaded] = useState(false);
  const [roles, setRoles] = useState([]);


  useEffect(()=>{
    if(hasLoaded == false) {
      axios.get(URL + "?tag=get_user_roles").then(res=>{
        setRoles(res.data);
        if(roles != "") {
          console.log(roles);
          setHasLoaded(true);
        }
      })
    }
  })

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_admin/users'; 
    navigate(path);
  }

  const _SelectRole = (data1,data2) => {
    setRole(data1);
  }
  

  const _addUser = () => {
      if(password == cPassword) {
         let f =  new FormData()
        f.append("tag","insert_user")
        f.append("first_name", firstName)
        f.append("last_name", surname)
        f.append("middle_initial", middleInitial)
        f.append("email", email)
        f.append("password", password)
        f.append("user_role", role)
        f.append("status", status)

        axios.post(URL,f).then(res2=>{
          var output = JSON.parse(res2.data);
          console.log(output['status']);
          switch(output['status']) {
            case 'inserted':
              alert("User added successfully");
              routeChange();
            break;
            case 'error':
              alert("error");
            break;
          }
        }).catch(err=>{
          console.log(err.message);
        })
      } else if(password != cPassword) {
        alert("password & confirm password is not the same.")
      }
  }

  
  return (
    <div className="create">
      <div className="name-input-surname">
        <label>Surname</label>
        <input 
          type="text" 
          placeholder="User's last name"
          required 
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        /></div>

        <div className="name-input-first">
        <label>First Name</label>
        <input 
          type="text" 
          placeholder="User's first name"
          required 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        /></div>

        <div className="name-input-mi">
        <label>M.I.</label>
        <input 
          type="text" 
          placeholder="M.I."
          required 
          value={middleInitial}
          onChange={(e) => setMiddleInitial(e.target.value)}
        /></div>

        <label>Email</label>
        <input 
          type="email" 
          placeholder="email1234@example.com"
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className='split-input'>
        <label>Password</label>
        <input 
          type="password" 
          placeholder="Set User Password"
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /></div>

        <span><div className='split-input'>
        <label>Confirm Password</label>
        <input 
          type="password" 
          placeholder="Confirm User Password"
          required 
          value={cPassword}
          onChange={(e) => setCPassword(e.target.value)}
        /></div></span>

        <span><div className="split-input">
        <label>User Role</label>
        <Form.Select
          className="mb-3"
          value={role}
          onChange={(item) => {
            _SelectRole(item.target.value,item.target.options[item.target.selectedIndex].text)
          }}
        >
        <option key={0} value={0}>Choose Roles</option>;
          {roles.map((e, key) => {
            return <option key={key} value={e['id']}>{e['user_rolename']}</option>;
          })}
        </Form.Select>



        </div></span>

        <div className="split-input">
        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </select></div>
        
        <button onClick={_addUser}>Save New User Account</button>
        <button className="cancel">Cancel</button>
    </div>
  );
}
 
export default ANUserForm;