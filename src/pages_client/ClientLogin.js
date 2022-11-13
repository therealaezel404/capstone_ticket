import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Welc from "../assets_client/welc.jpg";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import axios from 'axios';

// import Button from "react-bootstrap/Button";
const CardWrapper = styled.div`
	justify-content: center;
	max-width: 900px;
	align-items: center;
	margin: 3% auto;
	padding: 0 50px;
	@media screen and (max-width: 480px) {
	padding: 20px;
}
`;
const Card = styled.div`
	background: rgb(253, 227, 123);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: left;
	border-radius: 5px;
	max-height: 10000px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	@media screen and (max-width: 480px) {
	padding: 15px;
}
`;
const Text1 = styled.p`
	font-size: 1.5rem;
	color: black;
	text-align: justify;
	@media screen and (max-width: 480px) {
	font-size: 1rem;
}
`;
const Text2 = styled.p`
	font-size: 1.5rem;
	color: #f27427;
	font-weight: bold;
	text-align: justify;
	margin-top: 10px;
	@media screen and (max-width: 480px) {
	font-size: 1rem;
}
`;
const Text3 = styled.p`
	font-size: 1rem;
	color: black;
	text-align: justify;
	font-style: italic;
	@media screen and (max-width: 480px) {
	font-size: 0.8rem;
}
`;
const Button0 = styled.button`
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
const Button1 = styled(Link)`
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
const BtnWrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
`;
const schema = yup.object().shape({
	email: yup
	.string()
	.min(9, "Please enter a valid email address.")
	.required("Please enter your email address."),
	trc: yup
	.string()
	.min(8, "Please enter a valid ticket reference code.")
	.max(8, "Please enter a valid ticket reference code.")
	.required("Please enter your ticket reference code."),
});





export function ClientLogin(props) {
	const [trc, setTicketNumber] = useState("");
	const [email, setEmail] = useState("");

	let navigate = useNavigate(); 
	const _gotoResults = () => {
		let path = '/checkticketstatus'; 
		navigate(path);
	}

	const _searchTicket = () => {
		let URL = 'http://localhost/php_capstone_api/index.php';
		axios.get(URL + "?tag=search_ticketnumber"+"&trc="+trc+"&email="+email).then(res=>{
			var output = JSON.parse(res.data);
			alert(output['status']);
			switch(output['status']) {
				case 'ok': // if client has successfully searched his/her ticket
					localStorage.setItem('trc', trc);
					_gotoResults();
				break;
				case 'error':
					alert("Ticket number not found.");
				break;
			}
		})
	}


	return (
		<div>
			<Container fluid className="banner">
				<Row>
					<Col className="yellow-stripe"></Col>
				</Row>
				<Row>
					<div className="welcome" style={{ backgroundImage: `url(${Welc})`, backgroundRepeat: "no-repeat", backgroundSize: "100%", height: "100%",}}>
						<Container>
							<Row>
								<Col className="banner-text-left">CHECK TICKET STATUS</Col>
							</Row>
							<Row>
								<Col className="banner-text-right">
									UST CLOUD CAMPUS<br></br>TECHNICAL SUPPORT TICKETING SYSTEM
								</Col>
							</Row>
						</Container>
					</div>
				</Row>
				<Row>
					<Col className="orange-stripe"></Col>
				</Row>
			</Container>
			<CardWrapper>
				<Text1>
					Please enter your Email and Ticket Reference Code below to check the
					status of your ticket.
				</Text1>
				<Card>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label className="evaltext">Your Email</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter the email you provided when you created a ticket"
								name="email"
								value={email}
								onChange={(text) => {
									setEmail(text.target.value)
								}}
								/>
							<Form.Control.Feedback type="invalid">

							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label className="evaltext">
								Your Ticket Reference Code
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="e.g. 12345678"
								name="trc"
								value={trc}
								onChange={(text) => {
									setTicketNumber(text.target.value)
								}}
								/>
								<Form.Control.Feedback type="invalid">
								
								</Form.Control.Feedback>
						</Form.Group>
						<BtnWrapper>
							<Button0 type="button"
								onClick={_searchTicket}>
							TRACK NOW
							</Button0>
						</BtnWrapper>
					</Form>
				</Card>
			</CardWrapper>
			<CardWrapper>
				<Text3>
					*Note: A Ticket Reference Code (TRC) is a unique randomly-generated
					number code provided once your ticket has been approved. It can found
					within the email we sent to the address you provided upon creating and
					submitting a ticket.
				</Text3>
				<Card>
					<Text2>
						If you have not submitted a ticket or you wish to create a new one,
						please click below.
					</Text2>
					<BtnWrapper>
						<Button1 to="/createnewticket">CREATE NEW TICKET</Button1>
					</BtnWrapper>
				</Card>
			</CardWrapper>
		</div>
	)
};
export default ClientLogin;