<?php

    $requestData = file_get_contents("php://input");

    $data = json_decode($requestData,true);

     $tags = array(
        "id",
        "name",
        "date",
        "cost",
        "ledger",
        "itemqty",
        "dqty",
        "pstock",
        "location",
        "transfer",
        "tqty",
        "remark",
     );

     $fields = array(
        "name",
        "date",
        "cost",
        "folio",
        "itemQty",
        "damageQty",
        "Stock",
        "location",
        "Transfered",
        "tqty",
        "remarks"        
     );

     $query = "UPDATE `stock` SET";

     for($i = 0;$i< count($fields);$i++){
        if($i == count($fields)-1){
            $query.=" `".$fields[$i]."` = '".$data[$tags[$i+1]]."'";
        }else{

            $query.=" `".$fields[$i]."` = '".$data[$tags[$i+1]]."',";
        }
     }

     $query.= " WHERE `stock`.`id` = ".$data["id"].";";

    // $query = "UPDATE `stock` SET `name` = 'adae', `date` = '2022-12-18', `cost` = '80', `folio` = '0', `itemQty` = '0', `damageQty` = '0', `Stock` = '0', `location` = ' Computer Sciencea', `Transfered` = ' Information Sciencea', `tqty` = '80', `remarks` = 'bad' WHERE `stock`.`id` = 5;";
   
    try{
        $connection = mysqli_connect('localhost','root','','Assignment');
        $exequery = mysqli_query($connection,  $query);
        if($exequery >= 1){
            print("Data Updated Successfully");
        }
    }
    catch(Exception $e){
        print("Something went wrong........!");
    }
    

    // else{
    //     print("Something went wrong........!");
    // }

    // print($exequery);

    

?>
