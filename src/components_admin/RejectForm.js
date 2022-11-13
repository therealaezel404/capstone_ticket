import React from "react";
import { useState } from "react";


const RejectForm     = () => {
    const [reason, setReason] = useState('');
    const [description, setDescription] = useState('');

    return(
        <div>
            <div className="create">
            <form>

            <label>Reason</label>
                <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    >
                    <option value="reason1">Reason1</option>
                    <option value="reason2">Reason2</option>
                    <option value="reason3">Reason3</option>
                    <option value="other">Other</option>
                </select>
               
                <label>Remarks</label>
                <textarea
                    placeholder="Write your remarks here..."
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                
                
                <button type="submit">Confirm</button>
                
                
            </form>
            </div>
        </div>
    );
}

export default RejectForm   ;