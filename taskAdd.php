<?php

include('database.php');

if (isset($_POST['text'])) {
    $text = $_POST['text'];
    $text = trim($text);
    $text = stripslashes($text);
    $text = htmlspecialchars($text);
    $list = $_POST['list'];
    $completed = $_POST['completed'];
    $query = "INSERT into todos(text, list, completed) VALUES ('$text', '$list', '$completed')";
    $result = mysqli_query($connection, $query);
    if (!$result) {
        die('La consulta falló');
    }
    echo 'Tarea agregada satisfactoriamente';
}
