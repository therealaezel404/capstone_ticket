import React, { useEffect, useRef, useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import VoidTicketForm from "./VoidTicketForm";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'
import Form from "react-bootstrap/Form";



export function ResolvePopup(props) {
  const [popup, setPop] = useState(false);
  const [solution, setSolution] = useState('');
  const [description, setDescription] = useState('');
  const [resolvelist, setResolveList] = useState([]);

  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };

  useEffect(() => {
    let trc=localStorage.getItem('selected_ticketnumber')
    axios.get(URL + "?tag=get_resolvelist").then(res=>{
      setResolveList(res.data);
    })
  },[])

  return (
    <div>
      <button onClick={handleClickOpen} className="resolve">
        RESOLVE
      </button>
      {popup ? (
        <div className="form-popup">
          <div>
            <center>
              <div className="form-popup-title">RESOLVE TICKET</div>
            </center>

            <div className="resolve-ticket-form">
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

            <button onClick={closePopup} className="cancel">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResolvePopup;
