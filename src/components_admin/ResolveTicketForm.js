import React from "react";
import { useState } from "react";


const ResolveTicketForm = () => {
    const [solution, setSolution] = useState('');
     const [description, setDescription] = useState('');

    return(
        <div>
            <div className="create">
            <form>

            <label>Solution</label>
                <select
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    >
                    <option value="solution1">Solution1</option>
                    <option value="solution2">Solution 2</option>
                    <option value="solution3">solution 3</option>
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

export default ResolveTicketForm;