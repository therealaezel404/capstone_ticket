import React, { useEffect, useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {URL} from '../components_connection/'

export function ANSolutionForm(props) {
  const [solution, setSolution] = useState('');
  const [description, setDescription] = useState('');

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_admin/templates/resolving-tickets-solutions'; 
    navigate(path);
  }

  const _addSolution = () => {
    if(solution != "") {
      let f =  new FormData()
      f.append("tag","add_solution")
      f.append("solution", solution)
      f.append("solution_description", description)

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
        <label>Solution</label>
        <input 
          type="text" 
          placeholder="Enter solution for resolving tickets..."
          required 
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
        />
        <label>Description</label>
        <textarea
            placeholder="Write a short description of the solution..."
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        
        <button onClick={_addSolution}>Save New Solution</button>
        <Link to='../pages_admin/templates/resolving-tickets-solutions'>
        <button className="cancel">Cancel</button></Link>
    </div>
  );
}
 
export default ANSolutionForm;