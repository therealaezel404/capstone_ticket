import React, { useEffect, useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {URL} from '../components_connection/'
import axios from 'axios';

export function ANCatForm(props) {

  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_admin/categories/category-list'; 
    navigate(path);
  }
  
  const _addCategory = () => {
    let f =  new FormData()
    f.append("tag","insert_category")
    f.append("category_name", categoryName)
    f.append("category_description", description)
    f.append("category_status", status)

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
  }
  
  return (
    <div className="create">
        <label>Category Name</label>
        <input 
          type="text" 
          placeholder="Enter a name for your new category..."
          required 
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <label>Description</label>
        <textarea
            placeholder="Write a short description of the category..."
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        
        <button onClick={_addCategory}>Save New Category</button>
        <button className="cancel">Cancel</button>
    </div>
  );
}
 
export default ANCatForm;