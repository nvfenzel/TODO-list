<?php

include('database.php');

if (isset($_POST['idPE'])) {

    $id = $_POST['idPE'];

    $query = "DELETE FROM todos WHERE id = $id";
    $result = mysqli_query($connection, $query);
    if (!$result) {
        die('La consulta falló');
    }

    echo "La tarea se eliminó";
}
