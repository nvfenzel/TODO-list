<?php session_start();

if (isset($_SESSION['user'])) {
    header('Location: ../index.php');
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
    <link rel="stylesheet" href="../main.css">
</head>

<body>
    <main>
        <h1>Registrate</h1>
        <div id="container-register">
            <form action="" id="form-register">
                <i class="user"></i><input type="text" id="user-register" autocomplete="off" placeholder="Usuario...">
                <i class="pass"></i><input type="password" id="pass" autocomplete="off" placeholder="Contraseña...">
                <i class="pass"></i><input type="password" id="pass2" autocomplete="off" placeholder="Repita su contraseña...">
                <input type="submit" value="Registrarse">
            </form>
            <p class="texto-registrate">
                ¿ Ya tienes cuenta ?
                <a href="login.view.php">Iniciar Sesión</a>
            </p>
            <div id="commit-register"></div>
        </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="register.js"></script>
</body>

</html>