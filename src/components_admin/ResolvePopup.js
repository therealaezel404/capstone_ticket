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

  const _submitResolve = () => {
    let trc=localStorage.getItem('selected_ticketnumber')
    let f =  new FormData()
    f.append("tag","submitresolvemessage")
    f.append("trc", trc)
    f.append("solution", solution)
    f.append("remarks", description)

    axios.post(URL,f).then(res2=>{
      var output = JSON.parse(res2.data);
      console.log(output['status']);
      switch(output['status']) {
        case 'updated':
          alert("sucessfully updated!");
        break;
        case 'error':
          alert("error");
        break;
      }
    }).catch(err=>{
      console.log(err.message);
    })
  }

  useEffect(() => {
    let trc=localStorage.getItem('selected_ticketnumber')
    axios.get(URL + "?tag=get_resolvelist").then(res=>{
      setResolveList(res.data);
    })
  },[])


  const _SelectSolution = (data1,data2) => {
    console.log(data1);
    setSolution(data1);
  };

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
                <label>Solution</label>
                  <Form.Select
                      className="mb-3"
                      name="role"
                      value={solution}
                      onChange={(item) => {
                          _SelectSolution(item.target.value,item.target.options[item.target.selectedIndex].text)
                      }}
                  >
                    <option key={0} value={0}>Choose Solution..</option>;
                    {resolvelist.map((e, key) => {
                      return <option key={key} value={e['id']}>{e['solution']}</option>;
                    })}
                  </Form.Select>
                    <label>Remarks</label>
                      <textarea
                          placeholder="Write your remarks here..."
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                      >
                      </textarea>
                  <button onClick={_submitResolve}>Confirm</button>
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
