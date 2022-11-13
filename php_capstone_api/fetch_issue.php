<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$conn = mysqli_connect('localhost','root','','ticketing-system');


$data = json_decode(file_get_contents("php://input"));

$category_id = $data->category_id;

$sql = "SELECT issues.* from categories 
        JOIN issues ON categories.category_id = issues.category_id 
        WHERE categories.category_id ='".$category_id."'";

$query = mysqli_query($conn,$sql);

$output = []; //OR  $output = array(); 
 
   while($row=mysqli_fetch_assoc($query))
   {
       $output[] = array(  
             "issue_id" => $row['issue_id'],  
                           "issue_name" => $row['issue_name'], 
                       ); 
   }

   echo json_encode($output,JSON_PRETTY_PRINT);
   ?>