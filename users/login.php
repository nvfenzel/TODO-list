<?php session_start();

if (isset($_SESSION['user'])) {
    header('Location: ../index.php');
}


include('../database.php');

if (isset($_POST['user'])) {
    $user = filter_var(strtolower($_POST['user']), FILTER_SANITIZE_STRING);
    $pass = $_POST['pass'];
    $pass = hash('sha512', $pass);

    $query = "SELECT*FROM users WHERE user = '$user' AND pass = '$pass'";
    $result = mysqli_query($connection, $query);

    while ($row = mysqli_fetch_assoc($result))
        $test[] = $row;

    if ($test !== null) {
        $_SESSION['user'] = $user;
        echo json_encode($test);
    } else {
        echo json_encode(false);
    }
}
