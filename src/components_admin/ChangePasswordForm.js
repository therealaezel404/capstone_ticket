import React from "react";
import { useState } from "react";

const ChangePasswordForm = () => {
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  return (
    <div className="create">
      <div className="create-popup">
        <form>
          <label>Set Password</label>
          <input
            type="password"
            placeholder="Enter new password..."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm new password..."
            required
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />

          <button type="submit" className="save-pw">
            Save Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
