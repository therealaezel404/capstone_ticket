import React from "react";
import { useState } from "react";

const EditUserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="create">
      <form>
        <div className="full-name">
          <label>Full Name:</label>
          <input
            type="text"
            placeholder="User's Full Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <label>Email</label>
        <input
          type="email"
          placeholder="email1234@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <span>
          <div className="split-input-role">
            <label>User Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="helpDesk">Help Desk</option>
              <option value="itSupport">IT Support</option>
            </select>
          </div>
        </span>

        <div className="split-input-status">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditUserForm;
