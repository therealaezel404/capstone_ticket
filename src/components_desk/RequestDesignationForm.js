import React from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const RequestDesignationForm = () => {
  const [assignTo, setAssign] = useState('');
  const [priority, setPriority] = useState('');

  return (
    <div className="create">
    <center><div className="ticket-assignment-form">
      <form>
        
<Row>
    <Col>
        <label>Assign to:</label>
        <select
          value={assignTo}
          onChange={(e) => setAssign(e.target.value)}
        >
          <option value="user1">Pedro Penduko</option>
          <option value="user2">Juan Dela Cruz</option>
          <option value="user3">Annabelle Smith</option>
          <option value="user4">Jessica Laba</option>
        </select>   
    </Col>
        <Col>
        <label>Set priority level:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="priority1">1</option>
          <option value="priority2">2</option>
          <option value="priority3">3</option>
          <option value="priority4">4</option>
          <option value="priority5">5</option>
        </select>
        </Col></Row>

                
      </form>
    </div>
    </center>
    </div>
  );
}
 
export default RequestDesignationForm;