<?php

    $requestData = file_get_contents("php://input");

    $data = json_decode($requestData,true);

    $query = "DELETE FROM `stock` WHERE `stock`.`id` = ".$data["id"];
   
    $connection = mysqli_connect('localhost','root','','Assignment');
    $exequery = mysqli_query($connection,  $query);

    if($exequery >= 1){
        print("Data Deleted Successfully");
    }else{
        print("Something went wrong........!");
    }

    

?>
