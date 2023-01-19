<?php

    $connection = mysqli_connect('localhost','root','','Assignment');

    $exequery = mysqli_query($connection, "SELECT * FROM `stock`");

    $jarray = array();

    while ($row = mysqli_fetch_assoc($exequery)){
        $jarray[] = $row;
    }

    print(json_encode($jarray))
?>