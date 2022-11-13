import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const ANVoidingReasonForm = () => {
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  return (
    <div className="create">
      <form>
        <label>Reason</label>
        <input 
          type="text" 
          placeholder="Enter reason for voiding tickets..."
          required 
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <label>Description</label>
        <textarea
            placeholder="Write a short description of the reason..."
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
        
        <button>Save New Reason</button>
        <Link to='../pages_admin/templates/voiding-ticket-reasons'>
        <button className="cancel">Cancel</button></Link>
        
      </form>
    </div>
  );
}
 
export default ANVoidingReasonForm;