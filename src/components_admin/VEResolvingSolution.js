import React, { useEffect, useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {URL} from '../components_connection/'


export function VEResolvingSolution(props) {
  const [solution, setSolution] = useState('');
  const [description, setDescription] = useState('');

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_admin/templates/resolving-tickets-solutions'; 
    navigate(path);
  }

  useEffect(()=>{
    _fetchSolutionData();
  },[])

  const _fetchSolutionData = () => {
    let solution_id=localStorage.getItem('selected_solution_id')
    axios.get(URL + "?tag=get_solutiondata&solution_id="+solution_id).then(res=>{
      setSolution(res.data[0]['solution']);
      setDescription(res.data[0]['solution_description']);
    })
  }

  const _editSolution = () => {
    if(solution != "") {
      let solution_id=localStorage.getItem('selected_solution_id')
      let f =  new FormData()
      f.append("tag","edit_solution")
      f.append("solution_id", solution_id)
      f.append("solution", solution)
      f.append("solution_description", description)

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
      alert("invalid solution");
    }
    
  }

  return (
    <div className="create">
        <label>Solution</label>
        <input 
          type="text" 
          placeholder=""
          required 
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
        />
        <label>Description</label>
        <textarea
            placeholder=""
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        
        <button onClick={_editSolution}>Update Solution</button>
        <Link to='../pages_admin/templates/resolving-tickets-solutions'>
        <button className="cancel">Cancel</button></Link>
    </div>
  );
}
 
export default VEResolvingSolution;