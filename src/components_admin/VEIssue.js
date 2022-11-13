import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const VEIssue = () => {
  const [issueName, setIssueName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  return (
    <div className="create">
      <form>
        <label>Issue</label>
        <input 
          type="text" 
          placeholder=""
          required 
          value={issueName}
          onChange={(e) => setIssueName(e.target.value)}
        />

        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
          <option value="category4">Category 4</option>
        </select>

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
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        
        <button>Update Issue</button>
        <Link to='../pages_admin/categories/issue-list'>
        <button className="cancel">Cancel</button></Link>
        
      </form>
    </div>
  );
}
 
export default VEIssue;