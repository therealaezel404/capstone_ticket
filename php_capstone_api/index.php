<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods:POST");
include "dbconnect.php";

if(isset($_POST["tag"])) {	//POST
	$tag = $_POST["tag"];
}else if(isset($_GET["tag"])){ //GET
	$tag = $_GET["tag"];
}

switch ($tag) {
	case 'admin_edituserinfo':
		$user_id=$_POST['user_id'];
		$fname=$_POST['fname'];
		$lname=$_POST['lname'];
		$mname=$_POST['mname'];
		$email=$_POST['email'];
		$user_role=$_POST['role'];
		$user_status=$_POST['status'];

		$query="UPDATE tbl_users SET
		first_name=?,
		last_name=?,
		middle_name=?,
		email=?,
		user_role=?,
		user_status=?
		WHERE id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$fname,$lname,$mname,$email,$user_role,$user_status,$user_id])) {
			echo json_encode(json_encode([
				"status" => "updated"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_userdatabyid':
		$query="SELECT * FROM tbl_users WHERE id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$_GET['user_id']])) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'admin_changepassword':
		$user_id=$_POST['user_id'];
		$password=$_POST['password'];

		$query="UPDATE tbl_users SET password=? WHERE id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$password,$user_id])) {
			echo json_encode(json_encode([
				"status" => "updated"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'edit_void':
		$void_id=$_POST['void_id'];
		$reason=$_POST['reason'];
		$description=$_POST['description'];

		$query="UPDATE tbl_voidreasons SET reason=?, reason_desc=? WHERE id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$reason,$description,$void_id])) {
			echo json_encode(json_encode([
				"status" => "updated"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_voiddata':
		$query="SELECT * FROM tbl_voidreasons WHERE id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$_GET['void_id']])) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'add_voidreason':
		$reason = $_POST['reason'];
		$void_description = $_POST['void_description'];

		$query="INSERT INTO tbl_voidreasons (reason,reason_desc,date) VALUES (?,?,?)";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$reason,$void_description,date('Y-m-d')])) {
			echo json_encode(json_encode([
				"status" => "inserted"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'delete_void':
		$void_id=$_GET['void_id'];
		$query="DELETE FROM tbl_voidreasons WHERE id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$void_id])) {
			echo json_encode(json_encode([
				"status" => "deleted"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_void':
		$query="SELECT * FROM tbl_voidreasons";
		$stmt=$pdo->prepare($query);
		if($stmt->execute()) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_solutiondata':
		$query="SELECT * FROM tbl_solutions WHERE id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$_GET['solution_id']])) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'edit_solution':
		$solution_id=$_POST['solution_id'];
		$solution=$_POST['solution'];
		$solution_description=$_POST['solution_description'];

		$query="UPDATE tbl_solutions SET solution=?, solution_description=? WHERE id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$solution,$solution_description,$solution_id])) {
			echo json_encode(json_encode([
				"status" => "updated"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'add_solution':
		$solution = $_POST['solution'];
		$solution_description = $_POST['solution_description'];

		$query="INSERT INTO tbl_solutions (solution,solution_description,date_created) VALUES (?,?,?)";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$solution,$solution_description,date('Y-m-d')])) {
			echo json_encode(json_encode([
				"status" => "inserted"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'delete_solution':
		$solution_id=$_GET['solution_id'];
		$query="DELETE FROM tbl_solutions WHERE id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$solution_id])) {
			echo json_encode(json_encode([
				"status" => "deleted"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_solutions':
		$query="SELECT * FROM tbl_solutions";
		$stmt=$pdo->prepare($query);
		if($stmt->execute()) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'edit_reason':
		$reason_id=$_POST['reason_id'];
		$reason=$_POST['reason'];
		$reason_desc=$_POST['reason_desc'];


		$query="UPDATE tbl_reasons SET reason=?, reason_desc=? WHERE id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$reason,$reason_desc,$reason_id])) {
			echo json_encode(json_encode([
				"status" => "updated"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_reasonsdata':
		$query="SELECT * FROM tbl_reasons WHERE id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$_GET['reason_id']])) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'add_reason':
		$reason = $_POST['reason'];
		$reason_desc = $_POST['reason_desc'];

		$query="INSERT INTO tbl_reasons (reason,reason_desc,reason_added) VALUES (?,?,?)";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$reason,$reason_desc,date('Y-m-d')])) {
			echo json_encode(json_encode([
				"status" => "inserted"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'delete_reason':
		$reason_id=$_GET['reason_id'];
		$query="DELETE FROM tbl_reasons WHERE id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$reason_id])) {
			echo json_encode(json_encode([
				"status" => "deleted"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_user_roles':
		$query="SELECT * FROM tbl_user_roles";
		$stmt=$pdo->prepare($query);
		if($stmt->execute()) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'submitresolvemessage':
		$solution=$_POST['solution'];
		$status="2";
		$trc=$_POST['trc'];
		$remarks=$_POST['remarks'];


		$query="UPDATE tbl_tickets SET remarks=?, voided_reason=?, status=? WHERE ticket_number=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$remarks,$solution,$status,$trc])) {
			echo json_encode(json_encode([
				"status" => "updated"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_resolvelist':
		$query="SELECT * FROM tbl_solutions";
		$stmt=$pdo->prepare($query);
		if($stmt->execute()) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'submitvoidmessage':
		$voidreason=$_POST['voidreason'];
		$status="3";
		$trc=$_POST['trc'];
		$remarks=$_POST['remarks'];


		$query="UPDATE tbl_tickets SET remarks=?, voided_reason=?, status=? WHERE ticket_number=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$remarks,$voidreason,$status,$trc])) {
			echo json_encode(json_encode([
				"status" => "updated"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_voidreasons':
		$query="SELECT * FROM tbl_voidreasons";
		$stmt=$pdo->prepare($query);
		if($stmt->execute()) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_openedtickets':
		$user_id=$_GET['user_id'];
		$query="SELECT tbl_tickets.*, tbl_issues.issue_name, categories.category_name FROM tbl_tickets INNER JOIN tbl_issues ON tbl_tickets.issue=tbl_issues.issue_id INNER JOIN categories ON categories.category_id=tbl_tickets.category WHERE tech_user=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$user_id])) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_mytickets':
		$user_id=$_GET['user_id'];
		$query="SELECT 
			(SELECT count(id) FROM tbl_tickets WHERE status ='1' AND tech_user=?) as ongoing, 
			(SELECT count(id) FROM tbl_tickets WHERE status ='2' AND tech_user=?) as resolved, 
			(SELECT count(id) FROM tbl_tickets WHERE status ='3' AND tech_user=?) as canceled 
			FROM tbl_tickets LIMIT 1";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$user_id,$user_id,$user_id])) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_srcount':
		$query="SELECT (SELECT count(id) FROM tbl_tickets WHERE status ='4') as rejected, (SELECT count(id) FROM tbl_tickets WHERE tech_user ='0') as new_requests, (SELECT count(id) FROM tbl_tickets WHERE status ='5') as reopened FROM tbl_tickets LIMIT 1";
		$stmt=$pdo->prepare($query);
		if($stmt->execute()) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'reject_request':
		$tech_user=$_POST['user_id'];
		$status="3";
		$trc=$_POST['trc'];
		$remarks=$_POST['remarks'];

		$query="UPDATE tbl_tickets SET remarks=?, tech_user=?, status=? WHERE ticket_number=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$remarks,$tech_user,$status,$trc])) {
			echo json_encode(json_encode([
				"status" => "updated"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_reasons':
		$query="SELECT * FROM tbl_reasons";
		$stmt=$pdo->prepare($query);
		if($stmt->execute()) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'assign_tech':
		$tech_user=$_POST['user_id'];
		$status="1";
		$trc=$_POST['trc'];

		$query="UPDATE tbl_tickets SET tech_user=?, status=? WHERE ticket_number=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$tech_user,$status,$trc])) {
			echo json_encode(json_encode([
				"status" => "updated"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_activetechs':
		$query="SELECT * FROM tbl_users WHERE user_role<>? AND user_status=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute(["1","1"])) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_specificticket':
		$trc = $_GET['trc'];
		$query="SELECT tbl_tickets.*, tbl_issues.issue_name, categories.category_name FROM tbl_tickets INNER JOIN tbl_issues ON tbl_tickets.issue=tbl_issues.issue_id INNER JOIN categories ON categories.category_id=tbl_tickets.category WHERE tbl_tickets.ticket_number=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$trc])) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_servicerequests':
		$query="SELECT tbl_tickets.*, tbl_issues.issue_name, categories.category_name FROM tbl_tickets INNER JOIN tbl_issues ON tbl_tickets.issue=tbl_issues.issue_id INNER JOIN categories ON categories.category_id=tbl_tickets.category WHERE status=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute(["0"])) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_users':
		$query="SELECT tbl_users.*, tbl_user_roles.user_rolename FROM tbl_users INNER JOIN tbl_user_roles ON tbl_user_roles.id=tbl_users.user_role";
		$stmt=$pdo->prepare($query);
		if($stmt->execute()) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'insert_user':
		$first_name = $_POST['first_name'];
		$last_name = $_POST['last_name'];
		$middle_initial = $_POST['middle_initial'];
		$email = $_POST['email'];
		$password = $_POST['password'];
		$user_role = $_POST['user_role'];
		$status = $_POST['status'];

		$query="INSERT INTO tbl_users (first_name,last_name,middle_name,email,password,user_role,user_status,date_added) VALUES (?,?,?,?,?,?,?,?)";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$first_name,$last_name,$middle_initial,$email,$password,$user_role,$status,date('Y-m-d')])) {
			echo json_encode(json_encode([
				"status" => "inserted"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_user_roles':
		$query="SELECT * FROM tbl_user_roles";
		$stmt=$pdo->prepare($query);
		if($stmt->execute()) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'insert_issue':
		$issue_name=$_POST['issue_name'];
		$category_id=$_POST['category_id'];
		$issue_description=$_POST['issue_description'];
		$issue_status=$_POST['issue_status'];
		$date=date('Y-m-d');
		$query="INSERT INTO tbl_issues (issue_name,category_id,issue_description,issue_status,date_created,date_updated) VALUES (?,?,?,?,?,?)";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$issue_name,$category_id,$issue_description,$issue_status,$date,$date])) {
			echo json_encode(json_encode([
				"status" => "inserted"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_adminissues':
		$query="SELECT tbl_issues.*, categories.category_name, tbl_issues.date_created as dc FROM tbl_issues INNER JOIN categories ON tbl_issues.category_id=categories.category_id";
		$stmt=$pdo->prepare($query);
		if($stmt->execute()) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'delete_category':
		$category_id=$_GET['category_id'];
		$query="DELETE FROM categories WHERE category_id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$category_id])) {
			echo json_encode(json_encode([
				"status" => "deleted"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'update_category':
		$category_id=$_POST['category_id'];
		$category_name=$_POST['category_name'];
		$category_description=$_POST['category_description'];
		$category_status=$_POST['category_status'];
		$query="UPDATE categories SET category_name=?, category_description=?, category_status=? WHERE category_id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$category_name,$category_description,$category_status,$category_id])) {
			echo json_encode(json_encode([
				"status" => "updated"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_categorybyid':
		$category_id=$_GET['category_id'];
		$query="SELECT * FROM categories WHERE category_id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$category_id])) {
			if($stmt->rowCount() == "1"){
				echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
			} else {
				echo json_encode(json_encode([
					"status" => "error"
				]));
			}
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'insert_category':
		$category_status=$_POST['category_status'];
		$category_name=$_POST['category_name'];
		$category_description=$_POST['category_description'];
		$date=date('Y-m-d');
		$query="INSERT INTO categories (category_name,category_description,category_status,date_created,date_updated) VALUES (?,?,?,?,?)";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$category_name,$category_description,$category_status,$date,$date])) {
			echo json_encode(json_encode([
				"status" => "inserted"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_admincategories':
		$query="SELECT *, DATE(date_created) as dc FROM categories";
		$stmt=$pdo->prepare($query);
		if($stmt->execute()) {
			$datax=json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
			echo $datax;
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_ticketcounts':
		$staff_id = $_GET['staff_id'];
		$query="SELECT (SELECT count(id) FROM tbl_tickets WHERE status ='1' AND tech_user=?) as opened_tickets, (SELECT count(id) FROM tbl_tickets WHERE tech_user ='0') as new_requests, (SELECT count(id) FROM tbl_tickets WHERE status ='2' AND tech_user=?) as solved_tickets FROM tbl_tickets;";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$staff_id,$staff_id])) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'admin_login':
		$email=$_GET['email'];
		$password=$_GET['password'];
		$query="SELECT * FROM tbl_users WHERE email=? AND password=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$email,$password])) {
			if($stmt->rowCount() == "1"){
				$row=$stmt->fetch(PDO::FETCH_ASSOC);
				if($row['password'] == $password) { // kapag korek ang password
					echo json_encode(json_encode([
						"status" => "ok",
						"fullname" => $row['first_name'] . " " . $row['middle_name'] . " " . $row['last_name'],
						"email" => $row['email'],
						"user_role" => $row['user_role'],
						"id" => $row['id']
					]));
				} else { // kapag mali ang password
					echo json_encode(json_encode([
						"status" => "error"
					]));
				}
			} else {
				echo json_encode(json_encode([
					"status" => "error"
				]));
			}
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_ticketdetails':
		$ticket_number=$_GET['trc'];
		$query="SELECT tbl_tickets.*, categories.category_name, tbl_issues.issue_name, tbl_users.first_name as staff_fname, tbl_users.last_name as staff_lname, tbl_users.email as staff_email FROM tbl_tickets INNER JOIN categories ON categories.category_id=tbl_tickets.category INNER JOIN tbl_issues ON tbl_issues.issue_id=tbl_tickets.issue 
			INNER JOIN tbl_users ON tbl_users.id=tbl_tickets.tech_user
			WHERE ticket_number=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$ticket_number])) {
			if($stmt->rowCount() == "1"){
				echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
			} else {
				echo json_encode(json_encode([
					"status" => "error"
				]));
			}
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'search_ticketnumber':
		$ticket_number=$_GET['trc'];
		$email=$_GET['email'];
		$query="SELECT * FROM tbl_tickets WHERE ticket_number=? AND email=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$ticket_number,$email])) {
			if($stmt->rowCount() == "1"){
				echo json_encode(json_encode([
					"status" => "ok"
				]));
			} else {
				echo json_encode(json_encode([
					"status" => "error"
				]));
			}
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_specific_issues':
		$category_id=$_GET['category_id'];
		$query="SELECT * FROM tbl_issues WHERE category_id=?";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$category_id])) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'get_categories':
		$query="SELECT * FROM categories";
		$stmt=$pdo->prepare($query);
		if($stmt->execute()) {
			echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
	case 'insert_ticket':
		$ticket_number=strtoupper(rand(0,999) . substr(uniqid(), 0, 6));
		$email=$_POST['email'];
		$role=$_POST['role'];
		$affiliation=$_POST['affiliation'];
		$category=$_POST['category'];
		$issue=$_POST['issue'];
		$description=$_POST['description'];
		$file=$_POST['file'];
		$query="INSERT INTO tbl_tickets (ticket_number,email,role,affiliation,category,issue,description,file,date_added) VALUES (?,?,?,?,?,?,?,?,?)";
		$stmt=$pdo->prepare($query);
		if($stmt->execute([$ticket_number,$email,$role,$affiliation,$category,$issue,$description,$file,date('Y-m-d')])) {
			echo json_encode(json_encode([
				"status" => "inserted"
			]));
		} else {
			echo json_encode(json_encode([
				"status" => "error"
			]));
		}
	break;
}
?>