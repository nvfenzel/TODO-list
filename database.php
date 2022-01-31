<?php

$connection = mysqli_connect();

if (!$connection) {
    header('Location: error.php');
}
