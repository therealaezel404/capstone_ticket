<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();
// var_dump($conn); //if successfully connected to db
$method = $_SERVER['REQUEST_METHOD'];





switch($method) {

/////////////////////////////////////////////
///////// ISSUES ISSUES ISSUES //////////////
/////////////////////////////////////////////

case "POST":
    $issues = json_decode( file_get_contents('php://input') );
    $sql = "INSERT INTO issues(issue_name, category_id, issue_description, issue_status) VALUES(?,?,?,?)";
    $stmt = $conn->prepare($sql);
    // $stmt->bindParam(':issue_name', $issues->issue_name);
    // $stmt->bindParam(':category_id', $issues->category_id);
    // $stmt->bindParam(':issue_description', $issues->issue_description);
    // $stmt->bindParam(':issue_status', $issues->issue_status);

    if($stmt->execute([$issues->issue_name,$issues->category_id,$issues->issue_description,$issues->issue_status])) {
        $response = ['status' => 1, 'message' => 'Record created successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create record.'];
    }
    echo json_encode($response);
    break;

    case "GET":
        $sql = "SELECT * FROM issues";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE issue_id = :issue_id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':issue_id', $path[3]);
            $stmt->execute();
            $issues = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $issues = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($issues);
        break;

    case "PUT":
            $issues = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE issues SET issue_name= :issue_name, category_id= :category_id, issue_description= :issue_description, issue_status= :issue_status WHERE issue_id = :issue_id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':issue_id', $issues->issue_id);
            $stmt->bindParam(':issue_name', $issues->issue_name);
            $stmt->bindParam(':category_id', $issues->category_id);
            $stmt->bindParam(':issue_description', $issues->issue_description);
            $stmt->bindParam(':issue_status', $issues->issue_status);
        
           
      
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
            
            case "DELETE":
               $sql = "DELETE FROM issues WHERE issue_id = :issue_id";
               $path = explode('/', $_SERVER['REQUEST_URI']);
               $stmt = $conn->prepare($sql);
               $stmt->bindParam(':issue_id', $path[3]);
       
               if($stmt->execute()) {
                   $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
               } else {
                   $response = ['status' => 0, 'message' => 'Failed to delete record.'];
               }
               echo json_encode($response);
               break;
}