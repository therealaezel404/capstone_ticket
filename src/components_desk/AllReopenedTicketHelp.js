import React from 'react';
import TicketAssignmentForm from './TicketAssignmentForm';


const AllReopenedTicketHelp = () => {
    return(
        <div>
                <h3> <b>Ticket Reference Code: 12345678</b></h3>
                            <p>Date Assigned: 2022-05-11 22:34:25</p>
                            <div className="information-card">
                                <center className="information-card-subheading">Requester Information</center>
                                <span className="information-info-title">TRC: </span><span className="information-info">12345678</span>
                                <br></br>
                                <span className="information-info-title">Name: </span><span className="information-info">Cruz, Juan</span>
                                <br></br>
                                <span className="information-info-title">Email: </span><span className="information-info">juan@gmail.com</span>
                                <br></br>
                                <span className="information-info-title">Role: </span><span className="information-info">Student</span>
                                <br></br>
                                <span className="information-info-title">Affiliation: </span><span className="information-info">College of Information Systems</span>
                                <br></br>
                                <span className="information-info-title">Date Requested: </span><span className="information-info">2022-12-12 11:11:11</span> 

                                <br></br>
                                <br></br>         

                                <center className="information-card-subheading">Service Request Information</center>   
                                <span className="information-info-title">Category: </span><span className="information-info">Google, Office 365, Adobe Creative Cloud</span>
                                <br></br>
                                <span className="information-info-title">Issue: </span><span className="information-info">Zoom</span>
                                <br></br>
                                <span className="information-info-title">Severity Level: </span><span className="information-info">3</span>
                                <br></br>                        
                                <span className="information-info-title">Description: </span>
                                <br></br><div className="information-info">Zoom meetings are not working</div><br></br>
                                <span className="information-info-title">Attached Files: </span><br></br>
                                <button className="attached-file">screenshot.jpg</button>
                                <br></br> 
                                <br></br>
                                <center className="information-card-subheading">Reopen Ticket Request Information</center>   
                                <span className="information-info-title">Solution: </span><span className="information-info">Others</span>
                                <br></br>
                                <span className="information-info-title">Date Resolved: </span><span className="information-info">2022-12-12 11:11:11</span>
                                <br></br>
                                <span className="information-info-title">Date of Reopen Request: </span><span className="information-info">2022-12-20 15:11:11</span>
                                <br></br>                        
                                <span className="information-info-title">Description: </span>
                                <br></br><div className="information-info">Zoom meetings are still not working</div><br></br>
                                <span className="information-info-title">Attached Files: </span><br></br>
                                <button className="attached-file">screenshot.jpg</button>
                                <br></br>      

                            </div>
                            
                            <div>
                                <TicketAssignmentForm/>
                            </div>
                            
        </div>
    );
}

export default AllReopenedTicketHelp;