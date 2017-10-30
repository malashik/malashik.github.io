<?php
header('Content-Type: application/json');
$name = $_POST['name'];
// $phone = $_POST['phone'];	
// $messagePhone="Телефон: $phone"
$message = "Сообщение от пользователя: $name";
$result = mail('malashik91@bk.ru', 'Тема письма', $message);
echo json_encode(array(
    'status' => $result
));



