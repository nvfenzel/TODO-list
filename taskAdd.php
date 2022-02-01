<?php session_start();

include('database.php');

if (isset($_POST['text'])) {
    $user = $_SESSION['user'];
    $text = $_POST['text'];
    $text = trim($text);
    $text = stripslashes($text);
    $text = htmlspecialchars($text);
    $list = $_POST['list'];
    $completed = $_POST['completed'];
    $query = "INSERT into todos(text, list, completed, user) VALUES ('$text', '$list', '$completed', '$user')";
    $result = mysqli_query($connection, $query);
    if (!$result) {
        die('La consulta falló');
    }
    echo 'Tarea agregada satisfactoriamente';
}
