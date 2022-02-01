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
        <h1>Inicia Sesión</h1>
        <div id="container-login">
            <form action="" id="form-login">
                <i class="user"></i><input type="text" id="user-login" autocomplete="off" placeholder="Usuario...">
                <i class="pass"></i> <input type="password" id="pass-login" autocomplete="off" placeholder="Contraseña...">
                <input type="submit" value="Iniciar Sesión">
            </form>
            <p class="texto-registrate">
                ¿ Aún no tienes cuenta ?
                <a href="register.view.php">Registrate</a>
            </p>
            <div id="commit-login"></div>
        </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="login.js"></script>
</body>

</html>