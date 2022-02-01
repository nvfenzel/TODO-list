<?php session_start();

if (isset($_SESSION['user'])) {
    header('Location: ../index.php');
}

include('../database.php');

if (isset($_POST['user'])) {
    $user = filter_var(strtolower($_POST['user']), FILTER_SANITIZE_STRING);
    $pass = $_POST['pass'];
    $pass = hash('sha512', $pass);

    $query = "SELECT * FROM users WHERE user = '$user' LIMIT 1";
    $result = mysqli_query($connection, $query);

    while ($row = mysqli_fetch_assoc($result))
        $test[] = $row;

    // echo json_encode($test);
    if ($test == null) {
        $query = "INSERT INTO users VALUES('$user','$pass')";
        $result = mysqli_query($connection, $query);
        $_SESSION['user'] = $user;
        echo json_encode('culo');
    } else {
        echo json_encode(false);
    }
}
