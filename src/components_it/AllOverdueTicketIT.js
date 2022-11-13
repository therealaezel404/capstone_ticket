import React from 'react';


const AllOverdueTicketIT = () => {
    return(
        <div>
               <h3> <b>Ticket Reference Code: 12345678</b></h3>
                            <p>Date Assigned: 2022-05-11 22:34:25<br></br>
                            Date Overdue: 2022-05-19 22:34:25</p>
                            
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

                            </div>

                        
                            <div>
                                <div className='ticket-designations'>
                                <div className="assigned-to">
                                    <div><b>Assigned to:</b></div>
                                    <div className="assigned-to-name">Pedro Penduko</div>
                                </div>
                                <div className="priority-level">
                                    <div><b>Priority level:</b></div>
                                    <div className="priority-level-number">3</div>
                                </div>
                                </div>
                            </div>
                            
        </div>
    );
}

export default AllOverdueTicketIT;