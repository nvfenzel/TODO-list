<?php

include('database.php');

$query = "SELECT * from todos";
$result = mysqli_query($connection, $query);

if (!$result) {
    die('La conexión falló' . mysqli_error($connection));
}

$json = array();

while ($row = mysqli_fetch_array($result)) {
    $json[] = array(
        'id' => $row['id'],
        'text' => $row['text'],
        'list' => $row['list'],
        'completed' => $row['completed']
    );
};

$jsonstring = json_encode($json);

echo $jsonstring;
