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
    //TEST PAGE


//    case "POST":
//       $test = json_decode( file_get_contents('php://input') );
//       $sql = "INSERT INTO test(id, first_name, last_name, username, city, state, zip, terms, date_submitted) VALUES(null, :first_name, :last_name, :username, :city, :state, :zip, :terms, :date_submitted)";
//       $stmt = $conn->prepare($sql);
//       $date_submitted = date('Y-m-d');
//       $stmt->bindParam(':first_name', $test->first_name);
//       $stmt->bindParam(':last_name', $test->last_name);
//       $stmt->bindParam(':username', $test->username);
//       $stmt->bindParam(':city', $test->city);
//       $stmt->bindParam(':state', $test->state);
//       $stmt->bindParam(':zip', $test->zip);
//       $stmt->bindParam(':terms', $test->terms);
//       $stmt->bindParam(':date_submitted', $date_submitted);

//       if($stmt->execute()) {
//           $response = ['status' => 1, 'message' => 'Record created successfully.'];
//       } else {
//           $response = ['status' => 0, 'message' => 'Failed to create record.'];
//       }
//       echo json_encode($response);
//       break;
/////////////////////////////////////////////
///////// CATEGORY CATEGORY CATEGORY ////////
/////////////////////////////////////////////

      case "POST":
        $categories = json_decode( file_get_contents('php://input') );

        //kapag may auto increment ka na id (primary_id) hindi mo na lagi dapat sinasama yun sa query kasi automatic naman yun magkakaron ng value.
        $sql = "INSERT INTO categories(category_name, category_description, category_status) VALUES(?,?,?)";
        $stmt = $conn->prepare($sql);
    
        if($stmt->execute([$categories->category_name,$categories->category_description,$categories->category_status])) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

        case "GET":
            $sql = "SELECT * FROM categories";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[3]) && is_numeric($path[3])) {
                $sql .= " WHERE category_id = :category_id";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':category_id', $path[3]);
                $stmt->execute();
                $categories = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
    
            echo json_encode($categories);
            break;

        case "PUT":
            $categories = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE categories SET category_name= :category_name, category_description= :category_description, category_status= :category_status WHERE category_id = :category_id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':category_id', $categories->category_id);
            $stmt->bindParam(':category_name', $categories->category_name);
            $stmt->bindParam(':category_description', $categories->category_description);
            $stmt->bindParam(':category_status', $categories->category_status);
      
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
            
        case "DELETE":
                $sql = "DELETE FROM categories WHERE category_id = :category_id";
                $path = explode('/', $_SERVER['REQUEST_URI']);
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':category_id', $path[3]);
        
                if($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to delete record.'];
                }
                echo json_encode($response);
                break;

            
}