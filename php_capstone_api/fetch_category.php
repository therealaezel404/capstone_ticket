<?php

header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$conn = mysqli_connect('localhost','root','','ticketing-system');

/* 
 $stateID = $_POST['stateID']; */

 $sql = "SELECT * FROM categories";
 $query = mysqli_query($conn,$sql);

 $output = []; //OR  $output = array(); 
  
    while($row=mysqli_fetch_assoc($query))
    {
        $output[] = array(  
              "category_id" => $row['category_id'],  
							"category_name" => $row['category_name'], 
						); 
    }

    echo json_encode($output,JSON_PRETTY_PRINT);
    ?>