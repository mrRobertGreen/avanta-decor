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
	$mail->addAddress('info@avantadecor.ru');
	//Тема письма
	$mail->Subject = 'Заявка Avanta';


	//Тело письма
	$body = '<h1>Получена новая заявка с сайта Аванта Декор!</h1>';
	
	if(trim(!empty($_POST['cooperation']))){
		$body.='<p><strong>Новый дизайнер или архитектор хочет подружиться с нами!</strong></p>';
	} else if(trim(!empty($_POST['name']))){
		if(trim(!empty($_POST['name']))){
			$body.='<p><strong>Название:</strong> '.$_POST['name'].'</p>';
		}
		if(trim(!empty($_POST['category']))){
			$body.='<p><strong>Категория:</strong> '.$_POST['category'].'</p>';
		}
		if(trim(!empty($_POST['form']))){
			$body.='<p><strong>Форма:</strong> '.$_POST['form'].'</p>';
		}
		if(trim(!empty($_POST['type']))){
			$body.='<p><strong>Тип:</strong> '.$_POST['type'].'</p>';
		}
		if(trim(!empty($_POST['thickness']))){
			$body.='<p><strong>Толщина:</strong> '.$_POST['thickness'].'</p>';
		}
		if(trim(!empty($_POST['height']))){
			$body.='<p><strong>Высота:</strong> '.$_POST['height'].'</p>';
		}
		if(trim(!empty($_POST['metres']))){
			$body.='<p><strong>Метры:</strong> '.$_POST['metres'].'</p>';
		}
	}
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