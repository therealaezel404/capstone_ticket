import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PermissionsCheckboxForm from "./PermissionsCheckbox";



const VEUserRole = () => {
  const [roleName, setRoleName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  return (
    <div>
      <form>
        <div className="create">
        <label>Role</label>
        <input 
          type="text" 
          placeholder=""
          required 
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
        />
        <label>Description</label>
        <textarea
            placeholder=""
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div className="cnur-status"><label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select></div>
       </div>

        <div className="permissions-form"> <PermissionsCheckboxForm /></div>
       

        <div className="create">
        <button>Update Role</button>
        <Link to='../pages_admin/userroles'>
        <button className="cancel">Cancel</button></Link>
        </div>

      </form>
    </div>
  );
}
 
export default VEUserRole;