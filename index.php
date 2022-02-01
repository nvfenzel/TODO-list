<?php session_start();

if (!isset($_SESSION['user'])) {
    header('Location: users/login.view.php');
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do App</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="checkbox.css">
    <link rel="stylesheet" href="main.css">
</head>

<body>
    <main>
        <h1>TO-DO App</h1>
        <a href="users/cerrar.php">Cerrar sesión</a>
        <div id="lists"></div>
        <div id="add-container">
            <form action="" id="formitnew">
                <input type="text" id="itnew" name="envio" autocomplete="off" placeholder="Crea una nueva tarea...">
                <select name="" id="slist">
                    <option value="General">General</option>
                    <option value="Casa">Casa</option>`
                    <option value="Trabajo">Trabajo</option>`
                </select>
            </form>
        </div>
        <div id="todos"></div>
    </main>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="index.js"></script>
</body>

</html>