<?php 
   
    $requestData = file_get_contents("php://input");

    $data = json_decode($requestData,true);

    $tag = array(
        'stdusn',
        'stdname',
        'phno',
        'email',
        'branch',
        'sem',
        'cmp',
        'pkg'
    );

    $connection = mysqli_connect('localhost','root','','wt_assignment');
    
    $query = "INSERT INTO `"
    .$data['branch']."` (`USN`, `Name`, `Phone no`, `Email`, `Branch`, `Semester`, `Company`, `Package`) VALUES ('"
    .$data['stdusn']."', '".$data['stdname']."', '".$data['phno']."', '"
    .$data['email']."', '".$data['branch']."', '".$data['sem']."', '"
    .$data['cmp']."', '".$data['pkg']."');";
    
    $exequery = mysqli_query($connection,  $query) or die("Data Doesn't Exist");

    if($exequery >= 1){
        print("Data Added in ".$data["branch"]." Successfully");
    }else{
        print("Something went wrong........!");
    }
  
?>