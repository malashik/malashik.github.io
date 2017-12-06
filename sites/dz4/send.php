<?
$phone = $_POST['phone'];
$email = $_POST['email'];
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$phone = urldecode($phone);
$email = urldecode($email);
$phone = trim($phone);
$email = trim($email);
echo $phone;
echo "<br>";
echo $phone;

if (mail("malashik9110@gmail.com", "Заказ с сайта", "Телевон:".$phone.". E-mail: ".$email ,"From: http://localhost:3000/ \r\n"))
{ 
   echo "сообщение успешно отправлено"; 
} else { 
   echo "при отправке сообщения возникли ошибки"; 
}
?>