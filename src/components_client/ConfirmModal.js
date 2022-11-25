import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';


const ModalHeader = styled.div`
	border-bottom: 0 none;
	padding: 0%;
`;
const ModalWrapper = styled.div`
  padding: 8%;
`;
const ModalTitle = styled.p`
  font-size: 2rem;
  color: #f27427;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 480px) {
	font-size: 1.5rem;
  }
`;
const ModalBody = styled.div`
  font-size: 2rem;
  align-items: left;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
`;
const Text1 = styled.p`
  font-size: 1.4rem;
  color: #f27427;
  text-align: justify;
  font-weight: bold;
  margin-top: -20px;
  @media screen and (max-width: 480px) {
	font-size: 1rem;
  }
`;
const Button1 = styled.button`
  font-size: 1rem;
  font-weight: bold;
  background: red;
  border: none;
  padding: 0.8rem 1.5rem;
  color: #fff;
  transition: all 0.2s ease-out;
  text-decoration: none;
  margin-right: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
	background: #f27427;
	transition: all 0.2s ease-out;
	cursor: pointer;
	color: #fff;
  }
`;

const Button2 = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  background: #1abdd3;
  border: none;
  padding: 0.8rem 1.5rem;
  color: #fff;
  transition: all 0.2s ease-out;
  text-decoration: none;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
	background: #7db542;
	transition: all 0.2s ease-out;
	cursor: pointer;
	color: #fff;
  }
`;
const ModalFooter = styled.div`
  /* display: flex;
  flex-direction: flex-start;
  justify-content: center; */
  margin-top: 5%;
  /* margin-top: 15px; */
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;



export function ConfirmModal(props) {
	//INITIAL VALUES
	const [fullname, setFullName] = useState(""); 				//fullname
	const [email, setEmail] = useState(""); 					//email
	const [role, setRole] = useState(""); 						//role
	const [other_role, setOtherRole] = useState(""); 			//other role
	const [college_affiliation, setAffiliation] = useState(""); //college affiliation
	const [category, setCategory] = useState(""); 				//category
	const [other_category, setOtherCategory] = useState(""); 	//other category
	const [issue, setIssue] = useState(""); 					//issue
	const [other_issue, setOtherIssue] = useState(""); 			//other issue
	const [description, setDescription] = useState(""); 		//description
	const [file, setFile] = useState("");

	// modal value display
	const [roleText, setRoleText] = useState("");
	const [categoryText, setCategoryText] = useState("");
	const [issueText, setIssueText] = useState("");


	const [hasLoaded, setHasLoaded] = useState(false); //modalState
 
 	let navigate = useNavigate(); 
	const routeChange = () =>{ 
		let path = '/ticketsubmitted'; 
		navigate(path);
	}

	const _modalShown = () => {
		let URL = 'http://localhost/php_capstone_api/index.php';
		setFullName(sessionStorage.getItem("name"));
		setEmail(sessionStorage.getItem("email"));
		setRole(sessionStorage.getItem("role"));
		setOtherRole(sessionStorage.getItem("other_role"));
		setAffiliation(sessionStorage.getItem("college_affiliation"));
		setCategory(sessionStorage.getItem("category"));
		setOtherCategory(sessionStorage.getItem("other_category"));
		setIssue(sessionStorage.getItem("issue"));
		setOtherIssue(sessionStorage.getItem("other_issue"));
		setDescription(sessionStorage.getItem("description"));
		setFile(sessionStorage.getItem("file"));
		//modal texts
		setRoleText(sessionStorage.getItem("role_text"));
		setCategoryText(sessionStorage.getItem("category_text"));
		setIssueText(sessionStorage.getItem("issue_text"));
	}


	
	const _finalSubmit = () => {
		let URL = 'http://localhost/php_capstone_api/index.php';
		let f =  new FormData()
		f.append("tag","insert_ticket")
		f.append("name", fullname)
		f.append("email", email)
		f.append("role", role)
		f.append("other_role", other_role)
		f.append("affiliation", college_affiliation)
		f.append("category", category)
		f.append("other_category", other_category)
		f.append("issue", issue)
		f.append("other_issue", other_issue)
		f.append("description", description)
		f.append("file", file)

		axios.post(URL,f).then(res2=>{
			console.log(res2.data);
			var output = JSON.parse(res2.data);
			console.log(output['status']);
			switch(output['status']) {
				case 'inserted':
					routeChange();
				break;
				case 'error':
					alert("error");
				break;
			}
		}).catch(err=>{
			console.log(err.message);
		})
	}
  return (
	<Modal
	  {...props}
	  size="lg"
	  aria-labelledby="contained-modal-title-vcenter"
	  centered
	  backdrop="static"
	  keyboard={false}
	  onEntered  = {()=>{_modalShown()}}
	>
	  {/* <Modal.Dialog> */}
	  <ModalWrapper>
		<ModalHeader closeButton>
		  <ModalTitle id="contained-modal-title-vcenter">
			CONFIRM INFORMATION
		  </ModalTitle>
		</ModalHeader>
		<ModalBody>
		  {" "}
		  <Text1>Name: {fullname}</Text1>
		  <Text1>UST Email Address: {email}</Text1>
		  <Text1>Role: {roleText}</Text1>
		  <Text1>College Affiliation: {college_affiliation}</Text1>
		  <Text1>Category: {categoryText}</Text1>
		  <Text1>Issue: {issueText}</Text1>
		  <Text1>Description: {description}</Text1>
		  <Text1>File: {file}</Text1>
		</ModalBody>
		<ModalFooter>
		  <Button2 value="send" onClick={_finalSubmit}>
			CONFIRM
		  </Button2>
		  <Button1 onClick={props.onHide}>CANCEL</Button1>
		</ModalFooter>
		{/* </Modal.Dialog> */}
	  </ModalWrapper>
	</Modal>
  );
}

export default ConfirmModal;
