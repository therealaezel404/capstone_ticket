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
    $test2 = json_decode( file_get_contents('php://input') );
    $sql = "INSERT INTO test2(issue_id, issue_name, category_id, issue_description, issue_status) VALUES(null, :issue_name, :category_id :issue_description, :issue_status)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':issue_name', $test2->issue_name);
    $stmt->bindParam(':category_id', $test2->category_id);
    $stmt->bindParam(':issue_description', $test2->issue_description);
    $stmt->bindParam(':issue_status', $test2->issue_status);

   

    if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'Record created successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create record.'];
    }
    echo json_encode($response);
    break;
   }