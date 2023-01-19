<?php

    $requestData = file_get_contents("php://input");

    $data = json_decode($requestData,true);

    $query = "DELETE FROM `".$data["table"]."` WHERE `USN` = '".$data["usn"]."' and `Company` = '".$data["cmp"]."';";
   
    $connection = mysqli_connect('localhost','root','','wt_assignment');
    $exequery = mysqli_query($connection,  $query) or die("Data Doesn't Exist");

    // echo $query;

    if($exequery >= 1){
        print("Data Deleted Successfully");
    }else{
        print("Something went wrong........!");
    }
?>
