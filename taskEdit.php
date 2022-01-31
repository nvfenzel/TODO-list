<?php

include('database.php');

if (isset($_POST['idEl'])) {
    $idEl = $_POST['idEl'];
    $query1 = "SELECT completed FROM todos WHERE id = $idEl";
    $result1 = mysqli_query($connection, $query1);

    $row = (mysqli_fetch_array($result1))['completed'];


    if ($row == 'false') {
        $query2 = "UPDATE todos SET completed = 'true' WHERE id =  '$idEl'";
        $result2 = mysqli_query($connection, $query2);

        echo json_encode('se cambio a verdadero');
    } else {
        $query3 = "UPDATE todos SET completed = 'false' WHERE id =  '$idEl'";
        $result3 = mysqli_query($connection, $query3);
        echo json_encode('se cambio a falso');
    }
}

// if (!$result) {
//     die('Consulta fallida' . mysqli_error($connection));
// }
// }
