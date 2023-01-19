<?php

    $requestData = file_get_contents("php://input");

    $data = json_decode($requestData,true);

    $query = "INSERT INTO `stock` (`id`, `name`, `date`, `cost`, `folio`, `itemQty`, `damageQty`, `Stock`, `location`, `Transfered`, `tqty`, `remarks`) VALUES (NULL, '"
    .$data["name"]."', '".$data["date"]."', '".$data["cost"]."', '"
    .$data["ledger"]."', '".$data["itemqty"]."', '".$data["dqty"]."', '"
    .$data["pstock"]."',' ".$data["location"]."',' ".$data["transfer"]."', '"
    .$data["tqty"]."', '".$data["remark"]."');";
   
    $connection = mysqli_connect('localhost','root','','Assignment');
    $exequery = mysqli_query($connection,  $query);

    if($exequery >= 1){
        print("Data Inserted Successfully");
    }else{
        print("Something went wrong........!");
    }

    

?>
