<?php

    $requestData = file_get_contents("php://input");

    $data = json_decode($requestData,true);


    $query = "SELECT * FROM `admin` WHERE `username` = '".$data["user"]."';";

    try{
        $connection = mysqli_connect('localhost','root','','Assignment');
        $exequery = mysqli_query($connection,  $query);

        $row = mysqli_fetch_assoc($exequery);
        if($row == null){
            print("false");
        }else{
            if($row["username"] == $data["user"] && $row["password"] == $data["password"]){
                print(json_encode(array("status"=>"true","error"=>"false","location"=>"table.html")));
                
            }else{
                print(json_encode(array("status"=>"false","Message"=>"Please Enter Valid Data","error"=>"false")));
            }
        }
    }
    catch(Exception $e){
        print(json_encode(array("error"=>"true","Message"=>"Something went Wrong...!")));
    }

    


    // print(json_encode($data));



?>