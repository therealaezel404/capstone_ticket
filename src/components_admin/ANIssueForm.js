import React, { useEffect, useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {URL} from '../components_connection/'

export function ANIssueForm(props) {
  const [issueName, setIssueName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [hasLoaded, setHasLoaded] = useState(false);
  const [categories, setCategories] = useState([]); // category_array
  

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '../pages_admin/categories/issue-list'; 
    navigate(path);
  }


  useEffect(()=>{
    if(hasLoaded == false) {
      axios.get(URL + "?tag=get_categories").then(res=>{
        setCategories(res.data);
        if(categories != "") {
          console.log(categories);
          setHasLoaded(true);
        }
      })
    }
  })

  const _addIssue = () => {
    if(category != 0) {
      let f =  new FormData()
      f.append("tag","insert_issue")
      f.append("issue_name", issueName)
      f.append("category_id", category)
      f.append("issue_description", description)
      f.append("issue_status", status)

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
      alert("invalid category");
    }
    
  }

  const _SelectCategory = (data1,data2) => {
    setCategory(data1);
  }

  return (
    <div className="create">
        <label>Issue</label>
        <input 
          type="text" 
          placeholder="Enter a name for your new issue..."
          required 
          value={issueName}
          onChange={(e) => setIssueName(e.target.value)}
        />

        <label>Category</label>
        <Form.Select
              className="mb-3"
              value={category}
              onChange={(item) => {
                _SelectCategory(item.target.value,item.target.options[item.target.selectedIndex].text)
              }}
            >
            <option key={0} value={0}>Choose Category</option>;
              {categories.map((e, key) => {
                return <option key={key} value={e['category_id']}>{e['category_name']}</option>;
              })}
            </Form.Select>

        <label>Description</label>
        <textarea
            placeholder="Write a short description of the issue..."
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
        
        <button onClick={_addIssue}>Save New Issue</button>
        
        <button className="cancel">Cancel</button>
    </div>
  );
}
 
export default ANIssueForm;