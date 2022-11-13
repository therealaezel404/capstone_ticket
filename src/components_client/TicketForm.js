import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { Formik } from "formik";
import * as yup from "yup";
import ConfirmModal from "./ConfirmModal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

const schema = yup.object().shape({
	fullname: yup
		.string()
		.min(4, "Please enter a valid full name.")
		.required("Please enter your full name."),
	email: yup
		.string()
		.min(9, "Please enter a valid email address.")
		.required("Provide a valid email address."),
	role: yup.string().required("Please select your role."),
	otherRole: yup.string().required("Please state your role."),
	collegeAffiliation: yup
		.string()
		.required("Please select your affiliated college."),
	category: yup.string().required("Please select a category."),
	otherCategory: yup
		.string()
		.min(3, "Please enter a valid category.")
		.required("Please indicate the category of the problem."),
	issue: yup.string().required("Please select an issue."),
	otherIssue: yup
		.string()
		.min(3, "Please enter a valid issue.")
		.required("Please state your issue."),
	description: yup.string().required("Please describe the situation."),
	uploadFile: yup.mixed().required("Please provide a screenshots."),
});

const Button1 = styled.button`
	font-size: 1rem;
	font-weight: bold;
	background: #1abdd3;
	border: none;
	padding: 0.8rem 3rem;
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

const BtnWrapper = styled.div`
	margin-top: 15px;
	display: flex;
	flex-direction: flex-start;
	justify-content: center;
`;

let items=[];

export function TicketForm(props) {
	let URL = 'http://localhost/php_capstone_api/index.php';
	const [categories, setCategories] = useState([]); // category_array
	const [issues, setIssues] = useState([]); // issues_array

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
	const [file, setFile] = useState(""); 						//file


	// modal value display
	const [roleText, setRoleText] = useState("");
	const [categoryText, setCategoryText] = useState("");
	const [issueText, setIssueText] = useState("");


	const [hasLoaded, setHasLoaded] = useState(false);
	const [issuesLoaded, setIssuesLoaded] = useState(false);
	const [modalShow, setModalShow] = useState(false);
	const [validationRequired] = useState(false);
	const ref = useRef();


	const _selectFile = (data) => {
		setFile(data);
	}

	

	const _openModal = () => {
		sessionStorage.setItem('name', fullname);
		sessionStorage.setItem('email', email);
		sessionStorage.setItem('role', role);
		sessionStorage.setItem('other_role', other_role);
		sessionStorage.setItem('college_affiliation', college_affiliation);
		sessionStorage.setItem('category', category);
		sessionStorage.setItem('other_category', other_category);
		sessionStorage.setItem('issue', issue);
		sessionStorage.setItem('other_issue', other_issue);
		sessionStorage.setItem('description', description);
		sessionStorage.setItem('file', file);
		//select values
		sessionStorage.setItem('role_text', roleText);
		sessionStorage.setItem('category_text', categoryText);
		sessionStorage.setItem('issue_text', issueText);
		setModalShow(true);
	}


	const _SelectCategory = (data1,data2) => {
		setCategory(data1);
		let URL = 'http://localhost/php_capstone_api/index.php';
		axios.get(URL + "?tag=get_specific_issues"+"&category_id="+data1).then(res=>{
			console.log(res.data);
			setCategoryText(data2);
			setIssues(res.data);
			if(issues != "") {
				console.log(issues);
				setIssuesLoaded(true);
			}
		})
	}

	const _SelectIssue = (data1,data2) => {
		setIssueText(data2);
		setIssue(data1);
	}


	const _SelectRole = (data1,data2) => {
		setRoleText(data2);
		setRole(data1);
	}


	useEffect(()=>{
		if(hasLoaded == false) {
			axios.get(URL + "?tag=get_categories").then(res=>{
				setCategories(res.data);
				if(categories != "") {
					console.log(categories);
					setHasLoaded(true);
				}
			})
		}
	})

	return (
		<Form>
			<Form.Group className="mb-3" controlid="EvalTRC">
				<Form.Label className="evaltext">
					Name (Last Name, First Name)
				</Form.Label>
				<Form.Control
					type="text"
					placeholder="e.g. Dela Cruz, Juan"
					name="fullname"
					value={fullname}
					onChange={(text) => {
						setFullName(text.target.value)
					}}
				/>
				<Form.Control.Feedback type="invalid">
					
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3" controlid="email">
				<Form.Label className="evaltext">UST Email Address</Form.Label>
				<Form.Control
					type="text"
					placeholder="e.g. juan.delacruz@ust.edu.ph"
					name="email"
					value={email}
					onChange={(text) => {
						setEmail(text.target.value)
					}}
				/>
				<Form.Control.Feedback type="invalid">
					
				</Form.Control.Feedback>
				</Form.Group>
					<p
						style={{
							color: "#f27427",
							fontStyle: "italic",
							marginBottom: "8px",
						}}
					>
						Note: If the problem pertains to the inability to access your UST
						email, such as issues with login credentials, OR you are a Guest of
						UST,you may use your personal email.
					</p>
					<Row>
						<Col>
							<Form.Label className="evaltext">Role</Form.Label>
							<Form.Select
								className="mb-3"
								name="role"
								value={role}
								onChange={(item) => {
									_SelectRole(item.target.value,item.target.options[item.target.selectedIndex].text)
								}}
							>
								<option value="">Choose from drop-down list</option>
								<option value="1">Admin/Acad Official</option>
								<option value="2">Academic Staff</option>
								<option value="3">Non-academic Staff</option>
								<option value="4">Student</option>
								<option value="0">Other</option>
							</Form.Select>
						</Col>
						{role==="0"&& 




						<Col>
							<Form.Group className="mb-3" id="otherRole">
								<Form.Label className="evaltext">Other</Form.Label>
								<Form.Control
									type="text"
									placeholder=""
									name="otherRole"
									value={other_role}
									onChange={(text) => {
										setOtherRole(text.target.value)
									}}
								/>
								<Form.Control.Feedback type="invalid">
									
								</Form.Control.Feedback>
							</Form.Group>
						</Col>
						}
						
					</Row>
						<Form.Group className="mb-3" id="otherRole">
							<Form.Label className="evaltext">College Affiliation</Form.Label>
							<Form.Control
								type="text"
								placeholder="Please specify the college, office or department you are affiliated with"
								name="collegeAffiliation"
								value={college_affiliation}
								onChange={(text) => {
									setAffiliation(text.target.value)
								}}
							/>
							<Form.Control.Feedback type="invalid">
								
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Label className="evaltext">Category</Form.Label>
						<Form.Select
							className="mb-3"
							value={category}
							onChange={(item) => {
								_SelectCategory(item.target.value,item.target.options[item.target.selectedIndex].text)
							}}
						>
						<option key={0} value={0}>Choose Category</option>;
					  	{categories.map((e, key) => {
					  		return <option key={key} value={e['category_id']}>{e['category_name']}</option>;
					    })}
						</Form.Select>

						<Form.Group className="mb-3" controlid="otherCategory">
							<Form.Label className="evaltext">Other</Form.Label>
							<Form.Control
								type="text"
								placeholder=""
								name="otherCategory"
								value={other_category}
								onChange={(text) => {
									setOtherCategory(text.target.value)
								}}
							/>
						</Form.Group>

						<Form.Label className="evaltext">Issue</Form.Label>
						<Form.Select
							className="mb-3"
							name="issue"
							value={issue}
							onChange={(item) => {
								_SelectIssue(item.target.value,item.target.options[item.target.selectedIndex].text)
							}}
						>
							<option value="">Choose from drop-down list</option>
							{issues.map((e, key) => {
						  		return <option key={key} value={e['issue_id']}>{e['issue_name']}</option>;
						    })}}

							{/* <Form.Control.Feedback type="invalid">
								{errors.issue}
							</Form.Control.Feedback> */}
						</Form.Select>

						<Form.Group className="mb-3" controlid="otherIssue">
							<Form.Label className="evaltext">Other</Form.Label>
							<Form.Control
								type="text"
								placeholder=""
								name="otherIssue"
								value={other_issue}
								onChange={(text) => {
									setOtherIssue(text.target.value)
								}}
							/>
							<Form.Control.Feedback type="invalid">
								
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<Form.Label className="evaltext">Description</Form.Label>

							<Form.Control
								as="textarea"
								rows={8}
								type="text"
								className="mb-3"
								controld="description"
								name="description"
								value={description}
								onChange={(text) => {
									setDescription(text.target.value)
								}}
								
								placeholder="Kindly describe the situation. This would help us resolve the issue faster. You can add a link in here as well."
							/>
						</Form.Group>

						<Form.Group controlid="formFileMultiple" className="mb-3">
							<Form.Label className="evaltext">Upload File</Form.Label>
							<p style={{ color: "#f27427", fontStyle: "italic" }}>
								Screenshots or PDF only
							</p>
							<Form.Control
								type="file"
								multiple
								required
								size="lg"
								name="uploadFile"
								onChange={(e) => _selectFile(e.target.value)}
								ref={ref}
							/>
							<Form.Control.Feedback type="invalid">

							</Form.Control.Feedback>
						</Form.Group>
						<BtnWrapper>
							<Button1
								type="button"
								onClick={_openModal}
							>
								Submit
							</Button1>
							<ConfirmModal show={modalShow} onHide={() => setModalShow(false)} />
						</BtnWrapper>
					</Form>
			)
		};


export default TicketForm;
