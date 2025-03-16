<?php
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);
$album = $data['album'];
$likes = $data['likes'];

$count = json_decode(file_get_contents('count.json'), true);
$count[$album] = $likes;
file_put_contents('count.json', json_encode($count, JSON_PRETTY_PRINT));

echo json_encode(['status' => 'success']);
?>