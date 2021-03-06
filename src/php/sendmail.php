<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('hi@avanta.ru', 'Avanta');
	//Кому отправить
	$mail->addAddress('brucelogmun@yandex.ru');
	//Тема письма
	$mail->Subject = 'Заявка Avanta';


	//Тело письма
	$body = '<h1>Получена новая заявка с сайта Аванта Декор!</h1>';
	
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Телефон или мессенджер:</strong> '.$_POST['phone'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Благодарим за оставленную заявку!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>