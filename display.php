<?php

    $table = $_GET["name"];

    $connection = mysqli_connect('localhost','root','','wt_assignment');
 
    $exequery = mysqli_query($connection, "SELECT * FROM `$table`");

    $jarray = array();

    while ($row = mysqli_fetch_assoc($exequery)){
        $jarray[] = $row;
    }

    print(json_encode($jarray))
?>