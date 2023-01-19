<?php 
   
    $requestData = file_get_contents("php://input");

    $data = json_decode($requestData,true);

    $tag = array(
        'stdname',
        'phno',
        'email',
        'sem',
        'pkg'
    );

    $tags = array( "Name", "Phone no", "Email", "Semester", "Package");


    $connection = mysqli_connect('localhost','root','','wt_assignment');

    $query = "UPDATE `".$data['branch']."` SET ";

    for($i=0;$i<count($tag);$i++){
        if($i+1 == count($tag)){
            $query.= "`".$tags[$i]."`='".$data[$tag[$i]]."' ";
        }else{

            $query.= "`".$tags[$i]."`='".$data[$tag[$i]]."', ";
        }
    }

    $query.="WHERE `USN` = '".$data['stdusn']."' AND `Company` = '".$data['cmp']."';";
    
    $exequery = mysqli_query($connection,  $query) or die("Data Doesn't Exist");

    if($exequery >= 1){
        print("Data Updated in ".$data["branch"]." Successfully");
    }else{
        print("Something went wrong........!");
    }

    // echo $query;
  
?>