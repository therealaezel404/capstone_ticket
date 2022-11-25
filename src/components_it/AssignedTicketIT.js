import React, { useEffect, useRef, useState } from "react";
import VoidPopup from './VoidPopup';
import ResolvePopup from './ResolvePopup';
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import {URL} from '../components_connection/'

export function AssignedTicketIT(props) {
    const [trc, setTrc] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [affiliation, setAffiliation] = useState("");
    const [date_req, setDateRequested] = useState("");
    const [category, setCategory] = useState("");
    const [issue, setIssue] = useState("");
    const [severity, setSeverityLevel] = useState("");
    const [description, setDescription] = useState("");
    const [attached_files, setAttachedFiles] = useState("");


    useEffect(() => {
        let trc=localStorage.getItem('selected_ticketnumber')
        axios.get(URL + "?tag=get_specificticket&trc="+trc).then(res=>{
            setTrc(trc);
            setName(res.data[0]['name']);
            setEmail(res.data[0]['email']);

            switch (res.data[0]['role']) {
                case '1': // Admin/Acad Official
                    setRole("Admin/Acad Official");
                break;
                case '2': // Academic Staff
                    setRole("Academic Staff");
                break;
                case '3': // Non-academic Staff
                    setRole("Non-academic Staff");
                break;
                case '4': // Student
                    setRole("Student");
                break;
                default:
                    setRole("Other");
                break;
            }
            setAffiliation(res.data[0]['affiliation']);
            setDateRequested(res.data[0]['date_added']);
            setCategory(res.data[0]['category_name']);
            setIssue(res.data[0]['issue_name']);
            setSeverityLevel(res.data[0]['priority_level']);

            setDescription(res.data[0]['description']);
            setAttachedFiles(res.data[0]['file']);
            console.log(res.data);
        })
      },[])


       return (
            <div>
                <div>
                    <h3> <b>Request Number: {trc}</b></h3>
                    <p>Date Requested: {date_req}</p>
                    <div className="information-card">
                        <center className="information-card-subheading">Requester Information</center>
                        <span className="information-info-title">TRC: </span><span className="information-info">{trc}</span>
                        <br></br>
                        <span className="information-info-title">Name: </span><span className="information-info">{name}</span>
                        <br></br>
                        <span className="information-info-title">Email: </span><span className="information-info">{email}</span>
                        <br></br>
                        <span className="information-info-title">Role: </span><span className="information-info">{role}</span>
                        <br></br>
                        <span className="information-info-title">Affiliation: </span><span className="information-info">{affiliation}</span>
                        <br></br>
                        <span className="information-info-title">Date Requested: </span><span className="information-info">{date_req}</span>

                        <br></br>
                        <br></br>

                        <center className="information-card-subheading">Service Request Information</center>
                        <span className="information-info-title">Category: </span><span className="information-info">{category}</span>
                        <br></br>
                        <span className="information-info-title">Issue: </span><span className="information-info">{issue}</span>
                        <br></br>
                        <span className="information-info-title">Severity Level: </span><span className="information-info">{severity}</span>
                          <br></br>   
                        <span className="information-info-title">Description: </span>
                        <br></br><div className="information-info">{description}</div><br></br>
                        <span className="information-info-title">Attached Files: </span><br></br>
                        <button className="attached-file">{attached_files}</button>
                        <br></br>

                    </div>

            <div className='ticket-designations'>
            <div className="ticket-actions">
                <div>
                    <span className="void-button">
                        <VoidPopup />
                    </span>
                    <span className="resolve-button">
                        <ResolvePopup />
                    </span>
                </div>
            </div>
            </div>
                </div>
            </div>
        );
}

export default AssignedTicketIT;