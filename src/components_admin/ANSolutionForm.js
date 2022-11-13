import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const ANSolutionForm = () => {
  const [solution, setSolution] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  return (
    <div className="create">
      <form>
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
        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        
        <button>Save New Solution</button>
        <Link to='../pages_admin/templates/resolving-tickets-solutions'>
        <button className="cancel">Cancel</button></Link>
        
      </form>
    </div>
  );
}
 
export default ANSolutionForm;