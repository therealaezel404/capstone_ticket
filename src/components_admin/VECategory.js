import React, { useEffect, useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'
import axios from 'axios';


export function VECategory(props) {
  const [hasLoaded, setLoadedState] = useState(false);
  const [category_name, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  let navigate = useNavigate(); 

  const routeChange = () => { 
    let path = '../pages_admin/categories/category-list'; 
    navigate(path);
  }

  useEffect(() => {
    var category_id = localStorage.getItem('category_id');
    if(hasLoaded == false) {
      axios.get(URL + "?tag=get_categorybyid&category_id="+category_id).then(res=>{
        setCategoryName(res.data[0]['category_name']);
        setDescription(res.data[0]['category_description']);
        setLoadedState(true);
      })
    }
  })

  const _updateCategory = () => {
    var category_id=localStorage.getItem('category_id');
      let f =  new FormData()
      f.append("tag","update_category")
      f.append("category_id", category_id)
      f.append("category_name", category_name)
      f.append("category_description", description)
      f.append("category_status", status)

      axios.post(URL,f).then(res2=>{
        var output = JSON.parse(res2.data);
        switch(output['status']) {
          case 'updated':
            routeChange();
          break;
          case 'error':
            alert('error');
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
          placeholder=""
          required 
          value={category_name}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <label>Description</label>
        <textarea
            placeholder=""
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </select>
        
        <button onClick={_updateCategory}>Update Category</button>
        <Link to='../pages_admin/categories/category-list'>
          <button className="cancel">Cancel</button>
        </Link>
    </div>
  );
}
 
export default VECategory;