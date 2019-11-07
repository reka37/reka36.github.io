<?php
# получаем данные и отсекаем пробельные символы в начале и конце:
$name       = @ trim ($_POST['name']);
$name_1     = @ trim ($_POST['name-1']);
$name_2     = @ trim ($_POST['name-2']);
$name_3     = @ trim ($_POST['name-3']);
$name_4     = @ trim ($_POST['name-4']);
$phone      = @ trim ($_POST['phone']);
$email      = @ trim ($_POST['email']);
$promo      = @ trim ($_POST['promo']);
$ordername  = @ trim ($_POST['ordername']);
$selecttype  = @ trim ($_POST['selecttype']);
$selectval  = @ trim ($_POST['selectval']);
$emailTo    = "video-dedmoroz@inbox.ru"; //место для электронной почтыvideo-ng.ru@yandex.ru, 
$from       = "Ded_moroz <no-reply@moroz.com>";

function create_message($title, $data) {

        $time = date('d.m.Y в H:i');

        $message = "
            <!doctype html>
                <html>
                    <head>
                        <meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
                        <title>$title</title>
                        <style>
                            div, p, span, strong, b, em, i, a, li, td {
                                -webkit-text-size-adjust: none;
                            }
                            td{vertical-align:middle}
                        </style>
                    </head>

                    <body>

                        <table width='500' cellspacing='0' cellpadding='5' border='1' bordercolor='1' style='border:solid 1px #000;border-collapse:collapse;'>
                            <caption align='center' bgcolor='#dededd' style='background:#dededd'>$title</caption>";

            foreach ($data as $key => $val) {

                if ($val != '')
                    $message .= '<tr><td bgcolor="#efeeee" style="background:#efeeee">' . $key . ':</td><td>' . $val . '</td>';

            }

            $message .= "<tr><td bgcolor='#efeeee' style='background:#efeeee'>Дата:</td><td>$time</td></table></body></html>";

        return $message;

    }

    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers    .= "MIME-Version: 1.0\r\n";
    $headers    .= "From: ".$from."\r\n";

    $subject    = "=?utf-8?B?" . base64_encode("Новая заявка") . "?=";
    $body = create_message($text, array(
                                            'Имя 1' => $name_1,
                                            'Имя 2' => $name_2,
                                            'Имя 3' => $name_3,
                                            'Имя 4' => $name_4,
                                            'Имя клиента' => $name,
                                            'Ваш email' => $email,
                                            'Телефон' => $phone,
                                            'Промо-код' => $promo,
                                            'Название формы' => $ordername,
                                            'Пол' => $selectval
                                            ));
    mail ($emailTo, $subject, $body, $headers);

?>